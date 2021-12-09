import React, {useEffect, useState} from "react";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import Footer from "../Components/HomeComponents/Footer/Footer";
import PaymentPlans from "../Components/PaymentPlan/PaymentPlans";
import {useAuth} from "../Context/AuthContext";
import Navbar1 from "../Components/LearningComponents/Navbar/Navbar";

const PaymentPlansPage = () => {
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
            <PaymentPlans/>
            <Footer/>
        </>
    );
};
export default PaymentPlansPage;
