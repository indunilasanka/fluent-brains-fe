import React from "react";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import Footer from "../Components/HomeComponents/Footer/Footer";
import PaymentPlans from "../Components/PaymentPlan/PaymentPlans";

const PaymentPlansPage = () => {
    return (
        <>
            <Navbar/>
            <PaymentPlans/>
            <Footer/>
        </>
    );
};
export default PaymentPlansPage;
