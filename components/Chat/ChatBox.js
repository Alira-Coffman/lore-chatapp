import useDeviceScreen from '@/hooks/useDeviceScreen';
import React, { useEffect } from 'react';
import { Button, Card, FloatingLabel, Form, Offcanvas, Spinner } from 'react-bootstrap';
import { IconSend } from '@tabler/icons-react';
import Sender from './Sender';
import Receiver from './Reciever';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { auth, db } from '@/firebaseconfig';
import { useCollection, useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { TextArea } from './TextArea'; 
import { useRef } from 'react';
import { TextArea } from './TextArea';
export default function ChatBox({ chatId, show, setShow, styles = null, scrollableOptions = null }) {
    const [user] = useAuthState(auth);
    /**ON MOBILE WE NEED A FULL SCREEN OFF CANVAS */
    const deviceScreen = useDeviceScreen();
    const mobileDesign =
        deviceScreen?.width <= 520;
    if (!chatId) {
        return <Spinner animation="border" role="status"></Spinner>
    }
    const q = query(collection(db, `chats/${chatId}/messages`), orderBy("timestamp"));
    const [messages] = useCollectionData(q);
    const bottomOfChat = useRef();

    const scrollToBottom = () => {
        bottomOfChat.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);
    console.log(messages);
    if (!mobileDesign)
        return (

            <Card style={styles} className='border-0 overflow-auto'>
                <Card.Title className='p-3'>Card Title</Card.Title>
                <Card.Body className='d-flex flex-column overflow-auto' style={scrollableOptions}>
                    {messages?.map((message, idx) => {
                        console.log(message)
                        if (message?.sender === user?.email)
                            return <Receiver key={idx} message={message?.text} />
                        else
                            return <Sender key={idx} message={message?.text} />
                    })}
                    <div ref={bottomOfChat}>
                        {/**THIS IS AN INVISIBLE DIV USED TO SCROLL TO THE BOTTOM */}
                    </div>
                </Card.Body>
                <Card.Footer className='bg-white position-sticky
                '>
                    <TextArea chatId={chatId} />
                </Card.Footer>
            </Card>

        );
    else
        return (
            <Offcanvas show={show} onHide={() => setShow(!show)} responsive="lg" className='vw-100' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chatting with INSERT NAME</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {messages?.map((message, idx) => {
                        console.log(message)
                        if (message?.sender === user?.email)
                            return <Receiver key={idx} message={message?.text} />
                        else
                            return <Sender key={idx} message={message?.text} />
                    })}
                    <div ref={bottomOfChat}>
                        {/**THIS IS AN INVISIBLE DIV USED TO SCROLL TO THE BOTTOM */}
                    </div>
                </Offcanvas.Body>

                <TextArea chatId={chatId} />






            </Offcanvas>
        );
};

