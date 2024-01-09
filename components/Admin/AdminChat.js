'use client'
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import Sender from "../Chat/Sender";
import { IconSend } from "@tabler/icons-react";
import Receiver from "../Chat/Reciever";
import { useParams } from "next/navigation";
import { auth, db } from "@/firebaseconfig";
import { collection, doc, query, where } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { getOtherEmail } from "@/helpers/helpers";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AdminChat({ receiver }) {
    const [user] = useAuthState(auth);
    const params = useParams()
    console.log(params)

    ///query for a single message
    const docRef = doc(db, 'chats', params?.id);
    const [snapshot, loading, error] = useDocument(docRef);



    if (error) {
        console.error("Error fetching chats: ", error);
    }
    if (loading || !user) {
        return <p>Loading</p>
    }

    const singleChat = snapshot?.data();
    console.log('singleChat', singleChat);

    return (
        <>
            <Card className='border-0 ' style={{ maxHeight: '90vh', minHeight: '90vh' }} >
                <Card.Title className='p-3'>Chatting with {getOtherEmail(singleChat?.users, user?.email)}</Card.Title>
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