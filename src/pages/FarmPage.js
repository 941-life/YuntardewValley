import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fruits from '../datas/Fruits';

function FarmPage() {
    return (
        <Container>
            <Row>
                {Fruits.map((fruit, index) => (
                    <Col xs={3} key={index}>
                        <img src={fruit.img} alt={fruit.name} style={{ width: '100%' }} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FarmPage;
