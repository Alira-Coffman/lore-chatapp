'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ChatBox from '../Chat/ChatBox';
import { createNewChat } from '@/helpers/helpers';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebaseconfig';
export default function ChatOverlay() {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [chats, setChats] = useState();
    const handleChat = () => {
        //make sure its the most up to date when user is opening it
        if (!show) {

            console.log('creating chat')
            createNewChat(user?.email, 'admin@gmail.com')
                .then(chatId => {
                    console.log('Chat ID:', chatId);
                    setChats(chatId);
                    setShow(true);
                })
                .catch(error => console.error(error));

        }
        else {
            console.log('dont show')
            setShow(!show);
        }
    }
    return (
        <div className='position-absolute bottom-0 end-0 p-4'>

            {/**CHAT BOX */}
            <div className={`${!show && 'd-none'}`}>
                <ChatBox show={show} setShow={setShow} />

            </div>
            <Button className='rounded-circle float-end mt-4' variant='outline-dark' onClick={() => handleChat()}>
                <Image src='/defaultChatImage.png' className='rounded-circle' width={50} height={50} alt='profile' />
            </Button>
        </div>
    );
};

