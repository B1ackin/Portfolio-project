import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="#top">Home</a>
            <a href="#skills">Skills</a>
            <a href="#about">About me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default Nav;
