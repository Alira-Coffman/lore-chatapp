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
import ChatBox from "../Chat/ChatBox";

export default function AdminChat({ receiver }) {
    const [user] = useAuthState(auth);
    const params = useParams()
    console.log(params)



    return (
        <>
            <div>
                <ChatBox chatId={params?.id} styles={{ maxHeight: '90vh', minHeight: '90vh' }} />
            </div>
        </>
    )
}