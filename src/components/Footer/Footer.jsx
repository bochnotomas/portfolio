import React from 'react';
import styles from './Footer.module.css';
import {animateScroll as scroll} from 'react-scroll';

export default function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div className={styles.container}>
            <div className={styles.row_1}>
                <div className={styles.col_1}>
                    <h1 onClick={toggleHome}>bochnotomas.</h1>
                </div>
                <div className={styles.col_2}>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com/in/tomasbochnovic/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/bochnotomas">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/bochnotomas/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className={styles.row_2}>
                <div className={styles.col_3}>
                    <p>Tomas Bochnovic '21</p>
                </div>
                <div className={styles.col_4}>
                    <p>tomasbochnovic76@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
