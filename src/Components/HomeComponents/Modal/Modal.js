import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import { IoMdClose } from "react-icons/io";
import { useMainContext } from "../../../Context/Context";
import mobile from "../../../images/Home/mobile.gif";

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
  // overflow: hidden;

  .modal-container {
    width: 960px;
    height: 670px; //change to control height
    display: flex;
    justifycontent: center;
    aling-items: center;
    flex-direction: column;
    z-index: 5 !important;
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
    padding: 15px 20px;
    color: black;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .close {
    margin: 0;
    padding: 1px;
    cursor: pointer;
    background: orange;
    border-radius: 50%;
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

    .myClassname {
      display: none !important;
    }
    .modal-container {
      height: 100%;
    }
    .m-title {
      padding: 25px 40px;
    }
  }

  @media only screen and (max-width: 300px) {
    .m-title {
      padding: 25px 50px;
    }
  }
`;

const Modal = () => {
  const { setModals } = useMainContext();

  return (
    <Wrapper onClick={() => setModals(false)}>
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
          url="http://activities.fluentbrains.com.s3-website.ap-south-1.amazonaws.com/tense/"
          scrolling="no"
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        ></Iframe>
      </div>
    </Wrapper>
  );
};

export default Modal;
