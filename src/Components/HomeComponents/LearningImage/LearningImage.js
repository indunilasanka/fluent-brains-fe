import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import learningpath1 from "../../../images/Home/learningpath1.svg";
import learningpath2 from "../../../images/Home/learningpath2.svg";
import learningpath3 from "../../../images/Home/learningpath3.svg";
import learningpath4 from "../../../images/Home/learningpath4.svg";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div`
  text-align: center;
  background: #F7F4F2;
  padding: 0 220px;
  .a-title {
    font-size: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  .a-subtitle {
    font-size: 15px;
    width: 70%;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
  }
  .a-image {
    height: 200px !important;
    object-fit: cover;
  }
  @media only screen and (max-width: 1199px) {
    padding: 0 150px;
    .a-subtitle {
      font-size: 15px;
      width: 80%;
    }

    @media only screen and (max-width: 991px) {
      padding: 0 50px;
      .a-subtitle {
        font-size: 15px;
        width: 85%;
      }
    }
    @media only screen and (max-width: 576px) {
      padding: 0 20px;
      .a-title {
        font-size: 23px;
      }
      .a-subtitle {
        font-size: 15px;
        width: 100%;
      }
    }
  }
`;
const LearningImage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container fluid className="py-5">
        <h3 className="a-title">{t("learning_image_title")}</h3>
        <div className="a-subtitle py-3">{t("learning_image_subtitle")}</div>
        <Row>
          <Col sm={5} className="p-2">
            <img src={learningpath1} alt="" className="w-100 a-image" />
          </Col>
          <Col sm={7} className="p-2">
            <img src={learningpath2} alt="" className="w-100 a-image" />
          </Col>
          <Col sm={7} className="p-2">
            <img src={learningpath3} alt="" className="w-100 a-image" />
          </Col>
          <Col sm={5} className="p-2">
            <img src={learningpath4} alt="" className="w-100 a-image" />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default LearningImage;
