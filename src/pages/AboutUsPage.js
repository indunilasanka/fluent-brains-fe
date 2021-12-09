import React, {useEffect, useState} from "react";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import Navbar1 from "../Components/LearningComponents/Navbar/Navbar";
import Footer from "../Components/HomeComponents/Footer/Footer";
import AboutUs from "../Components/AboutUs/AboutUs";
import {useAuth} from "../Context/AuthContext";

const AboutUsPage = () => {
    const [userState, setUserState] = useState({});
    const user = useAuth();
    useEffect(() => {
        setUserState(user.currentUser);
    }, []);

    return (
        <>
            {userState == null &&
                <Navbar/>
            }
            {userState != null &&
                <Navbar1/>
            }
            <AboutUs/>
            <Footer/>
        </>
    );
};
export default AboutUsPage;
