import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className={styles.navbar}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1>bochnotomas.</h1>
            </Link>
        </div>
    )
}
