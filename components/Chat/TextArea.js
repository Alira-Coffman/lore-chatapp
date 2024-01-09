'use client'
import { auth, db } from "@/firebaseconfig"
import { IconSend } from "@tabler/icons-react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth"
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
export function TextArea({ chatId }) {
    const [user] = useAuthState(auth);
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/${chatId}/messages`), {
            text: input,
            sender: user?.email,
            timestamp: serverTimestamp()
        });
        setInput('');
    }
    return (
        <div className="mt-auto">
            <FloatingLabel
                controlId="floatingTextarea"
                label="Message"
                className="m-2"
            >
                <Form.Control as="textarea" className='userinput'
                    placeholder="Type your message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />

            </FloatingLabel>
            <div className='d-flex justify-content-end m-2'>
                <Button
                    onClick={sendMessage}
                    variant="outline-secondary"
                    className='justify-content-end d-flex'
                    id="button-addon2">
                    <IconSend /><span>Send</span>
                </Button>
            </div>
        </div>

    )
}
