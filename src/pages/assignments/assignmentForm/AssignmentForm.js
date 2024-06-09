import React from 'react';
import styles from './AssignmentForm.module.scss'; // Import SCSS module

const AssignmentModal = ({isOpen, onClose, onSave}) => {
    // State to store form field values
    const [formData, setFormData] = React.useState({
        name: '',
        dueDate: '',
        dueTime: '',
        difficultyLevel: ''
    });

    // Function to handle form field changes
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Call the onSave function and pass the form data
        onSave(formData);
        // Clear the form fields after submission
        setFormData({
            name: '',
            dueDate: '',
            dueTime: '',
            difficultyLevel: ''
        });
        // Close the modal
        onClose();
    };

    return (
        <div className={isOpen ? styles.modalOpen : styles.modalClosed}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <div className={styles.assignmentForm}>
                    <h2>Assignment Form</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name of assignment */}
                        <div className={styles['form-group']}>
                            <label htmlFor="name">Name of Assignment:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Due date of assignment */}
                        <div className={styles['form-group']}>
                            <label htmlFor="dueDate">Due Date:</label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Due time of assignment */}
                        <div className={styles['form-group']}>
                            <label htmlFor="dueTime">Due Time:</label>
                            <input
                                type="time"
                                id="dueTime"
                                name="dueTime"
                                value={formData.dueTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Difficulty level of assignment */}
                        <div className={styles['form-group']}>
                            <label htmlFor="difficultyLevel">Difficulty Level:</label>
                            <select
                                id="difficultyLevel"
                                name="difficultyLevel"
                                value={formData.difficultyLevel}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        {/* Submit button */}
                        <button onClick={handleSubmit} type="submit" className={styles['submit-button']}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AssignmentModal;
