// src/components/ChatWidget.tsx
'use client'; // Declare as a client component because it's interactive

import { useState } from 'react';
import { useChat } from 'ai/react'; // Import the core Hook

export function ChatWidget() {
  // 1. State management: control the chat window's open/close state
  const [isChatOpen, setIsChatOpen] = useState(false);

  // 2. Vercel AI SDK's core Hook
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    // api defaults to '/api/chat', so it can be omitted
    // api: '/api/chat',
  });

  // Styles for the floating button
  const buttonStyle = "fixed bottom-5 right-5 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700 transition-colors z-20";

  // Styles for the chatbox
  const chatboxStyle = `fixed bottom-24 right-5 w-80 h-[400px] bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 z-20 ${isChatOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`;

  return (
    <div>
      {/* 3. Chat Window UI */}
      <div className={chatboxStyle}>
        {/* Header */}
        <div className="p-4 bg-blue-600 text-white rounded-t-lg">
          <h3 className="text-lg font-semibold">AI Assistant</h3>
        </div>

        {/* Message List */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map(m => (
            <div key={m.id} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-3 py-2 rounded-lg ${m.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                {m.content}
              </span>
            </div>
          ))}
           {isLoading && <div className="text-left"><span className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-gray-800">...</span></div>}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>

      {/* 4. Floating Button (Launcher) */}
      <button
        className={buttonStyle}
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Toggle chat"
      >
        {/* Switch icon based on chat window state */}
        {isChatOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}
