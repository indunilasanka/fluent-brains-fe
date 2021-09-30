import React from "react";
import styled from "styled-components";
import { Row, Col, CloseButton } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled.div`
  font-family: "Inter", sans-serif;

  border-radius: 10px;
  background: #f7f4f2;
  position: relative;
  width: fit-content;
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
    background: #fff;
    width: 500px;
    z-index: 5;
    margin: 0 auto;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  @media only screen and (max-width: 680px) {
    width: 90%;
    .from-container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 470px) {
    padding: 40px 10px 10px 10px;
    width: 95%;
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

const SignIn = ({
  handleClose,
  handleOpen,
  handleClose1,
  handleOpen1,
  handleDisplayOff,
  handleDisplayOn1,
}) => {
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const [err, seterr] = useState("");
  const { login } = useAuth();

  const [color, setColor] = useState("white");

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!(email && password)) {
      seterr("Please fill email and password");
      return;
    } else {
      try {
        setLoading(true);
        await login(email, password);
        history.push("/learning");
      } catch (err) {
        seterr(err.message);
      }

      setLoading(false);
    }
  };

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
      <div className="cls-btn">
        <CloseButton
          onClick={() => {
            handleClose();
            handleClose1();
          }}
        />
      </div>
      <form>
        <div className="from-container p-4   p-sm-4">
          <h2 className="py-3 start">
            {t("sign_in_to")} <br /> {t("continue")}
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
          </Row>
          <Row>
            <Col xs={12} className="py-2">
              <div className="d-flex justify-content-between align-items-center">
                <label className="main">
                  {t("remember_me")}
                  <input type="checkbox" />
                  <span className="geekmark"></span>
                </label>
                <span className="m-0 forgot" style={{ opacity: ".5" }}>
                  {t("forgot_password")}
                </span>
              </div>
            </Col>

            <Col xs={12} className="py-3">
              <button
                onClick={handleLogin}
                className="w-100 submit-button"
                disabled={loading}
              >
                <ClipLoader color={color} loading={loading} size={18} />{" "}
                <span></span>
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
                <div
                  onClick={() => {
                    handleDisplayOff();
                    handleDisplayOn1();
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
    </Wrapper>
  );
};
export default SignIn;
