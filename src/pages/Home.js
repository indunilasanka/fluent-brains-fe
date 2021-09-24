import React from "react";
import styled from "styled-components";

import Banner from "../Components/HomeComponents/Banner/Banner";
import Footer from "../Components/HomeComponents/Footer/Footer";
import LearningImage from "../Components/HomeComponents/LearningImage/LearningImage";
import LearningPath from "../Components/HomeComponents/LearningPath/LearningPath";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import SliderSection from "../Components/HomeComponents/SliderSection/SliderSection";
import { useMainContext } from "../Context/Context";
import AboutUsPage from "./AboutUs";

const Wrapper = styled.div`
  overflow-x: hidden;
`;
const Home = () => {
  const { modals } = useMainContext();
  if (modals) document.querySelector("body").style.overflow = "hidden";
  if (!modals) document.querySelector("body").style.overflow = "scroll";
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <AboutUsPage />

      <SliderSection />

      <LearningPath />
      <LearningImage />

      <Footer />
    </Wrapper>
  );
};

export default Home;
