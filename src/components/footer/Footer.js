// Footer.js

import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/aboutUs.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={styles.navigation}>
                <a href="#about-us">About Us</a>
                <a href="#contact-us">Contact Us</a>
                <a href="#login">Login</a>
            </div>
        </footer>
    );
};

export default Footer;
