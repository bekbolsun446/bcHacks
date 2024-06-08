import React from 'react';
import styles from './Header.module.scss'
import aboutUsImg from '../../images/aboutUs.png'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={aboutUsImg} alt="Your Logo"/>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            <div className={styles.login}>
                <button>Login</button>
            </div>
        </header>
    );
}

export default Header;