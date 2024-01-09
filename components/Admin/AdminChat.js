"use client";
import { useParams } from "next/navigation";
import { auth, db } from "@/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "../Chat/ChatBox";
import InputSelection from "./InputSelection";
import { useState } from "react";

export default function AdminChat({ receiver }) {
  const [user] = useAuthState(auth);
  const params = useParams();
  return (
    <>
      <div>
        <ChatBox
          chatId={params?.id}
          styles={{ maxHeight: "90vh", minHeight: "90vh" }}
        />
      </div>
    </>
  );
}
