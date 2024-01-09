'use client'
import React, { useState } from 'react';
import ChatName from './ChatName';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import { db } from '@/firebaseconfig';
import { getChats } from '@/api/getChats';
const ChatList = () => {
    const chats = ['Chat 1', 'Chat 2', 'Chat 3']; // Example array of chats
    // const [snapshot, loading, error] = useCollection(collection(db,));

    return (
        <div>

            {chats.map((chat, index) => (
                <ChatName key={index} userName={chat} recentMessage='Hello' />
            ))}

        </div>
    );
};

export default ChatList;
