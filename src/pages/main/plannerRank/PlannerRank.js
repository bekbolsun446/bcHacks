import React from 'react';
import { useState } from 'react';
import ReturnRankedTasks from '../../../Program.js';
import styles from './PlannerRank.module.scss';

var testINPUT = [//Diff, Time, Days
    ["english", 3, 2, 2],
    ["calculus", 2, 1,2],
    ["ap blox fruits practice test", 2000, 1000,1]
];



const Task = (props) => {
    return (
        <div className='styles.task'> 
            <h1>Task {props.number}: {props.name} </h1>
            <h2>DueDate  {props.duedate} Days  </h2>
        </div>
    );
};


const PlannerRank = (rankedInput) => {

    rankedInput = ReturnRankedTasks(testINPUT);
    const elements = [];
    for (var i=0; i < rankedInput.length; i++) {


      elements.push(<Task number={i+1} name={rankedInput[i][0]} duedate={rankedInput[i][2]} />)
    } 
    return(
         <div className={styles.list}>
          {elements}
        </div>

    );
};



export default PlannerRank;
