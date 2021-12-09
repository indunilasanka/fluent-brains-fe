import React, {useEffect, useState} from "react";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import Footer from "../Components/HomeComponents/Footer/Footer";
import {useAuth} from "../Context/AuthContext";
import Navbar1 from "../Components/LearningComponents/Navbar/Navbar";
import Reset from "../Components/Form/Reset";

const ResetPage = () => {
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
            <Reset/>
            <Footer/>
        </>
    );
};

export default ResetPage;
