import { IconLogout } from "@tabler/icons-react";
import { Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebaseconfig'
export default function LogoutButton() {
    return (
        <Button variant="outline-danger" className='p-1 ms-2text-center' onClick={() => signOut(auth)}>
            <IconLogout className="" />
        </Button>
    )
}