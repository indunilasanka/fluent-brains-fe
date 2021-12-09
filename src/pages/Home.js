import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Banner from "../Components/HomeComponents/Banner/Banner";
import Footer from "../Components/HomeComponents/Footer/Footer";
import LearningImage from "../Components/HomeComponents/LearningImage/LearningImage";
import LearningPath from "../Components/HomeComponents/LearningPath/LearningPath";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import SliderSection from "../Components/HomeComponents/SliderSection/SliderSection";
import {useMainContext} from "../Context/Context";
import Navbar1 from "../Components/LearningComponents/Navbar/Navbar";
import {useAuth} from "../Context/AuthContext";

const Wrapper = styled.div`
  overflow-x: hidden;
`;
const Home = () => {
    const {modals} = useMainContext();
    if (modals) document.querySelector("body").style.overflow = "hidden";
    if (!modals) document.querySelector("body").style.overflow = "scroll";

    const [userState, setUserState] = useState({});
    const user = useAuth();
    useEffect(() => {
        setUserState(user.currentUser);
    }, []);

    return (
        <Wrapper>
            {userState == null &&
                <Navbar/>
            }
            {userState != null &&
                <Navbar1/>
            }
            <Banner/>
            <SliderSection/>
            <LearningPath/>
            <LearningImage/>
            <Footer/>
        </Wrapper>
    );
};

export default Home;
