// src/pages/api/chat.ts
import {streamText} from "ai";

import {AIProvider} from "../../lib/aiProvider";

export const runtime = "edge";
export const maxDuration = 30;

export default async function POST(req: Request) {
  try {
    const {messages} = await req.json();

    // Use the abstracted AI provider class
    const aiProvider = AIProvider.fromEnvironment();
    const model = aiProvider.getModel();

    const result = await streamText({
      model,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        headers: {"content-type": "application/json"},
        status: 500,
      },
    );
  }
}
