import React from 'react';
import Intro from '../Intro/Intro';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <div className={styles.container}>
            <Intro />
        </div>
    )
}
