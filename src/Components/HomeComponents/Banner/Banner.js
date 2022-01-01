import React from "react";
import styled from "styled-components";
import banner from "../../../images/Home/banner.png";
import Button from "../Button/Button";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  .banner-container {
    position: relative;
    height: 580px;
  }
  
  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    height: 580px;
    object-position: center center;
  }

  .banner-text {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);

    color: #fff;
  }
  .banner-heading {
    font-size: 48px;
    line-height: 65px;
    font-weight: 600;
    font-family: "Noto Serif", serif;
  }
  .banner-summary {
    font-size: 18px;
    line-height: 25px;
    font-family: "Noto Serif", serif;
    font-weight: 400;
    padding-top: 0.25rem !important;
    padding-bottom: 1rem !important;
  }
  @media only screen and (max-width: 991px) {
    .banner-heading {
      font-size: 42px;
      line-height: 60px;
    }
    .banner-summary {
      font-size: 16px;
      line-height: 25px;
    }
  }
  @media only screen and (max-width: 520px) {
    .banner-heading {
      font-size: 30px;
      line-height: 45px;
    }
    .banner-summary {
      font-size: 16px;
      line-height: 25px;
    }
    .banner-text {
      left: 40px;
    }
  }
  @media only screen and (max-width: 450px) {
    .banner-heading {
      font-size: 27px;
      line-height: 45px;
    }
    .banner-summary {
      font-size: 14px;
      line-height: 25px;
    }
    .banner-text {
      left: 20px;
    }
  }
`;
const Banner = () => {
    const {t} = useTranslation();
    return (
        <Wrapper>
            <div className="banner-container">
                <img src={banner} alt="banner" className="banner"/>
                <div className="banner-text">
                    <h2 className="banner-heading">
                        {t("banner_heading1")} <br/>
                        {t("banner_heading2")}
                    </h2>

                    <p className="banner-summary">
                        {t("banner_text1")}
                        <br/> {t("banner_text2")}
                    </p>

                    <Link to="signup">
                        <Button>{t("get_started")}</Button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default Banner;
