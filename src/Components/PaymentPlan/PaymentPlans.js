import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

import {useTranslation} from "react-i18next";
import {AiFillCaretRight, AiFillCheckCircle} from "react-icons/all";

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
    font-size: 30px;
    line-height: 40px;
    font-weight: 400;
    padding: 15px 0;
    padding-bottom: 10px;
  }
  
  .ptitle{
    font-size: 30px;
    line-height: 30px;
    font-weight: 800;
    text-align:center;
  }  
  
  .value-div{
    display: inline-flex;
    justify-content: center;
    align-items:center;
    padding-bottom: 10px;
  }
  
  .pvalue{
    font-size: 23px;
    font-weight: 400;
    padding-right: 5px;
    color: #000;
  }
  
  .b-title{
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 10px;
    color: purple;
    text-align: left;
  }  
  
  .h-title{
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 10px;
    padding-top: 20px;
    color: green;
    text-align: left;
  }
  
  .pvalueold{
    font-size: 16px;
    color: #6c6060;
  }
  
  .benefits {
    font-size: 16px;
    margin-bottom: 8px;
    padding-left: 10x;
    color: black
  }
  
  .benefits-list{
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .plan1{
    color: #70C1FF;
  }
  
  .plan2{
    color: #F3BE7C;
  }
  
  .plan3{
    color: #7DDE92;
  }
  
  .account-details{
    text-align: left;
    margin-left: 20px;
    background-color: #d6d6d6;
    border-radius: 2px;
    width: fit-content;
    padding: 10px;
  }

  .plan-container {
    margin-bottom: 20px;
    flex: 0 0 auto;
    width: 30%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  
  .plan1-outline{
    border-top: 10px solid #70C1FF; 
    border-bottom: 10px solid #70C1FF; 
  }

  .plan2-outline{
    border-top: 10px solid #F3BE7C; 
    border-bottom: 10px solid #F3BE7C; 
  }
  
  .plan3-outline{
    border-top: 10px solid #7DDE92; 
    border-bottom: 10px solid #7DDE92; 
  }
  
  @media only screen and (max-width: 767px) {
    img {
      width: 65%;
      height: 55%;
    }
    
    .plan-container {
      flex: 0 0 auto;
      width: 100%;
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

const PaymentPlans = () => {
    const {t} = useTranslation();

    return (
        <Wrapper>
            <Container fluid>
                <Row className="px-2 px-sm-4">
                    <h2 className="py-3 start">{t("paymentplans")}</h2>
                </Row>

                <Row className="text-center px-2">
                    <Row className="py-2 m-0" md={4}>
                        <div className="plan-container plan1-outline">
                            <Col
                                md={12}
                                className="py-1 py-md-3 py-sm-0 m-0"
                            >
                                <h3 className="ptitle plan1">{t("mp1title")}</h3>
                                <div className="value-div">
                                    <span className="pvalue">{t("mp1value")}</span>
                                </div>

                                <p className="b-title">{t("benefits")}</p>
                                <ul className="benefits-list">
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        1 month Period
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Unlimited access
                                    </li>
                                </ul>

                                <p className="h-title">{t("howtoregister")}</p>
                                <ul className="benefits-list">
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Sign up with student details
                                    </li>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Pay the registration fee({t("mp1value")}) into the following bank account
                                    </li>
                                    <pre className="account-details">
                                        <p>Sampath Bank</p>
                                        <br></br>
                                        <p>FLUENT BITZ Pvt Ltd</p>
                                        <p>104314026549</p>
                                        <p>Embilipitiya Branch</p>
                                    </pre>

                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Forward the payment slip and student details to the +94771001001 via Whatsapp or
                                        text message
                                    </li>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        You will get access within 10 minutes
                                    </li>
                                </ul>
                            </Col>
                        </div>

                        <div className="plan-container plan2-outline">
                            <Col
                                md={12}
                                className="py-1 py-md-3 py-sm-0 m-0"
                            >
                                <h3 className="ptitle plan2">{t("mp2title")}</h3>
                                <div className="value-div">
                                    <span className="pvalue">{t("mp2value")}</span>
                                    <span className="pvalueold"><del>({t("mp2ovalue")})</del></span>
                                </div>

                                <p className="b-title">{t("benefits")}</p>
                                <ul className="benefits-list">
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        1 year period
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Unlimited access
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Leaderboard Access
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Compete and win gifts
                                    </li>
                                </ul>
                                <p className="h-title">{t("howtoregister")}</p>
                                <ul className="benefits-list">
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Sign up with student details
                                    </li>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Pay the registration fee({t("mp2value")}) into the following bank account
                                    </li>
                                    <pre className="account-details">
                                        <p>Sampath Bank</p>
                                        <br></br>
                                        <p>FLUENT BITZ Pvt Ltd</p>
                                        <p>104314026549</p>
                                        <p>Embilipitiya Branch</p>
                                    </pre>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Forward the payment slip and student details to the +94771001001 via Whatsapp or
                                        text message
                                    </li>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        You will get access within 10 minutes
                                    </li>
                                </ul>
                            </Col>
                        </div>

                        <div className="plan-container plan3-outline">
                            <Col
                                md={12}
                                className="py-1 py-md-3 py-sm-0 m-0"
                            >
                                <h3 className="ptitle plan3">{t("mp3title")}</h3>
                                <div className="value-div">
                                    <span className="pvalue">{t("mp3value")}</span>
                                    <span className="pvalueold"><del>({t("mp3ovalue")})</del></span>
                                </div>

                                <p className="b-title">{t("benefits")}</p>
                                <ul className="benefits-list">
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Lifetime access
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Unlimited access
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Leaderboard access
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Sign up gift
                                    </li>
                                    <li className="benefits">
                                        <AiFillCheckCircle
                                            size="25"
                                            color="purple"
                                            className="mx-2 social-icon"
                                        />
                                        Compete and win gifts
                                    </li>
                                </ul>
                                <p className="h-title">{t("howtoregister")}</p>
                                <ul className="benefits-list">
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Sign up with student details
                                    </li>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Pay the registration fee({t("mp3value")}) into the following bank account
                                    </li>
                                    <pre className="account-details">
                                        <p>Sampath Bank</p>
                                        <br></br>
                                        <p>FLUENT BITZ Pvt Ltd</p>
                                        <p>104314026549</p>
                                        <p>Embilipitiya Branch</p>
                                    </pre>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        Forward the payment slip and student details to the +94771001001 via Whatsapp or
                                        text message
                                    </li>
                                    <li className="benefits">
                                        <AiFillCaretRight
                                            size="25"
                                            color="green"
                                            className="mx-2 social-icon"
                                        />
                                        You will get access within 10 minutes
                                    </li>
                                </ul>
                            </Col>
                        </div>
                    </Row>
                </Row>
            </Container>
        </Wrapper>
    );
};
export default PaymentPlans;
