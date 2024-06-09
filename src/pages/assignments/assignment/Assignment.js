import React from 'react';
import styles from './Assignment.module.scss';

const Assignment = ({assignment, index, onCheckboxChange}) => {
    return (
        <div className={styles.assignment}>
            <div>
                <input
                    type="checkbox"
                    id={`assignment-${index}`}
                    checked={assignment.submitted}
                    onChange={() => onCheckboxChange(index)}
                />
                <label htmlFor={`assignment-${index}`}>{assignment.name}</label>
            </div>
            <div>{assignment.dueDate}</div>
            <div>{assignment.dueTime}</div>
            <div>{assignment.diffLevel}</div>
        </div>
    );
};

export default Assignment;
