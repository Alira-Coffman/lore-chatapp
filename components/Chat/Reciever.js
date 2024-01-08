import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default function Receiver() {
    return (
        <Container className='my-3'>
            <Row>
                <Col xs={2}>
                    <Image src="profile-image.png" roundedCircle width={45} />
                </Col>
                <Col xs={10}>
                    <div className="d-flex bg-cyan p-2 ms-3 rounded">
                        <span>Text message goes here</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


