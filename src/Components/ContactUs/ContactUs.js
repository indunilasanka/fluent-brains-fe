import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import emailjs from "emailjs-com";

import GoogleMapReact from "google-map-react";

const Wrapper = styled.div`
  background: #f7f4f2;
  color: #000;
  font-family: "Noto Serif", serif;
  overflow: hidden;

  .back-to-browse {
    padding: 0;
    padding-top: 30px;
  }
  
  .start {
    font-size: 40px;
    font-weight: 400;
    padding-top: 20px;
  }

  h2 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    padding: 15px 0;
    padding-bottom: 10px;
  }
  
  h3 {
    font-size: 19px;
    font-weight: 800;
    margin: 0;
  }

  .address-container {
    font-size: 14px;
  }

  .address-container {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  
  .address-container p {
    padding-top: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
  }

  .address-container h5 {
    padding: 15px;
    padding-top: 25px;
    padding-bottom: 5px;
    font-size: 14px;
    font-weight: 800;
  }
  
  .query-container {
  }
  
  .query {
    background: #fff;
    padding: 20px 40px;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 12px 15px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    margin: 10px 0;
    outline: none;
    border-radius: 4px;
  }
  
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 12px 15px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    margin: 10px 0;
    outline: none;
    border-radius: 4px;
    resize: none;
    height: 100%;
  }
  
  .submit-button {
    background: #219653;
    border: none;
    padding: 10px;
    color: #fff;
    border-radius: 4px;
  }
  
  @media only screen and (max-width: 767px) {
    input {
      padding: 10px 15px;
      margin: 7px 0;
    }
    textarea {
      height: 200px;
    }
    .query {
      padding: 20px 20px;
      padding-bottom: 8px;
    }
  }
  
  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 30px;
    }
  }
`;
const AnyReactComponent = ({text}) => <div>{text}</div>;

const ContactUs = () => {
    const {t} = useTranslation();
    const [center] = useState({
        lat: 59.95,
        lng: 30.33,
    });
    const [zoom] = useState(11);

    const inputArray = t("contact_array", {returnObjects: true});
    if (inputArray.length !== 4) {
        return (
            <div className="my-2 text-center">
                <h1>Loading....</h1>
            </div>
        );
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("gmail", "template_q2ou9r9", "local_2h8hBygX1dcsRWL9p3oue")
            .then(
                (result) => {
                    console.log("dalim");
                },
                (error) => {
                    console.log("kumar");
                }
            );
    };

    return (
        <Wrapper>
            <Container fluid>
                <Row className="px-2 px-sm-4">
                    <h2 className=" start">{t("get_in_touch")}</h2>
                    <Col lg={7}>

                        <Row className="my-2 mx-0 p-0 ">
                            <Col lg={12} className="m-0 p-3 px-3 address-container">
                                <Row>
                                    <h3 className="">Colombo, Sri Lanka</h3>
                                    <p className="">No 22, Perera Tower, Sri Dharmakeerthiyarama Road, Colombo 03</p>

                                    <h5>{t("general_enquiries")}</h5>
                                    <div className="py-1">
                                        <div>
                                            <FaPhoneAlt/>{" "}
                                            <span className="px-2">1300 014 419</span>
                                        </div>
                                        <div className="py-1">
                                            <HiMail/>{" "}
                                            <span className="px-2"> hello@fluentbrains.com</span>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <Col xs={12} className="p-0">
                            <div
                                style={{height: "400px", width: "100%"}}
                                className="py-2"
                            >
                                <GoogleMapReact
                                    bootstrapURLKeys={{
                                        key: "AIzaSyAXRvVzqUDhKugKkBNnRYOK7ayp65Ulwxk",
                                    }}
                                    defaultCenter={center}
                                    defaultZoom={zoom}
                                >
                                    <AnyReactComponent
                                        lat={6.9108605}
                                        lng={79.8565388}
                                        text={<FaMapMarkerAlt size="30" color="#219653"/>}
                                    />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Col>
                    <Col sm={9} md={7} lg={5} className="query-container py-2">
                        <div className="query  ">
                            <h2>{t("send_your_query")}</h2>

                            <Row>
                                <form onSubmit={sendEmail}>
                                    {inputArray.map((el, i) => (
                                        <Col xs={12} key={i}>
                                            <input
                                                type={el.type}
                                                placeholder={el.placeholder}
                                                className="w-100"
                                                name={el.name}
                                            />
                                        </Col>
                                    ))}
                                    <Col xs={12}>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="7"
                                            className="w-100"
                                            placeholder={t("message")}
                                        ></textarea>
                                    </Col>

                                    <Col xs={12} className="py-3">
                                        <button type="submit" className="w-100 submit-button">
                                            {t("submit")}
                                        </button>
                                    </Col>
                                </form>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};
export default ContactUs;
