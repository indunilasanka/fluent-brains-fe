import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Sliders from "./Slider";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useMainContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  position: relative;
  .my-slider-section-container {
    background: #F7F4F2;
    padding: 0 50px;
  }
  .s-title {
    font-size: 30px;
    line-height: 35px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  .s-subtitle {
    font-size: 15px;
    line-height: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  @media only screen and (max-width: 575px) {
    .s-title {
      font-size: 23px;
    }
    .s-subtitle {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 550px) {
    .my-slider-section-container {
      padding: 0 8px;
    }
  }
`;
const SliderSection = () => {
  const { modals } = useMainContext();
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <Container fluid className="py-5 my-slider-section-container">
          <h3 className="s-title text-center">{t("slider_title")}</h3>
          <p className="s-subtitle text-center py-3">{t("slider_subtitle")}</p>
          <Row>
            <Sliders />
          </Row>
          <Link to="learning">
            <div className="text-center btn-container">
              <Button section>{t("explore_activities")}</Button>
            </div>
          </Link>
        </Container>
      </Wrapper>
      {modals && <Modal />}
    </>
  );
};

export default SliderSection;
