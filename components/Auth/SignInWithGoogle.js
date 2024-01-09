"use client";
import { IconBrandGoogle } from "@tabler/icons-react";
import React from "react";
import { Button, Image } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseconfig";
import { redirect } from "next/navigation";
export default function SignInWithGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignIn = () => {
    // Handle sign-in with Google logic here
  };
  if (user) {
    redirect("/members");
  }
  return (
    <Button
      onClick={() => signInWithGoogle("", { prompt: "select_account" })}
      className="align-items-center"
    >
      <IconBrandGoogle className="pe-2" />
      Sign in with Google
    </Button>
  );
}
