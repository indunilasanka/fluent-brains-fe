import React from "react";
import styled from "styled-components";

import Navbar from "../Components/LearningComponents/Navbar/Navbar";
import TabSection from "../Components/LearningComponents/TabSection/TabSection";
import Footer from "../Components/HomeComponents/Footer/Footer";

const Wrapper = styled.div`
  overflow-x: hidden;
`;
const Learning = () => {
  return (
    <Wrapper>
      <Navbar />
      <TabSection />

      <Footer />
    </Wrapper>
  );
};

export default Learning;
