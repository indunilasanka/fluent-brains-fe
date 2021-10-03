import React from "react";
import styled from "styled-components";
import {useMainContext} from "../../../Context/Context";
import {useTranslation} from "react-i18next";
import {Link, NavLink} from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  top: 77px;
  right: 15px;
  width: 330px;

  z-index: 1;
  border-radius: 5px;
  z-index: 50;
  margin: 0;
  margin-left: auto;
  padding: 15px 20px;
  padding-bottom: 5px;

  font-size: 12px;

  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .login {
    background: none;
    border-radius: 5px;
    border: 2px solid #000;
    padding: 10px 15px;
    width: 100%;
    margin: 0 auto;
  }
  .active {
    background: #000;
    color: #fff !important;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;

    right: 0;
  }
`;
const Sidebar = () => {
  const { showSidebar } = useMainContext();
  const { t } = useTranslation();
  return (
    <Wrapper className="d-block d-lg-none ">
      <div className="sidebar ">
        <NavLink to="signup">
          <div onClick={showSidebar}>
            <button className="login active">{t("get_started")}</button>
          </div>
        </NavLink>
        <Link to="signin">
          <button onClick={showSidebar} className="login  my-3">
            {t("log_in")}
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
