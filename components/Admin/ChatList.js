'use client'
import React, { useState } from 'react';
import ChatName from './ChatName';
import { useCollection } from 'react-firebase-hooks/firestore';
import { query, collection, where } from 'firebase/firestore';
import { db } from '@/firebaseconfig';
import { getOtherEmail } from '@/helpers/helpers';
const ChatList = ({ currentUser }) => {
    if (!currentUser) return <p>Loading</p>
    console.log('currentUser', currentUser)
    //const chats = ['Chat 1', 'Chat 2', 'Chat 3']; // Example array of chats
    const q = query(collection(db, 'chats'), where('users', 'array-contains', currentUser));
    const [snapshot, loading, error] = useCollection(q);
    const chats = snapshot?.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log('chats', chats)

    return (
        <div>

            {chats?.map((chat, index) => (
                <ChatName key={index} userName={getOtherEmail(chat?.users, currentUser)} recentMessage='Hello' />
            ))}

        </div>
    );
};

export default ChatList;
