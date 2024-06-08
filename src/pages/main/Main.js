import React from 'react';
import Header from "../../components/header/Header";
import AboutUs from "./aboutUs/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import Footer from "../../components/footer/Footer";

function Main() {
    return (
        <div className="main-page">
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
}

export default Main;
