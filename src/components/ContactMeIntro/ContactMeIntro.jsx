import React from 'react';
import styles from './ContactMeIntro.module.css';
import together from '../../images/together.svg';
import pdf from '../../images/CV.pdf';



export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.col_1}>
                <img src={together} alt="hello_image" />
                
            </div>
            <div className={styles.col_2}>
                <h1>Let’s make something great together.</h1>
                <p>Get in touch with me on these platforms.</p>
                <div className={styles.buttons}>
                    <div className={styles.icon}>
                        <div className={styles.tooltip}>
                            LinkedIn
                        </div>
                        <button>
                            <a href="https://www.linkedin.com/in/tomasbochnovic/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </button>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.tooltip}>
                            GitHub
                        </div>
                        <button>
                            <a href="https://github.com/bochnotomas">
                                <i class="fab fa-github"></i>
                            </a>
                        </button>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.tooltip}>
                            tomasbochnovic76@gmail.com
                        </div>
                        <button>
                            <a href="mailto:tomasbochnovic76@gmail.com">
                                <i class="far fa-envelope"></i>
                            </a>
                        </button>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.tooltip}>
                            CV
                        </div>
                        <button>
                            <a href={pdf} target="_blank">
                                <i class="far fa-file-alt"></i>
                            </a>
                        </button>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.tooltip}>
                            Instagram
                        </div>
                        <button>
                            <a href="https://www.instagram.com/bochnotomas/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </button>
                    </div>
                </div>
            </div>            
        </div>
    )
}
