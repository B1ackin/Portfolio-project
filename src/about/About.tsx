import React from 'react';
import style from './About.module.css';


function About() {

    return (
        <div className={style.about}>
            <div className={style.about_bg}>
            <div className={style.about_text}>
                <h3 className={style.about_title}><span>ABOUT ME</span> </h3>
                <p>I'm a result oriented frontend developer withexperience in creating Landing Pages and SPA, usingReact(JS/TS), Redux, HTML & CSS. Now I amimproving my skills in this direction and expandingthem with new technologies. And also I have interestto learn React Native.</p>
                    <p>My free time is dedicated to improve my programmingskills and boosting my English. After working as afreelancer, I would like to find a project work/full-timejob in a creative company with up-to-date task andcollaborative team!</p>
            </div>
            </div>
        </div>
    );
}

export default About;