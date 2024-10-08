import React from 'react';

const messages = [
  {
    id: 1,
    sender: "Alice",
    date: "2024-09-18",
    content: "Hey, are we still on for the meeting tomorrow?",
  },
  {
    id: 2,
    sender: "Bob",
    date: "2024-09-17",
    content: "Don't forget to send me the project updates.",
  },
  {
    id: 3,
    sender: "Alice",
    date: "2024-09-17",
    content: "I'll send them over shortly.",
  },
  {
    id: 4,
    sender: "Bob",
    date: "2024-09-18",
    content: "Great! Looking forward to it.",
  },
];

const groupMessagesByDate = (messages) => {
  return messages.reduce((acc, message) => {
    (acc[message.date] = acc[message.date] || []).push(message);
    return acc;
  }, {});
};

const Messages = () => {
  const groupedMessages = groupMessagesByDate(messages);
  
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Messages</h1>
      <div className="mt-4 space-y-6">
        {Object.keys(groupedMessages).map((date) => (
          <div key={date} className="mb-4">
            <h2 className="font-semibold text-xl text-gray-700 mb-2">{date}</h2>
            {groupedMessages[date].map((message) => (
              <div 
                key={message.id} 
                className="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-semibold text-indigo-600">{message.sender}</h3>
                <p className="mt-2 text-gray-800">{message.content}</p>
              </div>
            ))}
          </div>
        ))}
        {Object.keys(groupedMessages).length === 0 && (
          <p className="text-gray-500">No messages available.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
