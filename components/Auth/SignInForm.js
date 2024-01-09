"use client";
import { IconBrandGoogle } from "@tabler/icons-react";
import React from "react";
import { Button, Image } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseconfig";
import { redirect } from "next/navigation";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInWithEmail from "./SignInWithEmail";
export default function SignInForm() {
  return (
    <div className="bg-info position-absolute rounded top-50 start-50 translate-middle w-25">
      {/* Other form fields */}
      <div className="d-flex flex-column p-4 text-center">
        <h4 className="text-white">Welcome to the chat app</h4>
        <Image
          src="/profile-image.png"
          roundedCircle
          className="mx-auto my-3"
          width={100}
          fluid
        />
        <SignInWithEmail />

        <SignInWithGoogle />
      </div>
    </div>
  );
}
