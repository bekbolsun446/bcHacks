// AboutUs.js
import React from 'react';
import styles from './AboutUs.module.scss'; // Import SCSS module
import aboutUsImg from '../../../images/aboutUs.png'

const AboutUs = () => {
    return (
        <section id="about-us" className={styles.aboutUs}>
            <div className={styles.content}>
                <h2>About Us</h2>
                <p>Welcome to our educational platform! We are dedicated to providing high-quality resources and tools
                    to help you succeed in your learning journey.</p>
                <p>Our mission is to empower learners of all ages and backgrounds to achieve their academic goals and
                    unlock their full potential.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur delectus dolorem dolorum
                    fugit laborum molestias nostrum perferendis, placeat quae quaerat quasi qui quibusdam quisquam
                    sapiente unde vitae? Commodi, qui Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                    adipisci cumque dolore rerum sit tempora voluptatem. Architecto consequatur corporis cumque deserunt
                    est fugiat hic id inventore ipsa ipsam, iusto laborum magnam magni molestiae molestias neque
                    obcaecati odit officiis omnis optio pariatur placeat quaerat quo quos sint tempore vitae voluptas
                    voluptates!</p>
            </div>
            <div className={styles.imageContainer}>
                <img src={aboutUsImg} alt="About Us" className={styles.image}/>
            </div>
        </section>
    );
}

export default AboutUs;
