"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import { Image, Spinner } from "react-bootstrap";
import { redirect } from "next/navigation";
import LogoutButton from "./Auth/LogoutButton";

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!user) {
    redirect("auth/signin");
  }
  return (
    <div>
      <p>Profile</p>
      <div className="d-flex flex-column">
        <Image src={user?.photoURL} roundedCircle width={50} />
        <p className="p">{user?.displayName || user?.email}</p>
      </div>

      <LogoutButton />
    </div>
  );
}
