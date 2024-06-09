import React, {useState} from 'react';
import styles from './Assignments.module.scss'
import Assignment from './assignment/Assignment';
import AssignmentModal from './assignmentForm/AssignmentForm';
import ReturnRankedTasks  from './Program'

// Sample assignments data
const initialAssignments = [
    {
        name: "Assignment 1",
        dueDate: "2024-06-15", // -> 15 -9  = 6
        dueTime: "10:00 AM",  //-> 10
        diffLevel: "Medium", // -> 2
        submitted: true
    },
    {
        name: "Assignment 1",
        dueDate: "2024-06-15",
        dueTime: "10:00 AM",
        diffLevel: "Medium",
        submitted: true
    },
    {
        name: "Assignment 2",
        dueDate: "2024-06-25",
        dueTime: "2:30 PM",
        diffLevel: "Easy",
        submitted: false
    },
   
    // Other assignments...
];

const Assignments = () => {
    const [assignments, setAssignments] = useState(initialAssignments);
    const [isModalOpen, setIsModalOpen] = useState(false);

    

    const handleCheckboxChange = (index) => {
        const updatedAssignments = assignments.map((assignment, i) =>
            i === index ? {...assignment, submitted: !assignment.submitted} : assignment
        );

        setAssignments(assignments);
    };

    const handleAddAssignment = (newAssignment) => {
        setAssignments([...assignments, newAssignment]);
       // setAssignments(ReturnRankedTasks(assignments));
    };


    const difficultyLevels = {
        "Easy": 1,
        "Medium": 2,
        "Hard": 3
    };
    
    const calculateSortingScore = (assignment) => {
        const now = new Date();
        const dueDateTime = new Date(`${assignment.dueDate} ${assignment.dueTime}`);
    
        const hoursLeft = (dueDateTime - now) / (1000 * 60 * 60); // Convert milliseconds to hours
        const daysLeft = (dueDateTime - now) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    
        const difficultyScore = difficultyLevels[assignment.diffLevel];
    
        // Avoid division by zero by adding a small value to daysLeft if it is zero
        const sortingScore = difficultyScore * hoursLeft * (1 / (daysLeft || 0.0001));
    
        return sortingScore;
    };
    
    assignments.sort((a, b) => {
        const scoreA = calculateSortingScore(a);
        const scoreB = calculateSortingScore(b);
        return scoreB - scoreA; // Sort in descending order
    });

    return (
        <div>
            <div className={styles.pageHeader}>
                <h2>My Assignments</h2>
                <button
                    className={styles.addAssignmentBtn}
                    onClick={() => setIsModalOpen(true)}
                >
                    Add Assignment
                </button>
            </div>
            <div className={styles.assignmentList}>
                {assignments.map((assignment, index) => (
                    <Assignment
                        key={index}
                        assignment={assignment}
                        index={index}
                        onCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
            <AssignmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddAssignment}
            />
        </div>
    );
};

export default Assignments;
