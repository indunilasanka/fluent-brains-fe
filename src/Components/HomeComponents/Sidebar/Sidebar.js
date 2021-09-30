import React from "react";
import styled from "styled-components";
import { useMainContext } from "../../../Context/Context";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { NavLink, Link } from "react-router-dom";
const Wrapper = styled.div`
  position: absolute;
  background: #fff;

  top: 74px;
  right: 0;
  width: 180px;
  padding: 15px 10px;
  padding-bottom:5px;
  z-index: 1;
  border-radius: 5px;
  z-index:50;
 
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 12px;
 
  transition: 10s;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    
    
    
  }
  .login {
    background: none;
    border-radius: 5px;
    border: 2px solid #000;
    padding: 8px 15px;
    width:95%;
  }
  
`;
const Sidebar = ({ handleOpen }) => {
  const { showSidebar } = useMainContext();
  const { t } = useTranslation();
  return (
    <Wrapper className="d-block d-md-none ">
      <div className="sidebar ">
        <div
          onClick={() => {
            showSidebar();
            handleOpen();
          }}
        >
          <div>
            <Button>{t("get_started")}</Button>
          </div>
        </div>
        <div
          onClick={() => {
            showSidebar();
            handleOpen();
          }}
          style={{
            width: "90%",
          }}
        >
          <button style={{ width: "100%" }} className="login  my-3 ">
            {t("log_in")}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
