import { IconLogout } from "@tabler/icons-react";
import { Button, Spinner } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebaseconfig'
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LogoutButton() {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    }
    if (!user) {
        redirect('auth/signin')

    }
    return (
        <Button variant="outline-danger" className='p-1 ms-2text-center' onClick={() => { signOut(auth); redirect('/') }}>
            <IconLogout className="" />
        </Button>
    )
}