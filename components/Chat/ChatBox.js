import useDeviceScreen from '@/hooks/useDeviceScreen';
import React from 'react';
import { Button, Card, FloatingLabel, Form, Offcanvas, Spinner } from 'react-bootstrap';
import { IconSend } from '@tabler/icons-react';
import Sender from './Sender';
import Receiver from './Reciever';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { auth, db } from '@/firebaseconfig';
import { useCollection, useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
export default function ChatBox({ chatId, show, setShow, styles }) {
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
    console.log(messages);
    if (!mobileDesign)
        return (

            <Card style={styles} className='border-0'>
                <Card.Title className='p-3'>Card Title</Card.Title>
                <Card.Body className='overflow-auto '>
                    {messages?.map(message => {
                        console.log(message)
                        if (message?.sender === user?.email)
                            return <Sender message={message?.text} />
                        else
                            return <Receiver message={message?.text} />
                    })}
                </Card.Body>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Message"
                    className="m-2"
                >
                    <Form.Control as="textarea" className='userinput' placeholder="Type your message" />

                </FloatingLabel>
                <div className='d-flex justify-content-end m-2'>
                    <Button variant="outline-secondary" className='justify-content-end d-flex' id="button-addon2">
                        <IconSend /><span>Send</span>
                    </Button>
                </div>
            </Card>

        );
    else
        return (
            <Offcanvas show={show} onHide={() => setShow(!show)} responsive="lg" className='vw-100' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chatting with INSERT NAME</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Sender />
                    <Receiver />
                    <Sender />
                    <Receiver />
                    <Sender />
                    <Receiver />
                    <Sender />
                    <Sender />
                    <Sender />
                    <Receiver />
                    <Sender />
                    <Receiver />
                    <Sender />
                    <Receiver />
                    <Sender />
                    <Sender />
                </Offcanvas.Body>

                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Message"
                    className="p-2"
                >
                    <Form.Control as="textarea" placeholder="Type your message" />

                </FloatingLabel>
                <div className='d-flex justify-content-end m-2'>
                    <Button variant="outline-secondary" className='justify-content-end d-flex' id="button-addon2">
                        <IconSend /> <span>Send</span>
                    </Button>
                </div>




            </Offcanvas>
        );
};

