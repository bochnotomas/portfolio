import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.row_1}>
                <div className={styles.col_1}>
                    <h1>bochnotomas.</h1>
                </div>
                <div className={styles.col_2}>
                    <div className={styles.icons}>
                        <i className="fab fa-linkedin-in"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-instagram"></i>
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
