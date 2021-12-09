import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

import {useTranslation} from "react-i18next";
import staff1 from "../../images/staff1.svg";

const Wrapper = styled.div`
  background: #f7f4f2;
  color: #000;
  font-family: "Noto Serif", serif;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 200px;
    height: 150px;
  }
  ${
    "" /* .back-to-browse {
    padding: 0;
    padding-top: 30px;
  } */
}
  .start {
    font-size: 40px;
    font-weight: 400;
  }

  h2 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    padding: 15px 0;
    padding-bottom: 10px;
  }
  
  p {
    font-size: 18px;
    line-height: 26px;

    font-weight: 400;
    padding: 15px 0;
  }
  .staff {
    padding-bottom: 50px;
  }
  .staff p {
    font-size: 16px;
  }
  
  @media only screen and (max-width: 767px) {
    img {
      width: 65%;
      height: 55%;
    }
  }
  
  @media only screen and (max-width: 575px) {
    h2 {
      font-size: 30px;
    }
  }
  
  @media only screen and (max-width: 450px) {
    img {
      width: 65%;
      height: 45%;
    }
  }
`;

const AboutUs = () => {
    const {t} = useTranslation();

    const aboutusArray = [
        {
            img: staff1,
            staff1: t("staff1"),
        },
        {
            img: staff1,
            staff1: t("staff2"),
        },
        {
            img: staff1,
            staff1: t("staff3"),
        },
    ];
    return (
        <Wrapper>
            <Container fluid>
                <Row className="px-2 px-sm-4">
                    <h2 className="py-3 start">{t("aboutus")}</h2>
                </Row>
                <Col xs={12} className="text-center">
                    <Container>
                        <Row className="vision-mission">
                            <h2>{t("our_mission")}</h2>
                            <p>{t("our_mission_text")}</p>
                        </Row>
                        <Row className="vision-mission">
                            <h2>{t("our_vission")}</h2>
                            <p>{t("our_vission_text")}</p>
                        </Row>
                    </Container>
                </Col>

                <Row className="text-center px-2 px-xl-4 staff ">
                    <h2 className="">{t("Staff")}</h2>

                    <Row className="py-2 m-0">
                        {aboutusArray.map((el, i) => (
                            <Col
                                md={4}
                                className="px-0 px-sm-4 py-1 py-md-3 py-sm-0 m-0"
                                key={i}
                            >
                                <img src={el.img} alt="" className=""/>
                                <p>{el.staff1}</p>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
        </Wrapper>
    );
};
export default AboutUs;
