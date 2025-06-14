// src/pages/api/chat.ts
import {openai} from "@ai-sdk/openai"; // Import the specific provider
import {streamText} from "ai"; // Import streamText

// Set Next.js Edge Runtime and max duration
export const runtime = "edge";
export const maxDuration = 30; // Allow streaming responses up to 30 seconds

export default async function POST(req: Request) {
  // From the request, extract the messages
  const {messages} = await req.json();

  // Call the OpenAI API using streamText
  const result = await streamText({
    model: openai("gpt-3.5-turbo"), // Specify the model via the OpenAI provider
    messages,
  });

  // Respond with the stream in the new data stream response format
  return result.toDataStreamResponse();
}
