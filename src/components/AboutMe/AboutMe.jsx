import React, {useEffect} from 'react'
import styles from './AboutMe.module.css';
import aboutMeImage from '../../images/undraw_Profile_re_4a55.svg';
import team from '../../images/undraw_good_team_m7uu.svg';
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className={styles.container} id="about_me_container">
            <div data-aos="fade-up" className={styles.row_1}>
                <div className={styles.col_1}>
                    <h1>About Me</h1>
                    <p>I have finished second year of studying Computer Science. So far, I have used various programming languages, technologies and tools.</p>
                </div>
                <div className={styles.col_2}>
                    <img src={aboutMeImage} alt="about_me" />
                </div>
            </div>
            <div data-aos="fade-up" className={styles.row_2}>
                <div className={styles.col_3}>
                    <img src={team} alt="good_teams" />
                </div>
                <div className={styles.col_4}>
                    <p>I’m familiar with industrial workflow, agile methodologies and version control systems thanks to previous internships or group projects.</p>
                </div>
            </div>
        </div>
    )
}
