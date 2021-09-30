import React from "react";
import styled from "styled-components";
import { Row, Col, CloseButton } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth, firestore } from "../../config";
import { useAuth } from "../../Context/AuthContext";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";

const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  border-radius: 10px;
  position: relative;
  width: fit-content;
  background: #f7f4f2;
  padding: 50px;
  overflow-x: hidden;
  .cls-btn {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .back_to_browse {
    color: #000;
  }
  .start {
    font-weight: 600;
    padding: 20px 0;
  }
  .from-container {
    border-radius: 8px;
    width: 500px;
    background: #fff;
    margin: 0 auto;
    z-index: 5;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  @media only screen and (max-width: 680px) {
    width: 90%;
    .from-container {
      width: 100%;
    }
  }

  @media only screen and (max-height: 800px) {
    height: 95vh;
  }

  @media only screen and (max-width: 470px) {
    padding: 40px 10px 10px 10px;
    width: 95%;
  }
  .img-container {
    background: url("./images/signin.svg");

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
  @media only screen and (max-width: 767px) {
    .from-container {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    .not-a-member {
      font-size: 12px;
    }
  }
`;

const SignUp = ({
  handleClose,

  handleDisplayOff1,
  handleDisplayOn,
}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [school, setschool] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isAgreed, setisAgreed] = useState(false);
  const [err, seterr] = useState("");

  const { signup, addUserDetailsToFirestore } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [color, setColor] = useState("white");

  const handleSignup = async (event) => {
    event.preventDefault();
    const phoneVal = /^\d{10}$/;

    if (!(firstName && email && password)) {
      seterr("Please fill in name, email and password");
      return;
    } else if (!phoneNumber.match(phoneVal)) {
      seterr("Incorrect phone number");
      return;
    } else if (password !== confirmPassword) {
      seterr("Password should match with confirmation");
      return;
    } else if (!isAgreed) {
      seterr("You need to agree terms and conditions");
      return;
    } else {
      let user;

      var data = {
        firstName: firstName,
        lastName: lastName,
        school: school,
        phoneNumber: phoneNumber,
        email: email,
      };

      try {
        setLoading(true);
        await signup(email, password);
        await addUserDetailsToFirestore(data);
        history.push("/learning");
      } catch (error) {
        console.log(error);
        seterr(error.message);
      }

      setLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log("hello");
  //   console.log(auth.currentUser);
  // }, []);

  const { t } = useTranslation();
  const inputArray = i18next.t("input_array", { returnObjects: true });
  // if (inputArray.length !== 5)
  //   return (
  //     <div className="my-2 text-center">
  //       <h1>Loading....</h1>
  //     </div>
  //   );

  console.log(isAgreed);

  return (
    <Wrapper>
      <div className="cls-btn">
        <CloseButton
          onClick={() => {
            handleClose();
          }}
        />
      </div>
      <div>
        <Row>
          <form>
            <div className="from-container p-4   p-sm-4">
              <h2 className="py-3 start">
                {t("start_where1")} <br /> {t("start_where2")}
              </h2>

              {err ? (
                <div
                  style={{
                    fontSize: 15,
                    color: "red",
                    marginBottom: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  * {err}
                </div>
              ) : (
                <div></div>
              )}
              <Row>
                <Col lg={6}>
                  <input
                    type="text"
                    placeholder={t("first_name")}
                    className="w-100"
                    onChange={(event) => {
                      setfirstName(event.target.value);
                    }}
                  />
                </Col>
                <Col lg={6}>
                  {" "}
                  <input
                    type="text"
                    placeholder={t("last_name")}
                    className="w-100"
                    onChange={(event) => {
                      setlastName(event.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <input
                    type="text"
                    placeholder="School of Child"
                    className="w-100"
                    onChange={(event) => {
                      setschool(event.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-100"
                    onChange={(event) => {
                      setphoneNumber(event.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-100"
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-100"
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-100"
                    onChange={(event) => {
                      setconfirmPassword(event.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="py-2">
                  <label className="main">
                    {t("terms_condition")}
                    <input
                      type="checkbox"
                      onChange={(event) => {
                        setisAgreed(event.target.checked);
                      }}
                    />
                    <span className="geekmark"></span>
                  </label>
                </Col>
                <Col xs={12} className="py-3">
                  <button
                    onClick={handleSignup}
                    className="w-100 submit-button"
                    disabled={loading}
                  >
                    <ClipLoader color={color} loading={loading} size={18} />{" "}
                    <span></span>
                    {t("sign_up")}
                  </button>
                </Col>
                <Col xs={12}>
                  <div className="not-a-member">
                    <span className="m-0  px-1" style={{ opacity: ".8" }}>
                      {t("not_member")}?
                    </span>
                    <div
                      onClick={() => {
                        handleDisplayOff1();
                        handleDisplayOn();
                      }}
                    >
                      <span
                        className="m-0 px-1"
                        style={{ color: "#F3BE7C", cursor: "pointer" }}
                      >
                        {t("register")}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Row>
      </div>
    </Wrapper>
  );
};
export default SignUp;
