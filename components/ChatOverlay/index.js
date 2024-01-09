"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
const ChatBox = dynamic(() => import("../Chat/ChatBox"), {
  ssr: false,
});
import { createNewChat } from "@/helpers/helpers";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseconfig";

import dynamic from "next/dynamic";
export default function ChatOverlay() {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [chats, setChats] = useState();
  const [singleChat, setSingleChat] = useState();
  const handleChat = () => {
    //make sure its the most up to date when user is opening it
    if (!show) {
      console.log("creating chat");
      createNewChat(user?.email, "admin@gmail.com")
        .then((chatId) => {
          console.log("Chat ID:", chatId);
          setChats(chatId);
          setShow(true);
        })
        .catch((error) => console.error(error));
    } else {
      console.log("dont show");
      setShow(!show);
    }
  };

  // useEffect(() => {
  //     if (chats) {
  //         const docRef = doc(db, 'chats', chats);
  //         const [snapshot, loading, error] = useDocument(docRef);
  //         setSingleChat(snapshot?.data());
  //     }
  // }, [chats])
  return (
    <div className="position-absolute bottom-0 end-0 p-4">
      {/**CHAT BOX */}
      {show && (
        <div className={`${!show && "d-none"}`}>
          <div
            className="border rounded "
            style={{ width: "25rem", minHeight: "29rem", maxHeight: "40rem" }}
          >
            <ChatBox
              chatId={chats}
              show={show}
              setShow={setShow}
              scrollableOptions={{ maxHeight: "calc(80vh - 600px)" }}
            />
          </div>
        </div>
      )}
      <Button
        className="rounded-circle float-end mt-4"
        variant="outline-dark"
        onClick={() => handleChat()}
      >
        <Image
          src="/defaultChatImage.png"
          className="rounded-circle"
          width={50}
          height={50}
          alt="profile"
        />
      </Button>
    </div>
  );
}
