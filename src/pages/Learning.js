import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import TabSection from "../Components/LearningComponents/TabSection/TabSection";
import Footer from "../Components/HomeComponents/Footer/Footer";
import {useAuth} from "../Context/AuthContext";
import Navbar1 from "../Components/LearningComponents/Navbar/Navbar";

const Wrapper = styled.div`
  overflow-x: hidden;
`;
const Learning = () => {
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
            <TabSection/>
            <Footer/>
        </Wrapper>
    );
};

export default Learning;
