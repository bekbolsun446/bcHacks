import React from 'react';
import AboutUs from "./aboutUs/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import PlannerRank from "./plannerRank/PlannerRank";
import SubmissionData from "./submissionData/SubmissionData"


function Main() {
    return (
        <div className="main-page">
            <SubmissionData />
            <PlannerRank />
        </div>
    );
}

export default Main;
