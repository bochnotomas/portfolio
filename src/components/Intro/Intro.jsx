import React from 'react';
import styles from './Intro.module.css';
import hello_image from '../../images/undraw_Hello_re_3evm.svg';

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.col_1}>
                <h1>Hi, I'm Tomas!</h1>
                <p>University student passionate about learning new stuff and development of something out of nothing.</p>
                <button>Find out more</button>
            </div>
            <div className={styles.col_2}>
                <img src={hello_image} alt="hello_image" />
            </div>            
        </div>
    )
}
