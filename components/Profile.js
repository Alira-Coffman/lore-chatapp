'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseconfig';
import { Spinner } from 'react-bootstrap';
import { redirect } from 'next/navigation';
import LogoutButton from './Auth/LogoutButton';

export default function Profile() {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    }

    if (!user) {
        redirect('auth/signin')
        return (
            <div>
                <p>Please login to a user account or an admin account. For access to admin, please contact.</p>

            </div>

        )
    }
    return (<div>

        <p>Profile</p>
        <LogoutButton />
    </div>)
}