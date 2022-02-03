import React from 'react';
import style from './Skills.module.css';
import Skill from "./skill/Skill";

const skillArray = [
    {title: 'React', imageUrl: '/image/icon/react.png' },
    {title: 'Redux', imageUrl: '/image/icon/redux.png' },
    {title: 'TypeScript', imageUrl: '/image/icon/typescript.png' },
    {title: 'JavaScript', imageUrl: '/image/icon/javascript.png' },
    {title: 'HTML/CSS', imageUrl: '/image/icon/html-css.png' },
    {title: 'GIT', imageUrl: '/image/icon/git.png' },
    {title: 'REST API', imageUrl: '/image/icon/restapi.png' },

]


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>

                {skillArray.map((skill) =>(
                    <Skill title={skill.title} imageUrl={skill.imageUrl}/>
                ))}
            </div>

        </div>
    );
}

export default Skills;
