// src/pages/api/chat.ts
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set Next.js Edge Runtime
export const runtime = 'edge';

export default async function POST(req: Request) {
  // From the request, extract the messages
  const { messages } = await req.json();

  // Call the OpenAI API
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // Or gpt-4
    stream: true, // Enable streaming responses
    messages,
  });

  // Convert the response into a friendly text stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
