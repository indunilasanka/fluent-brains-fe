import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  background: #F7F4F2;
  padding: 40px 0;
  overflow-x: hidden;
  .back_to_browse {
    color: #000;
  }
  .start {
    font-weight: 600;
    padding: 20px 0;
  }
  .from-container {
    border-radius: 8px;
    background: #fff;
    margin-left: -10px;
    z-index: 5;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  .img-container {
    background: url("./images/signIn.svg");
    background-size: cover;
    background-position: center;

    display: flex;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .back-to-browse {
    cursor: pointer;

    margin: 0;
    display: flex;
    justifycontent: flex-start;
    align-items: center;
  }
  .img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .img-title {
    padding: 40px;
    padding-bottom: 0;
    line-height: 35px;
    position: absolute;
    bottom: 50px;
    font-weight: 500;
    font-size: 26px;
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
  .main {
    display: block;
    position: relative;
    padding-left: 45px;
    font-size: 12px;

    cursor: pointer;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
  }

  /* Hide the default checkbox */
  input[type="checkbox"] {
    visibility: hidden;
  }

  /* Creating a custom checkbox
        based on demand */
  .geekmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ddd;
    border-radius: 6px;
  }

  .main input:active ~ .geekmark {
    background-color: red;
  }

  .main input:checked ~ .geekmark {
    background-color: red;
  }

  .geekmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .main input:checked ~ .geekmark:after {
    display: block;
  }

  .main .geekmark:after {
    content: "";
    left: 8px;
    bottom: 5px;
    width: 9px;
    height: 18px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .submit-button {
    background: #219653;
    border: none;
    padding: 10px;
    color: #fff;
    border-radius: 4px;
  }
  .not-a-member {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .forgot {
    font-size: 12px;
  }
  @media only screen and (max-width: 991px) {
    .main {
      padding-left: 32px;
    }
  }
  @media only screen and (max-width: 767px) {
    .from-container {
      margin: 0 auto;
    }
    .main {
      font-size: 15px;
    }
    .forgot {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    .not-a-member {
      font-size: 12px;
    }
  }
`;

const SignIn = () => {
  const { t } = useTranslation();
  const inputArray = i18next.t("signin_array", { returnObjects: true });
  if (inputArray.length !== 2)
    return (
      <div className="my-2 text-center">
        <h1>Loading....</h1>
      </div>
    );
  return (
    <Wrapper>
      <div>
        <Row>
          <form>
            <Col md={11} lg={9}>
              <Row>
                <Col md={7} className="img-container d-none d-md-block">
                  <p className="img-title">
                    {t("the_willingness_to")}
                    <br />
                    {t("learn_new_skills_is")}
                    <br />
                    {t("very_high")}
                  </p>
                </Col>
                <Col
                  xs={10}
                  sm={8}
                  md={5}
                  className="from-container p-4   p-sm-4"
                >
                  <div className="">
                    <div className="back-to-browse">
                      <BsArrowLeftShort size="25" className="m-0" />
                      <Link to="/">
                        <span className="m-0  back_to_browse  px-2">
                          {t("back_to_browse")}
                        </span>
                      </Link>
                    </div>
                    <h2 className="py-3 start">
                      {t("sign_in_to")} <br /> {t("continue")}
                    </h2>

                    <Row>
                      {inputArray.map((el, i) => (
                        <Col xs={12} key={i}>
                          <input
                            type={el.type}
                            placeholder={el.placeholder}
                            className="w-100"
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} className="py-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="main">
                            {t("remember_me")}
                            <input type="checkbox" />
                            <span className="geekmark"></span>
                          </label>
                          <span
                            className="m-0 forgot"
                            style={{ opacity: ".5" }}
                          >
                             {t("forgot_password")}
                          </span>
                        </div>
                      </Col>
                      <Col xs={12} className="py-3">
                        <button type="submit" className="w-100 submit-button">
                          {t("sign_in")}
                        </button>
                      </Col>
                      <Col xs={12}>
                        <div className="not-a-member">
                          <span
                            className="m-0  px-1"
                            style={{ color: "rgba(0, 0, 0, 0.5);" }}
                          >
                            {t("not_member")}?
                          </span>{" "}
                          <Link to="signup">
                            <span
                              className="m-0 px-1"
                              style={{ color: "#F3BE7C", cursor: "pointer" }}
                            >
                              {t("register")}
                            </span>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </form>
        </Row>
      </div>
    </Wrapper>
  );
};
export default SignIn;
