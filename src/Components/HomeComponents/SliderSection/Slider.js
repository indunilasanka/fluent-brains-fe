import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SliderCard from "./SliderCard";
import card1 from "../../../images/Home/card1.svg";
import card2 from "../../../images/Home/card2.svg";
import card3 from "../../../images/Home/card3.svg";
import card4 from "../../../images/Home/card4.svg";

import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {useMainContext} from "../../../Context/Context";

const roman = ['I', 'II', 'III'];

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        appendDots: (dots) => (
            <div style={{}}>
                <div className="slider-counter-container">
                    <div className="slider-counter">
                        <p>{t("grade")}</p>
                    </div>
                    <ul className="counter-number"> {dots} </ul>
                </div>
            </div>
        ),

        customPaging: (i) => (
            <div className="my-slider">
                <p> {roman[i]}</p>
            </div>
        ),
    };

    const {t} = useTranslation();
    const {language} = useMainContext();
    const cardsArray = i18next.t("card_array", {returnObjects: true});

    let urls = ["http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html"];
    let newUrls = [];
    if (language != "English") {
        urls.forEach((url) => {
            url = url.replace("/en/", "/si/");
            newUrls.push(url);
        });
    } else {
        newUrls = urls;
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="main-slider">
                    <div className="sub-slider ">
                        <SliderCard title={cardsArray[0].title} url={newUrls[0]} img={card1}/>
                        <SliderCard {...cardsArray[1]} img={card2}/>
                    </div>
                    <div className="sub-slider ">
                        <SliderCard {...cardsArray[2]} img={card3}/>
                        <SliderCard {...cardsArray[3]} img={card4}/>
                    </div>
                </div>

                <div className="main-slider">
                    <div className="sub-slider">
                        <SliderCard {...cardsArray[4]} img={card1}/>
                        <SliderCard {...cardsArray[5]} img={card2}/>
                    </div>
                    <div className="sub-slider">
                        <SliderCard {...cardsArray[6]} img={card3}/>
                        <SliderCard {...cardsArray[7]} img={card4}/>
                    </div>
                </div>
                <div className="main-slider">
                    <div className="sub-slider">
                        <SliderCard {...cardsArray[8]} img={card1}/>
                        <SliderCard {...cardsArray[9]} img={card2}/>
                    </div>
                    <div className="sub-slider">
                        <SliderCard {...cardsArray[10]} img={card3}/>
                        <SliderCard {...cardsArray[11]} img={card4}/>
                    </div>
                </div>
            </Slider>
        </div>
    );
};
export default Sliders;
