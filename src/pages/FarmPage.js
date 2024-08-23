import React, {useState, useCallback} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fruits from '../datas/Fruits';
import {CropsBox, MiddleBox} from "../components/Styled";
import Keg from '../images/tools/Keg.png';
import Jar from '../images/tools/Preserves_Jar.png';
import Origin from '../images/tools/Giant_Cauliflower.png';
import {Col} from "react-bootstrap";
import {updatePrice} from "../config/UpdatePrice";
import {CropsButton} from "../config/CropsButton";
import '../App.css';


const FixNum = (number) => {
    return parseFloat(number.toFixed(2));
};

const FarmPage = () => {
    const [fruits, setFruits] = useState(Fruits.map(fruit => ({
        ...fruit, basePrice: fruit.origin
    })));

    const [selectedButton, setSelectedButton] = useState(null);
    const [isCultivatorChecked, setIsCultivatorChecked] = useState(false);  // 경작인 체크박스
    const [isArtisanChecked, setIsArtisanChecked] = useState(false);  // 장인 체크박스

    const PriceC = (price) => FixNum(price * 1.1);
    const PriceA = (price) => FixNum(price * 1.4);

    // Apply appropriate price adjustment based on selected checkboxes
    const calculatePrice = useCallback((basePrice, type) => {
        let adjustedPrice = basePrice;

        if (type === 'origin' && isCultivatorChecked) {
            adjustedPrice = PriceC(adjustedPrice);
        }

        if (type === 'wine' || type === 'jelly') {
            if (isArtisanChecked) {
                adjustedPrice = PriceA(adjustedPrice);
            }
        }

        return adjustedPrice;
    }, [isCultivatorChecked, isArtisanChecked]);

    const setOriginPrice = () => {
        setFruits(prevFruits => updatePrice(prevFruits, basePrice => calculatePrice(basePrice, 'origin')));
        setSelectedButton('origin');
    };

    const setWinePrice = () => {
        setFruits(prevFruits => updatePrice(prevFruits, basePrice => calculatePrice(basePrice * 3, 'wine')));
        setSelectedButton('wine');
    };

    const setJellyPrice = () => {
        setFruits(prevFruits => updatePrice(prevFruits, basePrice => calculatePrice(basePrice * 2 + 50, 'jelly')));
        setSelectedButton('jelly');
    };

    const sortByPriceDescending = () => {
        setFruits(prevFruits => [...prevFruits].sort((a, b) => b.origin - a.origin));
        setSelectedButton('sort');
    };

    const handleCultivatorChange = () => {
        setIsCultivatorChecked(prev => !prev);
        // Recalculate prices if the cultivator checkbox is changed
        setFruits(prevFruits => prevFruits.map(fruit => ({
            ...fruit, origin: calculatePrice(fruit.basePrice, selectedButton)
        })));
    };

    const handleArtisanChange = () => {
        setIsArtisanChecked(prev => !prev);
        setFruits(prevFruits => prevFruits.map(fruit => ({
            ...fruit, origin: calculatePrice(fruit.basePrice, selectedButton)
        })));
    };

    return (<>
            <Row style={{justifyContent: "center", marginBottom: "20px"}}>
                <Col>
                    <CropsButton
                        onClick={setOriginPrice}
                        imgSrc={Origin}
                        isSelected={selectedButton === 'origin'}

                    />
                    <CropsButton
                        onClick={setWinePrice}
                        imgSrc={Keg}
                        isSelected={selectedButton === 'wine'}
                    />
                    <CropsButton
                        onClick={setJellyPrice}
                        imgSrc={Jar}
                        isSelected={selectedButton === 'jelly'}
                    />
                    <button
                        className={'Ownglyph-font'}
                        onClick={sortByPriceDescending}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "10px",
                            marginLeft: "20px",
                            transform: selectedButton === 'sort' ? "scale(1.2)" : "scale(1)",
                            transition: "transform 0.2s ease-in-out"
                        }}>
                        가격 순서대로 정렬
                    </button>
                </Col>
            </Row>
            <Row style={{justifyContent: "center", marginBottom: "20px"}}>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <label style={{marginRight: "20px"}} className={'Ownglyph-font'}  >
                        <input

                            type="checkbox"
                            checked={isCultivatorChecked}
                            onChange={handleCultivatorChange}
                        />
                        경작인
                    </label>
                    <label className={'Ownglyph-font'} >
                        <input
                            type="checkbox"
                            checked={isArtisanChecked}
                            onChange={handleArtisanChange}
                        />
                        장인
                    </label>
                </Col>
            </Row>
            <MiddleBox>
                <Container>
                    <Row style={{marginTop: "20px", marginBottom: "20px", justifyContent: "center"}}>
                        {fruits.map((fruit, index) => (
                            <CropsBox key={index} style={{margin: "20px 0px", display: "flex", alignItems: "center"}}>
                                <img src={fruit.img} alt={fruit.name}
                                     style={{width: '70px', marginRight: '22px', display: 'flex'}}/>
                                <div>
                                    <div>{fruit.name}</div>
                                    <div style={{fontSize: "32px"}}>{fruit.origin}G</div>
                                </div>
                            </CropsBox>))}
                    </Row>
                </Container>
            </MiddleBox>
        </>);
};

export default FarmPage;
