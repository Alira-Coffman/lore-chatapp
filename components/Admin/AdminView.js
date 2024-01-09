'use client'

import useDeviceScreen from "@/hooks/useDeviceScreen";
import { Button, Col, Image, Offcanvas, Row } from "react-bootstrap";
import ChatList from "./ChatList";
import AdminChat from "./AdminChat";
import { useState } from "react";
import { IconMessage2 } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebaseconfig'
import LogoutButton from "../Auth/LogoutButton";
export default function AdminView() {
    const [user] = useAuthState(auth);
    const deviceScreen = useDeviceScreen();
    const mobileDesign =
        deviceScreen?.width <= 765;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (user === undefined || user?.email === undefined) { return <p>Loading</p> }
    return (
        <>
            <div className="d-flex align-items-center">
                <Button variant="outline" className="d-lg-none" onClick={handleShow}>
                    <IconMessage2 />
                </Button>

            </div>

            {!mobileDesign && <Row>
                <Col lg={3} md={3} className='border p-0'>
                    <div className="border-bottom d-flex justify-content-between align-items-center p-2">
                        <div className="d-flex justify-content-start align-items-center">
                            <Image src={user?.photoURL} roundedCircle width={50} />
                            <p className='pt-3 ms-2'>{user?.displayName}</p>
                        </div>

                        <LogoutButton />
                    </div>
                    <div className="p-2">
                        {user && <ChatList currentUser={user?.email} />}

                    </div>

                </Col>
                <Col className='border ' >
                    <AdminChat />
                </Col>
            </Row>}
            {mobileDesign && <div>
                <AdminChat />
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

        </>
    )



}