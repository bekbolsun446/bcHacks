// ContactUs.js

import React from 'react';
import styles from './ContactUs.module.scss';
import contactUsImg from '../../../images/contactUs.svg'

const ContactUs = () => {
    return (
        <div className={styles.contactUs}>
            <div className={styles.content}>
                <h2>Contact Us</h2>
                <div className={styles.contactDetails}>
                    <img src={contactUsImg} alt="Contact" className={styles.image}/>
                    <div className={styles.details}>
                        <div className={styles.detail}>
                            <span>Phone:</span> +1 234 567 890
                        </div>
                        <div className={styles.detail}>
                            <span>Email:</span> example@example.com
                        </div>
                        <div className={styles.detail}>
                            <span>WhatsApp:</span> +1 234 567 890
                        </div>
                        <div className={styles.detail}>
                            <span>Instagram:</span> @example
                        </div>
                        <div className={styles.detail}>
                            <span>LinkedIn:</span> example
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
