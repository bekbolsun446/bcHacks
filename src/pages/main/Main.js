import React from 'react';
import AboutUs from "./aboutUs/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import PlannerRank from "./plannerRank/PlannerRank";


function Main() {
    return (
        <div className="main-page">
            <AboutUs />
            <ContactUs />
            <PlannerRank />
        </div>
    );
}

export default Main;
