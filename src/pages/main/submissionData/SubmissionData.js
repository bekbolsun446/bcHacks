import React from "react";

const SubmitForm = (props) => {
    return (
        <div className='styles.task'> 
            <h1>Task {props.number}: {props.name} </h1>
            <h2>DueDate  {props.duedate} Days  </h2>
        </div>
    );
};

export default SubmitForm