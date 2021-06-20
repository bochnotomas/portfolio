import React from 'react';
import styles from './ContactMe.module.css';
import Header from '../Header/Header';
import ContactMeIntro from '../ContactMeIntro/ContactMeIntro';

export default function ContactMe() {
    return (
        <div className={styles.container}>
            <Header />
            <ContactMeIntro />
        </div>
    )
}
