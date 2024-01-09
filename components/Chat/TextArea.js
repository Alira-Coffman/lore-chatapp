"use client";
import { auth, db } from "@/firebaseconfig";
import { IconSend } from "@tabler/icons-react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import InputSelection from "../Admin/InputSelection";
export function TextArea({ chatId, prompt, setPrompt, userMessage }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [inputSetBySelection, setInputSetBySelection] = useState(false);

  const handleSendToModel = () => {
    // Logic to send the selected option
    console.log("Sending option:", input);
  };
  useEffect(() => {
    if (input && inputSetBySelection) {
      sendMessage();
      setInputSetBySelection(false); // Reset the flag after sending the message
      setPrompt(false);
      handleSendToModel();
    }
  }, [input, inputSetBySelection]);
  //used to allow for enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };
  const sendMessage = async () => {
    //need to prevent user from spamming empty messages
    // Remove leading and trailing whitespace
    const trimmedInput = input.trim();
    setError("");
    // Check if input is not empty and does not exceed maximum length
    if (trimmedInput && trimmedInput.length <= 500) {
      // Escape special characters
      const escapedInput = trimmedInput
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      await addDoc(collection(db, `chats/${chatId}/messages`), {
        text: input,
        sender: user?.email,
        timestamp: serverTimestamp(),
      });
      setInput("");
    } else {
      if (trimmedInput > 500)
        setError("Message must be between 1 and 500 characters long");
      else setError("Please enter a valid input");
    }
  };
  return (
    <div>
      {prompt && (
        <InputSelection
          setInputChat={setInput}
          setInputSetBySelection={setInputSetBySelection}
        />
      )}
      <form onSubmit={sendMessage}>
        <div className="mt-auto">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Message"
            className="m-2"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </FloatingLabel>
          <div className="d-flex justify-content-end m-2">
            <Button
              variant="primary"
              type="submit"
              className="justify-content-end d-flex"
              id="button-addon2"
            >
              <IconSend />
              <span>Send</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
