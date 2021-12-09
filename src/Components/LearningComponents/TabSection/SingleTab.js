import React from "react";
import styled from "styled-components";
import {Container, Row} from "react-bootstrap";
import SingleTabBox from "./SingleTabBox";

import kindergarten from "../../../images/Learning/kindergarten.svg";
import firstgrade from "../../../images/Learning/firstgrade.svg";
import Modal from "../../HomeComponents/Modal/Modal";
import {useMainContext} from "../../../Context/Context";

const Wrapper = styled.div`
  padding: 0 50px;
  text-align: center;
  font-family: "Noto Serif", sans-serif;
  font-weight: 600;
  color: #161616;
  .title {
    font-size: 48px;
    line-height: 65px;
    padding-top: 50px;
  }
  .subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
  }
  .title-container {
    width: 80%;
  }
  @media only screen and (max-width: 767px) {
    padding: 0;
    .title-container {
      width: 95%;
    }
    .title {
      font-size: 35px;
    }
    .subtitle {
      font-size: 14px;
    }
  }
`;
const SingleTab = (props) => {
    const {modals} = useMainContext();
    const icon = [kindergarten, firstgrade, firstgrade];
    const newTabbox = props.tabbox.map((el, i) => {
        return {...el, icon: icon[i]};
    });

    return (
        <>
            <Wrapper>
                <Container fluid className="p-0">
                    <Row>
                        <div className="title-container">
                            <h1 className="title">{props.title}</h1>
                            <p className="subtitle py-5">{props.subtitle}</p>
                        </div>
                        <div>
                            {newTabbox.map((el, i) => (
                                <SingleTabBox {...el} title={props.title} key={i}/>
                            ))}
                        </div>
                    </Row>
                </Container>
            </Wrapper>
            {modals && <Modal/>}
        </>
    );
};

export default SingleTab;
