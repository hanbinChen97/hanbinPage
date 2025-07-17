// src/lib/aiProvider.ts
import {azure} from "@ai-sdk/azure";
import {google} from "@ai-sdk/google";
import {openai} from "@ai-sdk/openai";
import {createOpenAICompatible} from "@ai-sdk/openai-compatible";
import {LanguageModel} from "ai";

export type AIProviderType = "openai" | "azure" | "gemini" | "huggingface";

export interface AIProviderConfig {
  provider: AIProviderType;
  apiKey?: string;
  endpoint?: string;
  deploymentName?: string;
  modelId?: string;
}

export class AIProvider {
  private provider: AIProviderType;
  private config: AIProviderConfig;

  constructor(config: AIProviderConfig) {
    this.provider = config.provider;
    this.config = config;
  }

  /**
   * Create AI provider from environment variables
   */
  static fromEnvironment(): AIProvider {
    const provider = (process.env.LLM_PROVIDER?.toLowerCase() ||
      "openai") as AIProviderType;

    const config: AIProviderConfig = {
      provider,
    };

    switch (provider) {
      case "azure":
        config.apiKey = process.env.AZURE_OPENAI_API_KEY;
        config.endpoint = process.env.AZURE_OPENAI_ENDPOINT;
        config.deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;
        break;
      case "gemini":
        config.apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
        config.modelId = process.env.GEMINI_MODEL_ID;
        break;
      case "huggingface":
        config.apiKey = process.env.HF_API_KEY;
        config.endpoint = process.env.HF_MODEL_ENDPOINT;
        config.modelId = process.env.HF_MODEL_ID;
        break;
      case "openai":
      default:
        config.apiKey = process.env.OPENAI_API_KEY;
        config.modelId = process.env.OPENAI_MODEL_ID;
        break;
    }

    return new AIProvider(config);
  }

  /**
   * Get the language model instance based on the configured provider
   */
  getModel(): LanguageModel {
    switch (this.provider) {
      case "azure":
        return this.createAzureModel();
      case "gemini":
        return this.createGeminiModel();
      case "huggingface":
        return this.createHuggingFaceModel();
      case "openai":
      default:
        return this.createOpenAIModel();
    }
  }

  private createOpenAIModel(): LanguageModel {
    if (!this.config.apiKey) {
      throw new Error("OpenAI API key is required");
    }
    return openai(this.config.modelId || "gpt-3.5-turbo");
  }

  private createAzureModel(): LanguageModel {
    if (
      !this.config.apiKey ||
      !this.config.endpoint ||
      !this.config.deploymentName
    ) {
      throw new Error(
        "Azure OpenAI requires API key, endpoint, and deployment name",
      );
    }
    return azure(this.config.deploymentName);
  }

  private createGeminiModel(): LanguageModel {
    if (!this.config.apiKey) {
      throw new Error("Google API key is required for Gemini");
    }
    return google(this.config.modelId || "gemini-1.5-flash");
  }

  private createHuggingFaceModel(): LanguageModel {
    if (!this.config.endpoint) {
      throw new Error("Hugging Face model endpoint is required");
    }

    const huggingFaceProvider = createOpenAICompatible({
      name: "huggingface",
      apiKey: this.config.apiKey,
      baseURL: this.config.endpoint,
    });

    return huggingFaceProvider(
      this.config.modelId || "huggingface-default-model",
    );
  }
}
