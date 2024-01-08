import { IconLogout } from "@tabler/icons-react";
import { Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebaseconfig'
export default function LogoutButton() {
    return (
        <Button variant="danger" onClick={() => signOut(auth)}>
            <IconLogout className="pe-1" /> <span>Logout</span>
        </Button>
    )
}