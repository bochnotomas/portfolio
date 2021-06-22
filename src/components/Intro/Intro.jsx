import React from 'react';
import styles from './Intro.module.css';
import hello_image from '../../images/undraw_Hello_re_3evm.svg';
import {Link} from 'react-scroll';

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.col_1}>
                <h1>Hi, I'm Tomas!</h1>
                <p>University student passionate about learning new things and development of something out of nothing.</p>
                <Link to="about_me_container" smooth={true} duration={1000} offset={-80}>
                    <button>Find out more</button>
                </Link>
            </div>
            <div className={styles.col_2}>
                <img src={hello_image} alt="hello_image" />
            </div>            
        </div>
    )
}
