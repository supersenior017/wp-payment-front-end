import React, { useEffect } from "react";
import CarouselSlider from "react-carousel-slider";

const data = [
    {
        imgSrc: "/images/01.png"
    },
    {
        imgSrc: "/images/02.png"
    },
];

const Slider = () => {

    const sliderBoxStyle = {
        width: "100%",
        height: "100%",
        background: "transparent",
        marginBottom: "20px",
        borderRadius: "20px",
    };

    const itemsStyle = {
        width: "100%",
        padding: "0px",
        background: "#FFCA28",
        borderRadius: "4px",
        margin: "0px 0px", 
        padding: "0px"
    };

    const textBoxStyle = {
        // textAlign: "left"
        // ,width:"50%"
        // , background: "transparent"
        // , fontSize: "36px"
        // , fontWeight: 300
    };

    const buttonSetting = {
        placeOn: "middle-inside",
        style: {
            left: {
                height: "60px",
                width: "30px",
                color: "black",
                fontSize: "30px",
                background: "white",
                opacity: "0"
            },
            right: {
                height: "60px",
                width: "30px",
                color: "balck",
                fontSize: "30px",
                background: "white",
                opacity: "0"
            }
        }
    };

    const manner = {
        autoSliding: {interval: "4s"}
        , duration: "0.3s"
    };

    let accEleSetting = { dots: false };

    return (
        <div className="">
            <div className="slider-wrapper">
                <CarouselSlider
                    slideItems={data}
                    manner={manner}
                    accEle={accEleSetting}
                    buttonSetting={buttonSetting}
                    sliderBoxStyle={sliderBoxStyle}
                    itemsStyle={itemsStyle}
                />
            </div>
        </div>
    );
};

export default Slider;
