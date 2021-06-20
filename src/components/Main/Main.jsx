import React from 'react';
import Nav from '../Nav/Nav';
import HeroSection from '../HeroSection/HeroSection';
import AboutMe from '../AboutMe/AboutMe';
import MyProjects from '../MyProjects/MyProjects';
import Footer from '../Footer/Footer';
import styles from './Main.module.css';

export default function Main() {
    return (
        <div>
            <Nav />
            <div className={styles.container}>
            <HeroSection />
            <AboutMe />
            <MyProjects />
            <Footer />
            </div>
        </div>
        
    )
}
