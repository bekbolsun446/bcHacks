import React, {useState} from 'react';
import styles from './Assignments.module.scss'
import Assignment from './assignment/Assignment';
import AssignmentModal from './assignmentForm/AssignmentForm';

// Sample assignments data
const initialAssignments = [
    {
        name: "Assignment 1",
        dueDate: "2024-06-15",
        dueTime: "10:00 AM",
        diffLevel: "Medium",
        submitted: true
    },
    {
        name: "Assignment 2",
        dueDate: "2024-06-18",
        dueTime: "2:30 PM",
        diffLevel: "Hard",
        submitted: false
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
        dueDate: "2024-06-18",
        dueTime: "2:30 PM",
        diffLevel: "Hard",
        submitted: false
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
        dueDate: "2024-06-18",
        dueTime: "2:30 PM",
        diffLevel: "Hard",
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
        setAssignments(updatedAssignments);
    };

    const handleAddAssignment = (newAssignment) => {
        setAssignments([...assignments, newAssignment]);
    };

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
