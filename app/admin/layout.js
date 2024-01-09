'use client'
import useDeviceScreen from "@/hooks/useDeviceScreen";
import { Button, Col, Container, Image, Offcanvas, Row } from "react-bootstrap";
import ChatList from "@/components/Admin/ChatList";
import AdminChat from "@/components/Admin/AdminChat";
import { useEffect, useState } from "react";
import { IconMessage2 } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebaseconfig'

import LogoutButton from "@/components/Auth/LogoutButton";
import { usePathname } from "next/navigation";
export default function AdminLayout({ children }) {
    const [user] = useAuthState(auth);
    const deviceScreen = useDeviceScreen();
    const mobileDesign =
        deviceScreen?.width <= 765;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //close the chatlist when a chat is clicked
    {
        const pathname = usePathname();
        useEffect(() => (show ? setShow(false) : void null), [pathname])
    }

    return (
        <Container fluid>
            <div className="d-flex align-items-center">
                <Button variant="outline" className="d-lg-none" onClick={handleShow}>
                    <IconMessage2 />
                </Button>
                <span className="fs-3">Admin Portal</span>

            </div>


            {!mobileDesign && <Row>
                <Col lg={2} md={2} className='border p-0'>
                    <div className="border-bottom d-flex justify-content-between align-items-center p-2">
                        <div className="d-flex justify-content-start align-items-center">
                            <Image src={user?.photoURL || '/profile-image.png'} roundedCircle width={50} />                            <p className='pt-3 ms-2'>{user?.displayName}</p>
                        </div>

                        <LogoutButton />
                    </div>
                    <div className="p-2">
                        <ChatList currentUser={user?.email} close={handleClose} />

                    </div>

                </Col>
                <Col className='border ' style={{ maxHeight: '94vh', minHeight: '94vh' }} >
                    {children}
                </Col>
            </Row>}
            {mobileDesign && <div>
                {children}
                <Offcanvas show={show} onHide={handleClose} responsive="lg" className='vw-100'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Conversations</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {user && <ChatList currentUser={user?.email} />}
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            }
        </Container>
    )
}
