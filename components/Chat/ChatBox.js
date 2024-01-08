import useDeviceScreen from '@/hooks/useDeviceScreen';
import React from 'react';
import { Button, Card, FloatingLabel, Form, Offcanvas } from 'react-bootstrap';
import { IconSend } from '@tabler/icons-react';
import Sender from './Sender';
import Receiver from './Reciever';
export default function ChatBox({ show, setShow }) {

    /**ON MOBILE WE NEED A FULL SCREEN OFF CANVAS */
    const deviceScreen = useDeviceScreen();
    const mobileDesign =
        deviceScreen?.width <= 520;

    if (!mobileDesign)
        return (
            <div className="container">
                <Card style={{ width: '25rem', minHeight: '30rem', maxHeight: '40rem' }} >
                    <Card.Title className='p-3'>Card Title</Card.Title>
                    <Card.Body className='overflow-auto '>
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
            </div>
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

