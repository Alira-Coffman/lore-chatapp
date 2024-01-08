'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ChatBox from '../Chat/ChatBox';

export default function ChatOverlay() {
    const [show, setShow] = useState(false);
    return (
        <div className='position-absolute bottom-0 end-0 p-4'>

            {/**CHAT BOX */}
            <div className={`${!show && 'd-none'}`}>
                <ChatBox show={show} setShow={setShow} />

            </div>
            <Button className='rounded-circle float-end mt-4' variant='outline-dark' onClick={() => setShow(!show)}>
                <Image src='/defaultChatImage.png' className='rounded-circle' width={50} height={50} alt='profile' />
            </Button>
        </div>
    );
};

