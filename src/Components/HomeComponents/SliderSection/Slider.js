import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SliderCard from "./SliderCard";
import card1 from "../../../images/Home/ptn1.png";
import card2 from "../../../images/Home/add1.png";
import card3 from "../../../images/Home/ptn2.png";
import card4 from "../../../images/Home/add2.png";

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

    let urls = ["https://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/adds1/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns2/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/adds2/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/adds1/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns2/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/adds2/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/adds1/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns2/q1/index.html",
        "https://d2rfvil7mufd2n.cloudfront.net/maths/en/adds2/q1/index.html",
    ];

    const encard_array = [
        {
            "title": "Build patterns based on shapes"
        },
        {
            "title": "Adding numbers using pictures"
        },
        {
            "title": "Build patterns based on numbers"
        },
        {
            "title": "Adding numbers less than 10"
        },
        {
            "title": "Build patterns based on shapes"
        },
        {
            "title": "Adding numbers using pictures"
        },
        {
            "title": "Build patterns based on numbers"
        },
        {
            "title": "Adding numbers less than 10"
        },
        {
            "title": "Build patterns based on shapes"
        },
        {
            "title": "Adding numbers using pictures"
        },
        {
            "title": "Build patterns based on numbers"
        },
        {
            "title": "Adding numbers less than 10"
        }
    ];

    const sicard_array = [
        {
            "title": "හැඩතල ඇසුරෙන් රටා ගොඩනැගීම"
        },
        {
            "title": "පින්තූර භාවිතයෙන් සංඛ්\u200Dයා එකතු කිරීම"
        },
        {
            "title": "සංඛ්\u200Dයා ඇසුරෙන් රටා  ගොඩනැගීම"
        },
        {
            "title": "10 ට අඩු සංඛ්\u200Dයා එකතු කිරීම"
        },
        {
            "title": "හැඩතල ඇසුරෙන් රටා ගොඩනැගීම"
        },
        {
            "title": "පින්තූර භාවිතයෙන් සංඛ්\u200Dයා එකතු කිරීම"
        },
        {
            "title": "සංඛ්\u200Dයා ඇසුරෙන් රටා  ගොඩනැගීම"
        },
        {
            "title": "10 ට අඩු සංඛ්\u200Dයා එකතු කිරීම"
        },
        {
            "title": "හැඩතල ඇසුරෙන් රටා ගොඩනැගීම"
        },
        {
            "title": "පින්තූර භාවිතයෙන් සංඛ්\u200Dයා එකතු කිරීම"
        },
        {
            "title": "සංඛ්\u200Dයා ඇසුරෙන් රටා  ගොඩනැගීම"
        },
        {
            "title": "10 ට අඩු සංඛ්\u200Dයා එකතු කිරීම"
        }
    ];

    let cardsArray = encard_array;

    let newUrls = [];
    if (language != "English") {
        urls.forEach((url) => {
            url = url.replace("/en/", "/si/");
            newUrls.push(url);
        });
        cardsArray = sicard_array;
    } else {
        newUrls = urls;
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="main-slider">
                    <div className="sub-slider ">
                        <SliderCard title={cardsArray[0].title} url={newUrls[0]} img={card1}/>
                        <SliderCard title={cardsArray[1].title} url={newUrls[1]} img={card2}/>
                    </div>
                    <div className="sub-slider ">
                        <SliderCard title={cardsArray[2].title} url={newUrls[2]} img={card3}/>
                        <SliderCard title={cardsArray[3].title} url={newUrls[3]}  img={card4}/>
                    </div>
                </div>

                <div className="main-slider">
                    <div className="sub-slider">
                        <SliderCard title={cardsArray[4].title} url={newUrls[4]} img={card1}/>
                        <SliderCard title={cardsArray[5].title} url={newUrls[5]} img={card2}/>
                    </div>
                    <div className="sub-slider">
                        <SliderCard title={cardsArray[6].title} url={newUrls[6]} img={card3}/>
                        <SliderCard title={cardsArray[7].title} url={newUrls[7]} img={card4}/>
                    </div>
                </div>
                <div className="main-slider">
                    <div className="sub-slider">
                        <SliderCard title={cardsArray[8].title} url={newUrls[8]} img={card1}/>
                        <SliderCard title={cardsArray[9].title} url={newUrls[9]}  img={card2}/>
                    </div>
                    <div className="sub-slider">
                        <SliderCard title={cardsArray[10].title} url={newUrls[10]} img={card3}/>
                        <SliderCard title={cardsArray[11].title} url={newUrls[11]} img={card4}/>
                    </div>
                </div>
            </Slider>
        </div>
    );
};
export default Sliders;
