import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import { IoMdClose } from "react-icons/io";
import { useMainContext } from "../../../Context/Context";
import mobile from "../../../images/Home/mobile.gif";
import Loder from "./Loder.js";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 102%;
  right: 0px;
  background: rgba(0, 0, 0, 0.8);

  ::-webkit-scrollbar {
    display: none;
  }

  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000000000000000;
  overflow: auto;

  .modal-container {
    max-width: 960px;
    max-height: 660px; //change to control height
    height: 95%;
    width: 100%;
    display: flex;
    justify-content: center;
    aline-items: center;
    flex-direction: column;
    z-index: 5 !important;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin: 0;
  }

  .modal-container ::-webkit-scrollbar {
    display: none;
  }

  .m-title {
    background: #f7f4f2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    color: black;
    margin: 0;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    font-family: "Inter", sans-serif;
  }

  .close {
    margin: 0;
    padding: 0;
    cursor: pointer;
    background: orange;
    border-radius: 50%;
    width: 30px !important;
    height: 30px !important;
  }

  .mobile {
    display: none;
    height: 100%;
    padding-top: 38%;
    padding-left: 1%;
  }

  @media only screen and (max-width: 350px) {
    .mobile {
      display: block;
    }

    .iframe {
      display: none !important;
    }

    .modal-container {
      height: 100%;
    }

    .m-title {
      padding: 20px 10px;
    }
  }
`;

const Modal = () => {
  const { setModals } = useMainContext();
  let [loading, setLoading] = useState(true);

  return (
    <Wrapper>
      <div className="modal-container">
        <div className="m-title">
          <p>Here will be your title</p>
          <IoMdClose
            className="close"
            size="20"
            onClick={() => setModals(false)}
          />
        </div>

        <div className="mobile">
          <img src={mobile} alt="" />
        </div>

        <Iframe
          url="http://activities.fluentbrains.com/tense2/index.html"
          scrolling="no"
          width="100%"
          height="100%"
          id="myId"
          className="iframe"
          display="initial"
          position="relative"
          onLoad={() => {
            setLoading(false);
          }}
        ></Iframe>
        <Loder load={loading}></Loder>
      </div>
    </Wrapper>
  );
};

export default Modal;
