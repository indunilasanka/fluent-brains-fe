import React from "react";
import styled from "styled-components";

import "video-react/dist/video-react.css";
import { BiPlay } from "react-icons/bi";
import { useMainContext } from "../../../Context/Context";

const Wrapper = styled.div`
  background: #e0e0e0;
  margin: 0 8px;
  .c-title {
    font-size: 13px;
    padding: 10px 0;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  
  .img-container {
    position: relative;
    cursor: pointer;
  }
  .play-container {
    width: 50px;
    height: 50px;
    position: absolute;
    background: #f2f2f2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .play {
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  }
  .c-title-container {
    padding: 2px 0;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 880px) {
    .c-title {
      font-size: 13px;
      padding: 10px 0;
    }
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 50px !important;
  }
  @media only screen and (max-width: 550px) {
    .c-title {
      font-size: 18px;
    }

    margin-bottom: 50px;
  }
  @media only screen and (max-width: 500px) {
    .c-title {
      font-size: 18px;
    }
  }
`;
const SliderCard = (props) => {
  const { title, color } = props;
  const { showModals } = useMainContext();
  const showModalna = () => {
    showModals();
  };

  return (
    <>
      <Wrapper>
        <div className="px-2 mx-2 " style={{ color: color }}>
          <div className="c-title-container">
            <p className="py-2 c-title">{title} </p>
          </div>
          <div className="img-container">
            <img src={props.img} alt="" className="w-100" />
            <div className="play-container" onClick={showModalna}>
              <BiPlay className="play" color="#BDBDBD" size="25" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SliderCard;
