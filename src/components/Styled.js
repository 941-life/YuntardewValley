import COLOR from "../config/Color";
import styled from "styled-components";
import logo from '../images/logo.png';

export const MainBox = styled.div`
    position: relative;
    margin-top: 10px;
    height: 370px;
    background-color: ${COLOR.green};
    margin-left: 90px;
    margin-right: 90px;
    border-radius: 20px;

    &::before {
        content: "";
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain; 
        position: absolute;
        top: 37px;
        bottom: 37px;
        left: 0;
        right: 0;
    }
`;
