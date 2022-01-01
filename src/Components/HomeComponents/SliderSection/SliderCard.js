import React from "react";
import styled from "styled-components";

import "video-react/dist/video-react.css";
import {BiPlay} from "react-icons/bi";
import {useMainContext} from "../../../Context/Context";

const Wrapper = styled.div`
  background: #e0e0e0;
  margin: 0 8px;
  
  .c-title {
    font-weight: bold;
    font-size: 16px;
    padding: 10px 0;
    font-family: Manrope, sans-serif;
    font-weight: 00;
  }
  
  .img-container {
    position: relative;
    cursor: pointer;
  }
  
  .play-container {
    width: 50px;
    height: 50px;
    position: absolute;
    background: #fff;
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
  
  @media only screen and (max-width: 1200px) {
    margin-bottom: 25px;
  }
  
  @media only screen and (max-width: 880px) {
    .c-title {
      font-size: 16px;
      padding: 10px 0;
    }
  }
  
  @media only screen and (max-width: 576px) {
    margin-bottom: 25px !important;
    .img-container{
    }
  }
  
  @media only screen and (max-width: 550px) {
    .c-title {
      font-size: 16px;
    }

    margin-bottom: 25px;
  }
  
  @media only screen and (max-width: 500px) {
    .c-title {
      font-size: 16px;
    }
  }
`;
const SliderCard = (props) => {
    const {title, url} = props;
    const {showModals} = useMainContext();
    const showActivityModal = () => {
        showModals(title, url);
    };

    return (
        <>
            <Wrapper>
                <div className="px-2 mx-2 " style={{color: "#000"}}>
                    <div className="c-title-container">
                        <p className="py-2 c-title">{title} </p>
                    </div>
                    <div className="img-container">
                        <img src={props.img} alt="" className="w-100 h-100"/>
                        <div className="play-container" onClick={showActivityModal}>
                            <BiPlay className="play" color="black" size="25"/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default SliderCard;
