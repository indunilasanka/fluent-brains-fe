import React, { useState } from "react";
import styled from "styled-components";

import Banner from "../Components/HomeComponents/Banner/Banner";
import Footer from "../Components/HomeComponents/Footer/Footer";
import LearningImage from "../Components/HomeComponents/LearningImage/LearningImage";
import LearningPath from "../Components/HomeComponents/LearningPath/LearningPath";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import SliderSection from "../Components/HomeComponents/SliderSection/SliderSection";
import { useMainContext } from "../Context/Context";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SignIn from "../Components/Form/SignIn";
import SignUp from "../Components/Form/SignUp";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Home = () => {
  const { modals } = useMainContext();
  if (modals) document.querySelector("body").style.overflow = "hidden";
  if (!modals) document.querySelector("body").style.overflow = "scroll";

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [displayOn, setdisplayOn] = useState("block");
  const [displayOn1, setdisplayOn1] = useState("none");

  const handleDisplayOn = () => setdisplayOn("block");
  const handleDisplayOff = () => setdisplayOn("none");
  const handleDisplayOn1 = () => setdisplayOn1("block");
  const handleDisplayOff1 = () => setdisplayOn1("none");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    bgcolor: "background.paper",
    width: "100%",
    display: displayOn,

    width: "fit-content",
    p: 4,
  };

  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    bgcolor: "background.paper",
    width: "100%",
    display: displayOn1,
    width: "fit-content",

    p: 4,
  };

  return (
    <Wrapper>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div style={style}>
            <SignIn
              handleClose={handleClose}
              handleDisplayOff={handleDisplayOff}
              handleDisplayOn1={handleDisplayOn1}
            />
          </div>

          <div style={style1}>
            <SignUp
              handleClose={handleClose}
              handleDisplayOff1={handleDisplayOff1}
              handleDisplayOn={handleDisplayOn}
            />
          </div>
        </div>
      </Modal>

      <Navbar handleOpen={handleOpen} />
      <Banner />

      <SliderSection />

      <LearningPath />
      <LearningImage />

      <Footer />
    </Wrapper>
  );
};

export default Home;
