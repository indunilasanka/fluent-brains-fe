import React from "react";
import styled from "styled-components";
import logo from "../../../images/Home/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";

import Sidebar from "../Sidebar/Sidebar";
import { useMainContext } from "../../../Context/Context";
import { NavLink, Link } from "react-router-dom";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding: 15px 50px;
  position: relative;
  .top-nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    max-width: 198px;
    max-height: 44px;
  }
  .login-container {
    display: flex;
    align-items:center;
    
  }
  .login {
   
    border-radius: 5px;
    border: 2px solid #000;
   
    font-family: "Inter", sans-serif;
    color:#000;
    
 
  }

  .login p{
    color:#000;
    padding: 8px 15px;
    background: #fff;
  }
 
  .hamburger {
    display: none;
  }
  .main-language-container {
    position: relative;
    width: 100px;
    cursor:pointer;
  }
  .language-container {
    padding-top: 7px;
  }
  .language {
    text-align: center;
    background: #fff;
    color: #000;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    z-index: 10;
    top: 45px;
    right: 10px;
    box-shadow: 0 3px 10px #b7b7b7;
  }
  .language p:hover {
    background: #b7b7b7;
    color: #fff;
  }
  .activeButton{
   
    color:#fff;
  }
 .activeButton p{
   color:#fff;
   background:#000;
 }
  @media only screen and (max-width: 991px) {
    padding:15px 15px

  }
  @media only screen and (max-width: 767px) {
    .language-container {
      padding-top: 2px;
    }
    .login-col {
      padding-top: 6px;
    }
    .logo {
      width: 170px;
    }
  }
 
 
  @media only screen and (max-width: 626px) {
    .hamburger {
      display: block;
    }
    .logo {
      width: 150px;
    }
    padding: 15px 20px;
  }
  }
  @media only screen and (max-width: 400px) {
    padding: 15px 10px;
    .login-col {
      padding-top: 3px;
    }
  }

`;
const Navbar = () => {
  const {
    sidebar,
    showSidebar,
    showLanguage,

    showLanguageFunc,

    language,

    LanguageArray,
    singleLanguage,
  } = useMainContext();
  const { t } = useTranslation();
  const buttonArray = [
    { name: t("get_started"), goto: "signup" },
    { name: t("log_in"), goto: "signin" },
  ];

  return (
    <Wrapper>
      <Container fluid="xs">
        <Row className="top-nav">
          <Col xs={3}>
            <Link to="/">
              <img src={logo} alt="#" className="logo" />
            </Link>
          </Col>

          <Col xs={9} dir="rtl" className="login-col">
            <div className="d-block d-flex d-md-none">
              <GiHamburgerMenu
                size="30"
                className="m-0"
                style={{ marginTop: "6px", cursor: "pointer" }}
                onClick={showSidebar}
              />
              <div className="main-language-container mx-2 m-md-0 p-0 ">
                <div
                  onClick={showLanguageFunc}
                  className="d-flex align-items-center language-container"
                >
                  <AiFillCaretDown className=" user" />
                  <p className="">{language}</p>
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

            <div className="login-container  d-none d-flex d-md-block">
              <div className="d-flex ">
                {buttonArray.map((el, i) => (
                  <div key={i} className="login mx-2 dalim">
                    <NavLink activeClassName="activeButton" to={el.goto}>
                      <p className="button-text">{el.name}</p>
                    </NavLink>
                  </div>
                ))}

                <div className="main-language-container m-0 p-0 ">
                  <div
                    onClick={showLanguageFunc}
                    className="d-flex align-items-center language-container"
                  >
                    <AiFillCaretDown className=" user" />
                    <p className="">{language}</p>
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
            </div>
          </Col>
        </Row>
        {sidebar && <Sidebar />}
      </Container>
    </Wrapper>
  );
};

export default Navbar;
