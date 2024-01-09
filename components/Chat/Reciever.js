import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default function Receiver({ message }) {
    return (
        <Container className='my-3'>
            <Row>
                <Col xs={2}>
                    {/* <Image src="profile-image.png" roundedCircle width={45} /> */}
                </Col>
                <Col xs={10} className=''>
                    <div className="d-flex bg-cyan p-2 ms-3 rounded">
                        <span>{message}</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


