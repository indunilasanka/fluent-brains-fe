import React from "react";
import styled from "styled-components";
import logo from "../../../images/Home/footer-logo.svg";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillFacebook} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {Link} from "react-router-dom";

import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  background: var(--section-button);
  color: #fff;
  .social-container {
    display: flex;
    align-items: center;
  }
  .social-container2 {
    display: flex;
    align-items: center;
    display: none;
  }
  .f-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 35px;
    font-family: "Manrope", sans-serif;
  }
  .f-subtitle {
    font-size: 14px;
    font-family: "Manrope", serif;
    line-height: 25px;
    cursor: pointer;
    font-weight: 400;
    font-family: "Manrope", sans-serif;
  }
  .footer-text {
    text-align: left;
  }
  
  .social-icon {
    cursor: pointer;
  }
  
  .rights{
    font-size: 10px;
    right: 0;
    float: right;
    color: white;
    display: flex;
    justify-content: flex-end;
    font-family: "Manrope", sans-serif;
  }

  @media only screen and (max-width: 1199px) {
    .social-container2 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social-container {
      display: none;
    }
    
    .footer-logo {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .footer-text {
      text-align: center;
    }
  }
  
  
  @media only screen and (max-width: 500px) {
   .rights{
        justify-content: center;
    }
  }
`;
const Footer = () => {
    const {t} = useTranslation();
    const newArray = t("footer_array", {returnObjects: true});

    const footerArray = Array.from(newArray);

    return (
        <Wrapper>
            <Container fluid>
                <Row className="py-0 py-xl-5 m-auto">
                    <Col xl={3} lg={12}>
                        <div className=" mx-2 footer-logo ">
                            <img src={logo} alt="/"/>
                        </div>
                        <div className="social-container py-4 ">
                            <a href="https://www.facebook.com/fluentbrains">
                                <AiFillFacebook
                                    size="25"
                                    color="#fff"
                                    className="mx-2 social-icon"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/fluent-brains">
                                <GrLinkedinOption
                                    size="25"
                                    color="#fff"
                                    className="mx-2 social-icon"
                                />
                            </a>
                        </div>
                    </Col>
                    {footerArray.map((el, i) => (
                        <Col
                            md={6}
                            lg={3}
                            xl={2}
                            key={i}
                            className="footer-text py-3  py-lg-0"
                        >
                            <Link to={el.title_to || ""}>
                                <p className="f-title">
                                    {/* onClick={window.scrollTo({ top: 0 })} */}
                                    {el.title}
                                </p>
                            </Link>
                            <Link to={el.element1_to || ""}>
                                <p className="f-subtitle">{el.element1}</p>
                            </Link>
                            <Link to={el.element2_to || ""}>
                                <p className="f-subtitle">{el.element2}</p>
                            </Link>
                            <Link to={el.element3_to || ""}>
                                <p className="f-subtitle">{el.element3}</p>
                            </Link>
                            <Link to={el.element4_to || ""}>
                                <p className="f-subtitle">{el.element4}</p>
                            </Link>
                        </Col>
                    ))}
                    <div className="social-container2 py-2">
                        <a href="https://www.facebook.com/fluentbrains">
                            <AiFillFacebook
                                size="25"
                                color="#fff"
                                className="mx-2 social-icon"
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/fluent-brains">
                            <GrLinkedinOption
                                size="25"
                                color="#fff"
                                className="mx-2 social-icon"
                            />
                        </a>
                    </div>
                    <p className="rights">© 2022 Fluent Brains Private Limited. All right reserved</p>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Footer;
