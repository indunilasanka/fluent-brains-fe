import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import logo from "../../../images/Learning/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMainContext } from "../../../Context/Context";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  padding: 0 20px;
  position: relative;

  .search-container {
    position: relative;
    background: #f5f5f5;
    padding: 8px;
    padding-right: 20px;
    width: 35%;
    border-radius: 4px;
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
    padding: 0 15px;
    padding-right: 30px;
  }

  .search {
    position: absolute;
    right: 15px;
    top: 9px;
    color: rgba(0, 0, 0, 0.5);
  }
  .user {
    color: rgba(0, 0, 0, 0.5);
  }
  .logout-container {
  
    position: relative;
  }
  .logout {
    text-align: center;
    background: #b7b7b7;
    color: #fff;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    right: 55px;
    
    
    width:120px;
  }
  .logouts{
    text-align: center;
    background: #b7b7b7;
    color: #fff;
    border-radius: 5px;
    position: absolute;
    width: 100%;

   left:52%;
   transform:translateX(-50%);
    
    
    width:120px;
  }
  .hamburger {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .sidebar {
    position: absolute;
    background: #fff;
    top: 78px;
    left: 20px;
    padding: 20px 0;
    width: 95%;
    display: none;
    border-radius: 5px;
  }
  .language-container {
    position:relative;
    padding-top: 7px;
    
  }
  .language {
    text-align: center;
    background: #fff;
    color: #000;
    border-radius: 5px;
    position: absolute;
    width: 100%;

    top: 45px;
    right: 20px;
    box-shadow: 0 3px 10px #b7b7b7;
  }
  .language {
    text-align: center;
    background: #fff;
    color: #000;
    border-radius: 5px;
    position: absolute;
    width: 100%;

    top: 45px;
    right: 0px;
    box-shadow: 0 3px 10px #b7b7b7;
  }
  
  .language p:hover {
    background: #b7b7b7;
    color: #fff;
  }
  @media only screen and (max-width: 1199px) {
    .search-container {
      width: 40%;
    }
    .logo img{
      width:158px;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 0 20px;
    .search-container {
      width: 45%;
    }
    .language-container {
      padding-top: 2px;
    }
    .sidebar {
      display: block;
      width: 89%;
      left: 53px;
    }
    .hamburgar {
      padding-top: 4px;
    }
    .search-container {
      width: 70%;
    }
  }
  @media only screen and (max-width: 767px) {
    .search-container2 {
      width: 70%;
    }
    .sidebar {
      left: 14px;
      width: 96%;
    }
  }
  @media only screen and (max-width: 520px) {
    .search-container2 {
      width: 96%;
      margin-right: 20px;
      margin-left: 18px;
    }
    .search-input {
      margin-left: 10px;
    }
    .logo img {
      width: 140px;
    }
  }
  @media only screen and (max-width: 420px) {
    .sidebar {
      left: 9px;
    }
    padding: 0px;
  }
  input {
    font-size: 12px;
  }
  }
`;
const Navbar = () => {
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
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <Col xs={6} md={6} lg={2} className="m-0 logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Col>

          <Col md={6} className="search-container d-none d-lg-block">
            <input
              type="text"
              className="search-input "
              placeholder={t("placeholeder")}
            />
            <HiOutlineSearch size="20" className="search" />
          </Col>
          <Col lg={4} xs={6} dir="" className="m-0 ">
            <Row className="d-flex justify-content-end">
              <Col
                xs={4}
                className="logout-container m-0 p-0 d-none d-lg-block"
              >
                <div className="logout-container m-0 p-0 ">
                  <div
                    onClick={showLanguageFunc}
                    className="d-flex align-items-center mx-4 language-container"
                  >
                    <p className="mx-2">{language}</p>
                    <AiFillCaretDown className=" user" />
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
              <Col xs={8} className="logout-container m-0 d-none d-lg-block">
                <div
                  dir=""
                  onClick={showLogOut}
                  className="d-flex  justify-content-end align-items-center"
                  style={{ width: "80%" }}
                >
                  <FaUserCircle size="35" className=" mx-3  user" />
                  <p>{t("name")}</p>
                  <AiFillCaretDown
                    className=" user"
                    style={{ marginRight: "10px" }}
                  />
                </div>

                {logout && (
                  <div className="logout py-2 my-2" onClick={showLogOut}>
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
                  <AiFillCaretDown className=" user" />
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
          {learningSidebar && (
            <Col
              xs={12}
              className="sidebar "
              style={{ paddingBottom: logout && "50px" }}
            >
              <Row className="w-100">
                <Col
                  xs={12}
                  className="search-container search-container2 d-lg-none d-block"
                >
                  <input
                    type="text"
                    className="search-input "
                    placeholder={t("placeholeder")}
                  />
                  <HiOutlineSearch size="20" className="search" />
                </Col>
                <Col xs={12} className="my-3">
                  <div className="logout-container m-auto d-block d-lg-none">
                    <div
                      onClick={showLogOut}
                      className="d-flex align-items-center justify-content-center"
                      style={{ width: "200px" }}
                    >
                      <FaUserCircle size="35" className=" mx-3  user" />
                      <p>{t("name")}</p>
                      <AiFillCaretDown
                        className=" user"
                        style={{ marginRight: "10px" }}
                      />
                    </div>
                    {logout && (
                      <div className="logouts py-2 my-3">{t("logout")}</div>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
