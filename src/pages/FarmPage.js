import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fruits from '../datas/Fruits';
import {CropsBox, MiddleBox} from "../components/Styled";
import Keg from '../images/tools/Keg.png';
import Jar from '../images/tools/Preserves_Jar.png';

function FarmPage() {
    return (
        <>

            <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
                <button style={{background: "none", border: "none", cursor: "pointer", padding: "10px"}}>
                    <img src={Keg} alt="Keg" style={{width: '50px', marginRight: "50px"}} />
                    <img src={Jar} alt="Jar" style={{width: '50px'}}/>
                </button>
            </Row>
            <MiddleBox>
            <Container>
                    <Row style={{ marginTop: "20px", marginBottom: "20px", justifyContent: "center" }}>
                        {Fruits.map((fruit, index) => (
                            <CropsBox key={index} style={{ margin: "20px 0px", display: "flex", alignItems: "center" }}>
                                <img src={fruit.img} alt={fruit.name} style={{ width: '70px', marginRight: '22px', display: 'flex' }} />
                                <div>
                                    <div>{fruit.name}</div>
                                    <div style={{fontSize: "32px"}}>{fruit.origin}G</div>
                                </div>
                            </CropsBox>
                        ))}
                    </Row>
                </Container>
            </MiddleBox>
        </>
    );
}

export default FarmPage;
