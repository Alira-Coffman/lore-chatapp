'use client'

import useDeviceScreen from "@/hooks/useDeviceScreen";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import ChatList from "./ChatList";
import AdminChat from "./AdminChat";
import { useState } from "react";
import { IconMessage2 } from "@tabler/icons-react";

export default function AdminView() {
    const deviceScreen = useDeviceScreen();
    const mobileDesign =
        deviceScreen?.width <= 765;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="d-flex align-items-center">
                <Button variant="outline" className="d-lg-none" onClick={handleShow}>
                    <IconMessage2 />
                </Button>
                <span className="fs-3">Admin Portal</span>
            </div>

            {!mobileDesign && <Row>
                <Col lg={2} md={2} className='border '>
                    <ChatList />
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
                        <ChatList />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            }

        </>
    )



}