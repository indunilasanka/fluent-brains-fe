import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../Button/Button";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import icon1 from "../../../images/Home/icon1.svg";
import icon2 from "../../../images/Home/icon2.svg";
import icon3 from "../../../images/Home/icon3.svg";
import icon4 from "../../../images/Home/icon4.svg";
import icon5 from "../../../images/Home/icon5.svg";
import icon6 from "../../../images/Home/icon6.svg";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  padding: 0 50px;
  text-align: center;
  .icon-container {
    width: 40px;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
  }
  .l-main-title {
    font-size: 30px;
    line-height: 40px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  .l-title {
    font-size: 20px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    line-height: 25px;
  }
  .l-subtitle {
    font-size: 14px;
    color: #828282;
    margin: 0;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  @media only screen and (max-width: 1199px) {
    .l-title {
      font-size: 16px;
    }
    .l-subtitle {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 0 15px;
    .l-title {
      font-size: 16px;
    }
    .l-subtitle {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 0 13px;
    .l-main-title {
      font-size: 23px;
    }
    .l-title {
      font-size: 17px;
    }
    .l-subtitle {
      font-size: 12px;
    }
    @media only screen and (max-width: 330px) {
      padding: 0 10px;
    }
  }
`;
const LearningPath = () => {
    const {t} = useTranslation();
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
    const learnArray = i18next.t("learning_array", {returnObjects: true});
    const learningArray = Array.from(learnArray).map((el, i) => {
        return {...el, icon: icons[i]};
    });

    return (
        <Wrapper>
            <Container fluid>
                <h3 className="l-main-title py-4">{t("about_us_title")}</h3>
                <Row className="py-2">
                    {learningArray.map((el, i) => (
                        <Col
                            sm={6}
                            lg={4}
                            key={i}
                            className="py-3 d-flex justify-content-center"
                        >
                            <div
                                className="m-0"
                                style={{
                                    background: el.color,
                                    height: "48px",
                                    width: "48px",
                                    borderRadius: "50%",
                                    position: "relative",
                                }}
                            >
                                <img src={el.icon} alt="#" className="icon"/>
                            </div>

                            <div className="px-3 px-sm-2 px-md-3 m-0">
                                <h4 className="l-title">{el.title}</h4>
                                <p className="l-subtitle">{el.subtitle}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="py-4">
                    <Link to="learning">
                        <Button section>{t("explore_activities")}</Button>
                    </Link>
                </div>
            </Container>
        </Wrapper>
    );
};

export default LearningPath;
