import React from 'react';
import styles from './PlannerRank.module.scss';


const Task = (props) => {
    return (
        <> 
        <h1>TaskName: {props.name} </h1>
        <h2>DueDate  {props.duedate} </h2>
        </>
    );
};


const PlannerRank = (rankedInput) => {

    const elments = [];
    for (var i=0; i < rankedInput.length(); i++) {
      elments.push(<Task name={rankedInput[i][0]} duedate={rankedInput[i][1]} />)
    } 
    return elements;
};

export default PlannerRank;
