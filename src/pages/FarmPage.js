import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fruits from '../datas/Fruits';
import {CropsBox} from "../components/Styled";

function FarmPage() {
    return (
        <Container>
            <Row style={{ marginTop: "20px", marginBottom: "20px", justifyContent: "center" }}>
                {Fruits.map((fruit, index) => (
                    <CropsBox>
                        <img src={fruit.img} alt={fruit.name} style={{ width: '100%' }} />
                    </CropsBox>
                ))}
            </Row>
        </Container>
    );
}

export default FarmPage;
