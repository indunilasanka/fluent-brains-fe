import React, {useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";

import SingleTab from "./SingleTab";
import colorMath from "../../../images/Learning/color-mathmatics.svg";
import math from "../../../images/Learning/mathmatics.svg";
import eng from "../../../images/Learning/english.svg";
import colorEng from "../../../images/Learning/color-english.svg";
import colorScience from "../../../images/Learning/color-science.svg";
import science from "../../../images/Learning/science.svg";
import general from "../../../images/Learning/general.svg";
import colorGeneral from "../../../images/Learning/color-general.svg";
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  background: url("./images/learning.png");
  background-size: cover;

  padding: 0 40px;
  padding-bottom: 180px;
  padding-top: 40px;
  .main-title {
    display: flex;

    align-items: center;
    font-size: 18px;
    font-weight: 500;
    background: #fff;
    border-radius: 5px;
  }
  
  .all-tab {
    padding-top: 20px;
  }
  .active-btn {
    background: #6fcf97;
  }
  .main-title img {
    width: 50px;

    height: 50px;
  }
  .pointer{
    cursor: pointer;
  }

  @media only screen and (max-width: 1199px) {
    background-position: center;
  }
  @media only screen and (max-width: 991px) {
    padding: 0 15px;
  }

  @media only screen and (max-width: 767px) {
    .all-tab {
      padding-top: 40px;
    }
  }
  
  @media only screen and (max-width: 576px) {
    .main-title {
      flex-direction: column;
    }
    .main-title img {
      width: 40px;

      height: 30px;
    }
  }
`;
const TabSection = () => {
    const [value, setValue] = useState(0);

    const tabIcon = [math, eng, science, general];
    const colorIcon = [colorMath, colorEng, colorScience, colorGeneral];
    const {t} = useTranslation();
    const newArrays = t("tab_section", {returnObjects: true});

    const newArray = Array.from(newArrays);

    const TabArray = newArray
        .map((el, i) => {
            return {...el, icon: tabIcon[i]};
        })
        .map((el, i) => {
            return {...el, icon2: colorIcon[i]};
        });

    const array = t("tab_details", {returnObjects: true});
    const Tabdetails = Array.from(array).map((el, i) => {
        return {...el, icon: tabIcon[i]};
    });

    const {title, subtitle, tabbox} = Tabdetails[value];

    if (Tabdetails.length !== 4)
        return (
            <div className="my-2 text-center">
                <h1>Loading....</h1>
            </div>
        );
    return (
        <Wrapper>
            <Container fluid>
                <Row className="all-tab">
                    {TabArray.map((el, i) => (
                        <Col
                            xs={6}
                            md={3}
                            key={i}
                            className="p-1 pointer"
                            onClick={() => setValue(i)}
                        >
                            <div
                                className={
                                    i === value ? "active-btn main-title py-3" : "main-title py-3"
                                }
                            >
                                <img
                                    src={i === value ? el.icon2 : el.icon}
                                    alt=""
                                    className="mx-3"
                                />
                                <p style={{color: i === value && "#fff"}}>{el.title}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <SingleTab title={title} subtitle={subtitle} tabbox={tabbox}/>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default TabSection;
