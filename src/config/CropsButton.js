import React from "react";
import '../App.css';
export function CropsButton({ onClick, imgSrc, altText, isSelected }) {
    const buttonStyle = {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        transform: isSelected ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.2s ease-in-out",
    };

    return (
        <button onClick={onClick} style={buttonStyle} className={"Ownglyph-font"}>
            <img src={imgSrc} alt={altText} style={{ width: '50px', marginRight: "50px" }} />
        </button>
    );
}
