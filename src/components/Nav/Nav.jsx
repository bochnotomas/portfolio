import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';

export default function Nav() {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div className={styles.navbar}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1 onClick={toggleHome}>bochnotomas.</h1>
            </Link>
            <Link to='/contactme'>
                <button>Contact me</button>
            </Link>
        </div>
    )
}
