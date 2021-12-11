import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillCaretDown} from "react-icons/ai";
import logo from "../../../images/Learning/logo.svg";
import profile from "../../../images/Learning/profile.svg";
import {GiHamburgerMenu} from "react-icons/gi";
import {useMainContext} from "../../../Context/Context";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../../Context/AuthContext";

const Wrapper = styled.div`
  display: flex;
  padding: 0 15px;

  align-items: center;

  position: relative;
  height: 75px;

  .search-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 0;
  }

  .logo img {
    max-width: 198px;
    max-height: 44px;
  }

  .search-input {
    width: 100%;
    background: none;
    border: none;
    outline: none;
    padding: 12px 0;
    ${"" /* padding: 0 15px; */}
    ${"" /* padding-right: 30px; */}
  }
  
  .name-text{
    font-size: 16px;
  }

  .search {
    position: absolute;
    right: 15px;
    top: 9px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .user {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  .profile{
    width: 30px !important;
    height: 30px !important;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  .logout-container {
    position: relative;
    cursor:pointer;
  }
  
  .user-container {
    width: 195px;
  }
  
  .logout {
    text-align: center;
    background: #b7b7b7;
    color: #fff;
    border-radius: 5px;
    position: absolute;
    top: 40px;
    width: 80%;
    left: 55%;
    transform: translateX(-50%) !important;
    z-index: 10;
  }
  
  .logouts {
    text-align: center;
    background: #b7b7b7;
    color: #fff;
    border-radius: 5px;
    position: absolute;

    left: 50%;
    transform: translateX(-50%);

    width: 170px;
  }
  .hamburger {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  .sidebar {
    position: absolute;
    background: #fff;
    top: 77px;
    left: 20px;
    z-index: 100;
    width: 330px;
    display: none;
    border-radius: 5px;
    right: 15px;
    margin: 0;
    margin-left: auto;
    padding: 5px 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  
  .language-container {
    position: relative;
    ${"" /* padding-top: 7px; */}
  }
  .language-container:hover{
    cursor:pointer;
  }

  .language {
    text-align: center;
    background: #fff;
    color: #000;
    border-radius: 5px;
    position: absolute;
    width: 150px;
    top: 45px;
    left:50%;
    transform:translateX(-50%);
    box-shadow: 0 3px 10px #b7b7b7;
    cursor:pointer;
    z-index: 100;
  }

  .language p:hover {
    background: #b7b7b7;
    color: #fff;
    cursor:pointer;
  }
  
  @media only screen and (max-width: 1199px) {
    ${
    "" /* .search-container {
      width: 40%;
    } */
}

    .logo img {
      width: 158px;
    }
  }
  @media only screen and (max-width: 991px) {
    ${"" /* padding: 0 20px; */}
    ${
    "" /* .search-container {
      width: 45%;
    } */
}
    ${
    "" /* .language-container {
      padding-top: 2px;
    } */
}
    .sidebar {
      display: block;
    }

    ${
    "" /* .hamburgar {
      padding-top: 4px;
    } */
}
    .search-container {
      width: 85%;
    }
    input {
      font-size: 12px;
    }
  }
  
  @media only screen and (max-width: 767px) {
    padding: 0 10px;
  }
  
  @media only screen and (max-width: 520px) {
    .search-input {
      margin-left: 10px;
    }
    .logo img {
      width: 140px;
    }
  }
  
  @media only screen and (max-width: 450px) {
    .sidebar {
      width: 100%;

   right:0;

    }
    }
    input {
      font-size: 12px;
    }
  }
  
  @media only screen and (max-width: 350px) {
    padding: 0 5px;
    .language-container {
      margin: 0 !important;
      margin-right: 10px !important;
    }
    .language-container p {
      margin: 0 4px !important;
    }
  }
`;
const Navbar = () => {
    const history = useHistory();
    const [userState, setUserState] = useState({});
    const {
        showLanguage,
        setShowLanguage,
        showLanguageFunc,
        logout,
        showLogOut,
        learningSidebar,
        setLearningSidebar,
        language,
        LanguageArray,
        singleLanguage,
    } = useMainContext();

    const {t} = useTranslation();

    const user = useAuth();

    const handleLogout = async () => {
        await user.logout();
        showLogOut(false);
        history.go(0);
    }

    useEffect(() => {
        setUserState(user.currentUser);
    }, []);

    return (
        <Wrapper>
            <Container fluid>
                <Row className="align-items-center p-relative">
                    <Col xs={5} md={6} lg={3} className="m-0 logo">
                        <Link to="/">
                            <img src={logo} alt=""/>
                        </Link>
                    </Col>

                    <Col md={5} className="search-container d-none d-lg-block">
                    </Col>
                    <Col lg={4} xs={7} md={6} dir="" className="m-0 ">
                        <Row className="d-flex justify-content-end align-items-center">
                            <Col
                                xs={3}
                                className="logout-container m-0 p-0 d-none d-lg-block"
                            >
                                <div className="logout-container m-0 p-0 ">
                                    <div
                                        onClick={showLanguageFunc}
                                        className="d-flex align-items-center justify-content-center language-container"
                                    >
                                        <p className="mx-2">{language}</p>
                                        <AiFillCaretDown className=" user m-0"/>
                                    </div>

                                    {showLanguage && (
                                        <div className="language">
                                            {LanguageArray.map((el, i) => (
                                                <p
                                                    key={i}
                                                    onClick={() => {
                                                        singleLanguage(el.name);
                                                        i18next.changeLanguage(el.code);
                                                    }}
                                                    className=" py-2 px-2 "
                                                >
                                                    {el.name}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Col>
                            <Col
                                xs={8}
                                className="logout-container user-container m-0 d-none d-lg-block"
                            >
                                <div
                                    dir=""
                                    onClick={showLogOut}
                                    className="d-flex  justify-content-end align-items-center"
                                >
                                    <img src={profile} className=" mx-0 profile" alt=""/>
                                    <p className="mx-2 name-text">{userState != null && userState.displayName}</p>
                                    <AiFillCaretDown className=" user m-0"/>
                                </div>

                                {logout && (
                                    <div className="logout py-2 my-2" onClick={handleLogout}>
                                        {t("logout")}
                                    </div>
                                )}
                            </Col>
                        </Row>
                        <div
                            dir="rtl"
                            className=" m-0 d-flex align-items-center d-lg-none hamburger"
                        >
                            <GiHamburgerMenu
                                size="30"
                                onClick={() => {
                                    setLearningSidebar((prev) => !prev);
                                    setShowLanguage(false);
                                }}
                                className="p-0 m-0"
                            />
                            <div className="logout-container m-0 p-0 ">
                                <div
                                    onClick={showLanguageFunc}
                                    className="d-flex align-items-center mx-4 language-container"
                                >
                                    <AiFillCaretDown className=" user"/>
                                    <p className="mx-2">{language}</p>
                                </div>

                                {showLanguage && (
                                    <div className="language">
                                        {LanguageArray.map((el, i) => (
                                            <p
                                                key={i}
                                                onClick={() => {
                                                    singleLanguage(el.name);
                                                    i18next.changeLanguage(el.code);
                                                }}
                                                className=" py-2 px-2 "
                                            >
                                                {el.name}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {learningSidebar && (
                <Col
                    xs={12}
                    sm={6}
                    className="sidebar "
                    style={{paddingBottom: logout && "50px"}}
                >
                    <Row className=" d-flex justify-content-center py-2">
                        <Col xs={12} className="my-3">
                            <div className="logout-container m-auto d-block d-lg-none user-container">
                                <div
                                    onClick={showLogOut}
                                    className="d-flex align-items-center justify-content-center "
                                    style={{width: "200px"}}
                                >
                                    <img src={profile} className=" mx-0  profile" alt=""/>
                                    <p className="mx-2">{userState != null && userState.displayName}</p>
                                    <AiFillCaretDown className=" user m-0"/>
                                </div>
                                {logout && (
                                    <div className="logouts py-2 my-3">{t("logout")}</div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Col>
            )}
        </Wrapper>
    );
};

export default Navbar;
