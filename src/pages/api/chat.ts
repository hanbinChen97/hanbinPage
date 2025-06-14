// src/pages/api/chat.ts
import {azure} from "@ai-sdk/azure";
import {openai} from "@ai-sdk/openai";
import {createOpenAICompatible} from "@ai-sdk/openai-compatible";
import {LanguageModel, streamText} from "ai";

export const runtime = "edge";
export const maxDuration = 30;

export default async function POST(req: Request) {
  const {messages} = await req.json();

  let llmProvider: LanguageModel;
  const provider = process.env.LLM_PROVIDER?.toLowerCase() || "openai";

  switch (provider) {
    case "azure":
      if (
        !process.env.AZURE_OPENAI_API_KEY ||
        !process.env.AZURE_OPENAI_ENDPOINT ||
        !process.env.AZURE_OPENAI_DEPLOYMENT_NAME
      ) {
        throw new Error(
          "Azure OpenAI environment variables not set (AZURE_OPENAI_API_KEY, AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_DEPLOYMENT_NAME)",
        );
      }
      // Assuming azure provider picks up API key, endpoint from env vars and takes deployment name as model ID.
      llmProvider = azure(process.env.AZURE_OPENAI_DEPLOYMENT_NAME);
      break;

    case "huggingface": {
      if (!process.env.HF_MODEL_ENDPOINT) {
        throw new Error(
          "Hugging Face model endpoint environment variable not set (HF_MODEL_ENDPOINT)",
        );
      }
      const huggingFaceProvider = createOpenAICompatible({
        name: "huggingface", // Custom name for this provider instance
        apiKey: process.env.HF_API_KEY,
        baseURL: process.env.HF_MODEL_ENDPOINT,
        // Additional headers or queryParams can be added here if needed by the specific HF endpoint
      });
      llmProvider = huggingFaceProvider(
        process.env.HF_MODEL_ID || "huggingface-default-model",
      );
      break;
    }
    case "openai":
    default:
      if (!process.env.OPENAI_API_KEY) {
        throw new Error(
          "OpenAI API key environment variable not set (expected in OPENAI_API_KEY)",
        );
      }
      llmProvider = openai("gpt-3.5-turbo");
      break;
  }

  const result = await streamText({
    model: llmProvider,
    messages,
  });

  return result.toDataStreamResponse();
}
