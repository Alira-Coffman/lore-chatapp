import React from 'react';
import ChatName from './ChatName';

const ChatList = () => {
    const chats = ['Chat 1', 'Chat 2', 'Chat 3']; // Example array of chats

    return (
        <div>

            {chats.map((chat, index) => (
                <ChatName key={index} userName={chat} recentMessage='Hello' />
            ))}

        </div>
    );
};

export default ChatList;
