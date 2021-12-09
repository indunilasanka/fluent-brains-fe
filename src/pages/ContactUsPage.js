import React, {useEffect, useState} from "react";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/HomeComponents/Footer/Footer";
import {useAuth} from "../Context/AuthContext";
import Navbar1 from "../Components/LearningComponents/Navbar/Navbar";

const ContactUsPage = () => {
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
            <ContactUs/>
            <Footer/>
        </>
    );
};
export default ContactUsPage;
