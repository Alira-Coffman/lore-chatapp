import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default function Sender() {
    return (
        <Container className='my-3'>
            <Row>
                <Col xs={10}>
                    <div className="d-flex bg-green p-2 rounded">
                        <span>Text message goes here</span>
                    </div>
                </Col>
                <Col xs={2}>
                    <Image src="profile-image.png" roundedCircle width={45} />
                </Col>
            </Row>
        </Container>
    );
};

