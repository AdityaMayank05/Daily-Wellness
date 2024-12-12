import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Daily Wellness AI</h1>
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-2 sm:p-4 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className="my-1 sm:my-2 flex justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-2 max-w-[80%] sm:max-w-xs">
              {message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Container */}
      <div className="border-t border-gray-300 p-2 sm:p-4">
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
