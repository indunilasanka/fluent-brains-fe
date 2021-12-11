import React, {useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {BiChevronRight} from "react-icons/bi";

import {useTranslation} from "react-i18next";
import {useMainContext} from "../../../Context/Context";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {HtmlTooltip} from "../../Form/ToolTip";

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;

  margin: 20px 0;
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin: 0;

    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  .icon-container img {
    width: 75px;
    height: 60px;
    margin: 0;
  }
 
  .main-text-container {
    background: #fff;
  }

  .text-container {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .text-container-align {
    text-align: right;
  }

  .all-text {
    position: absolute;
    top: 0;
    left: 0;
    background: #ffff;
    width: 100%;

    padding-bottom: 50px 0 !important;
    box-shadow: 0 5px 5px rgba(0 0 0 / 0.8);
    z-index: 1;
  }

  .text {
    font-size: 16px;
    color: black;
    font-weight: 400;
    cursor: pointer;
  }
  
  .hidden-text {
    font-size: 16px;
    color: #8c8c8c;
    font-weight: 400;
    cursor: pointer;
  }
  
  .tool-tip-box{
    background-color: #e7e7e7;
    color: rgba(0, 0, 0, 0.87);
    max-width: 220px;
    font-size: 10px;
    font-weight: bold;
    border: 1px solid #dadde9;
    box-shadow: 0 3px 10px rgb(0 0 0 / 50%);
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    margin-right: 15px;
  }

  button {
    font-size: 14px;
  }

  .right {
    margin-left: 0px;
  }

  .close-more {
    position: absolute;
    top: 20px;
    right: 15px;
  }

  .text {
    font-size: 16px;
  }
  
  .tool-tip-text{
    font-size: 12px;
    font-weight: bold;
  }

  @media only screen and (max-width: 1199px) {
    .icon-container {
      width: 100%;
      padding: 20px 0;
    }

    .text {
      font-size: 16px;
    }

    .text-container {
      text-align: center;
      border-left: none;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

    .text-container-align {
      text-align: center;
    }

    .button-container {
      justify-content: center;
      padding: 15px 0;
    }

    .right {
      margin-left: 0px;
    }

    button {
      font-size: 11px;
    }

    .expand {
      background: #fff;
      width: 100%;
      margin-left: 0px;
      padding: 15px 0;
    }
  }

  @media only screen and (max-width: 991px) {
    .text-container {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }

    .all-text {
      left: 13px;
    }
  }

  @media only screen and (max-width: 767px) {
    .close-more {
      right: 30px;
    }
  }
`;

const urlArray = [
    [
        "http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
        "http://d2rfvil7mufd2n.cloudfront.net/maths/en/ptns1/q1/index.html",
    ],
    [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ],
    [
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns"
    ],
    [
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns",
        "Color patterns and shape patterns"
    ]
];

const freeStatus = [
    [
        true,
        false,
        false,
        false,
        false,
        false
    ],
    [
        true,
        false,
        false,
        false,
        false,
        false
    ],
    [
        true,
        false,
        false,
        false,
        false,
        false
    ],
    [
        true,
        false,
        false,
        false,
        false,
        false
    ]
];

const SingleTabBox = (props) => {
    const {icon, name, text, color, title} = props;
    const [seeMore, setSeeMore] = useState(false);
    const {t} = useTranslation();
    const seemore = t("see_more");
    const seeless = t("see_less");
    const {showModals} = useMainContext();

    const showActivityModal = (title, url) => {
        showModals(title, url);
    };

    return (
        <Wrapper>
            <Container fluid className="p-0 m-0">
                <Row>
                    <Col
                        md={12}
                        xl={2}
                        className="m-0 p-0"
                        style={{background: seeMore ? "" : "#fff"}}
                    >
                        <div
                            className=""
                            style={{
                                background: seeMore && "#fff",
                                height: seeMore ? "160px" : "100%",
                            }}
                        >
                            <div className="icon-container" style={{background: color}}>
                                <img src={icon} alt=""/>
                                <p>{name}</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={12} lg={10} xl={8} className="main-text-container ">
                        {!seeMore && (
                            <Row className="py-3">
                                {text[0].map((el, i) => {
                                    return (
                                        <Col md={6} xl={5} key={i} className="text-container py-2">
                                            {((props.userData == null && !freeStatus[0][i]) || (props.userData != null && !props.userData.isRegistered && !freeStatus[0][i])) &&
                                                <HtmlTooltip
                                                    title={
                                                        <React.Fragment>
                                                            <Typography color="inherit" className="tool-tip-box">Become
                                                                a member and get access to premium
                                                                challenges</Typography>
                                                            <Link to="membership">
                                                                <Button section="true">Apply Membership</Button>
                                                            </Link>
                                                        </React.Fragment>
                                                    }
                                                >
                                                    <span className="hidden-text">{el}</span>
                                                </HtmlTooltip>
                                            }

                                            {((freeStatus[0][i]) || (props.userData != null && props.userData.isRegistered && !freeStatus[0][i])) &&
                                                <span className="text"
                                                      onClick={() => showActivityModal(el, urlArray[0][i])}>{el}</span>
                                            }
                                        </Col>
                                    );
                                })}
                            </Row>
                        )}
                        {seeMore && (
                            <div className="py-3">
                                {text.map((el, j) => (
                                    <Row className="py-2">
                                        {el.map((el, i) => (
                                            <Col
                                                key={"a" + i + j}
                                                md={6}
                                                xl={5}
                                                className="text-container py-2 "
                                            >
                                                {((props.userData == null && !freeStatus[j][i]) || (props.userData != null && !props.userData.isRegistered && !freeStatus[j][i])) &&
                                                    <HtmlTooltip
                                                        title={
                                                            <React.Fragment>
                                                                <Typography color="inherit" className="tool-tip-text">Become
                                                                    a member and get access to premium
                                                                    challenges</Typography>
                                                                <Link to="membership">
                                                                    <Button section="true">Apply Membership</Button>
                                                                </Link>
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <span className="hidden-text">{el}</span>
                                                    </HtmlTooltip>
                                                }

                                                {((freeStatus[j][i]) || (props.userData != null && props.userData.isRegistered && !freeStatus[j][i])) &&
                                                    <span className="text"
                                                          onClick={() => showActivityModal(el, urlArray[j][i])}>{el}</span>
                                                }
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        )}
                    </Col>

                    <Col
                        xs={12}
                        lg={2}
                        xl={2}
                        className="m-0 "
                        style={{padding: "0", background: "#fff"}}
                    >
                        {/* See more, See less button */}
                        <div className="button-container py-4">
                            <button
                                onClick={() => setSeeMore((prev) => !prev)}
                                style={{
                                    background: "#219653",
                                    color: "#fff",
                                    padding: "6px 10px",
                                    borderRadius: "5px",
                                    border: "none",
                                    fontSize: "16px",
                                    fontFamily: " 'Manrope', sans-serif",
                                    display: props.learn ? "flex" : "",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {seeMore ? seeless : seemore}
                                <BiChevronRight className="right" size="20"/>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default SingleTabBox;
