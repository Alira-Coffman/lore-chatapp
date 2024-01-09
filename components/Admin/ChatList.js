'use client'
import React, { useEffect, useState } from 'react';
import ChatName from './ChatName';
import { useCollection } from 'react-firebase-hooks/firestore';
import { query, collection, where } from 'firebase/firestore';
import { auth, db } from '@/firebaseconfig';
import { getOtherEmail } from '@/helpers/helpers';
import { useAuthState } from 'react-firebase-hooks/auth';
const ChatList = () => {
    const [currentUser, isLoading, isError] = useAuthState(auth);
    const [q, setQ] = useState(null);
    const [snapshot] = useCollection(q);

    useEffect(() => {
        if (currentUser) {
            setQ(query(collection(db, 'chats'), where('users', 'array-contains', currentUser.email)));
        }
    }, [currentUser]);

    const chats = snapshot?.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    if (!currentUser) return <p>Loading</p>


    return (
        <div>
            {chats?.map((chat, index) => (
                <ChatName key={index} userName={getOtherEmail(chat?.users, currentUser?.email)} id={chat?.id} />
            ))}
        </div>
    );
};

export default ChatList;
