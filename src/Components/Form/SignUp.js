import React, {useState} from "react";
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import {BsArrowLeftShort} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {Link, useHistory} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {useAuth} from "../../Context/AuthContext";
import {useMainContext} from "../../Context/Context";

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
    background: url("./images/signin.png");

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

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [school, setSchool] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [err, setErr] = useState("");

    const {signup, addUserDetailsToFirestore} = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [color, setColor] = useState("white");

    const succMessage = () => {
        updateSuccessMessage("Registration is successful. We have sent an email with a confirmation link to your email address.  " +
            "Open it up to activate your account. After that you can sign-in to the portal with registered email and password.");
    };

    const {
        successMessage, updateSuccessMessage,
    } = useMainContext();

    const handleSignup = async (event) => {
        event.preventDefault();
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

        if (!(firstName && email && password && phoneNumber)) {
            setErr("Please fill in name, email, phone number and password");

        } else if (!regex.test(phoneNumber)) {
            setErr("The phone number is invalid");

        } else if (password !== confirmPassword) {
            setErr("Password should match with confirmation");

            // } else if (!isAgreed) {
            //     setErr("You need to agree terms and conditions");

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
                const result = await signup(email, password);
                await addUserDetailsToFirestore(data);
                await result.user.updateProfile({
                    displayName: data.firstName + ' ' + data.lastName,
                });
                await result.user.sendEmailVerification();
                succMessage();
                history.push('/signin');
            } catch (error) {
                if (error.code == 'auth/invalid-email') {
                    error.message = "The email address is invalid";
                }
                setErr(error.message);
            }

            setLoading(false);
        }
    };

    const handleGoBack = async (event) => {
        history.goBack();
    }

    const {t} = useTranslation();

    return (
        <Wrapper>
            <div>
                <Row>
                    <form>
                        <Col md={11} lg={9}>
                            <Row>
                                <Col md={7} className="img-container d-none d-md-block">
                                    <p className="img-title">
                                        {t("the_willingness_to_learn")}
                                        <br/>
                                        {t("new_skills_is_very_high")}.
                                    </p>
                                </Col>
                                <Col
                                    xs={10}
                                    sm={8}
                                    md={5}
                                    className="from-container p-4     p-sm-4"
                                >
                                    <div className="">
                                        <div className="back-to-browse">
                                            <BsArrowLeftShort size="25" className="m-0"/>
                                            <span className="m-0 back_to_browse px-2" onClick={handleGoBack}>
                        {t("back_to_browse")}
                      </span>
                                        </div>
                                        <h2 className="py-3 start">
                                            {t("start_where1")} <br/> {t("start_where2")}
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
                                                        setFirstName(event.target.value);
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
                                                        setLastName(event.target.value);
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
                                                        setSchool(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={12}>
                                                <input
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    className="w-100"
                                                    onChange={(event) => {
                                                        setPhoneNumber(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={12}>
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    className="w-100"
                                                    onChange={(event) => {
                                                        setEmail(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={12}>
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    className="w-100"
                                                    onChange={(event) => {
                                                        setPassword(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={12}>
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="w-100"
                                                    onChange={(event) => {
                                                        setConfirmPassword(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            {/*<Col xs={12} className="py-2">*/}
                                            {/*    <label className="main">*/}
                                            {/*        {t("terms_condition")}*/}
                                            {/*        <input type="checkbox"*/}
                                            {/*               onChange={(event) => {*/}
                                            {/*                   setIsAgreed(event.target.checked);*/}
                                            {/*               }}*/}
                                            {/*        />*/}
                                            {/*        <span className="geekmark"></span>*/}
                                            {/*    </label>*/}
                                            {/*</Col>*/}
                                            <Col xs={12} className="py-3">
                                                <button type="submit" className="w-100 submit-button"
                                                        onClick={handleSignup} disabled={loading}>
                                                    <ClipLoader color={color} loading={loading} size={18}/>{" "}
                                                    <span></span>
                                                    {t("sign_up")}
                                                </button>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="not-a-member">
                          <span className="m-0  px-1" style={{opacity: ".8"}}>
                            {t("already_member")}?
                          </span>
                                                    <Link to="signin">
                            <span
                                className="m-0 px-1"
                                style={{color: "#F3BE7C", cursor: "pointer"}}
                            >
                              {t("login_now")}
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
export default SignUp;
