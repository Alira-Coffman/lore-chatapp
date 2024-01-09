'use client'
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import Sender from "../Chat/Sender";
import { IconSend } from "@tabler/icons-react";
import Receiver from "../Chat/Reciever";

export default function AdminChat() {
    return (
        <>
            <Card className='border-0 ' style={{ maxHeight: '94vh', minHeight: '94vh' }} >
                <Card.Title className='p-3'>Card Title</Card.Title>
                <Card.Body className='overflow-auto '>

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
        </>
    )
}