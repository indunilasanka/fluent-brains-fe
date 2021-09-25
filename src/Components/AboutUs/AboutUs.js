import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import staff1 from "../../images/staff1.svg";
const Wrapper = styled.div`
  background: #e5e5e5;
  color: #000;
  font-family: "Noto Serif", serif;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  .back-to-browse {
    padding: 0;
    padding-top: 30px;
  }
  .start {
    font-size: 40px;
    font-weight: 400;
  }

  h2 {
    font-size: 44px;
    line-height: 26px;

    font-weight: 400;
    padding: 15px 0;
  }
  p {
    font-size: 20px;
    line-height: 26px;

    font-weight: 400;
    padding: 15px 0;
  }
  .staff {
    padding-bottom: 100px;
  }
  .staff p {
    font-size: 16px;
  }
  @media only screen and (max-width: 575px) {
    h2 {
      font-size: 30px;
    }
  }
`;

const AboutUs = () => {
  const { t } = useTranslation();

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
        <Row className="px-4 py-3">
          <div className="back-to-browse">
            <BsArrowLeftShort size="25" className="m-0" />
            <Link to="/">
              <span className="m-0  back_to_browse  px-2">
                {t("back_to_browse")}
              </span>
            </Link>
          </div>
          <h2 className="py-3 start">{t("aboutus")}</h2>
        </Row>
        <Col xs={12} className="text-center">
          <Container>
            <Row className="vision-mission py-4">
              <h2>{t("our_mission")}</h2>
              <p>{t("our_mission_text")}</p>
            </Row>
            <Row className="vision-mission py-4">
              <h2>{t("our_vission")}</h2>
              <p>{t("our_vission_text")}</p>
            </Row>
          </Container>
        </Col>

        <Row className="text-center px-2 px-sm-5 staff ">
          <h2 className="py-4">{t("Staff")}</h2>
          <Row className="py-2 m-0">
            {aboutusArray.map((el, i) => (
              <Col md={4} className="px-0 px-sm-4 py-3 py-sm-0 m-0" key={i}>
                <img src={el.img} alt="" className=" w-100 w-md-75" />
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
