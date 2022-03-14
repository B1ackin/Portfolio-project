import React from 'react';
import style from './Skills.module.css';
import Skill from "./skill/Skill";
import reactImg from '../image/icon/React.png'
import reduxImg from '../image/icon/Redux.png'
import typescriptImg from '../image/icon/typescript.png'
import javascriptImg from '../image/icon/JavaScript.png'
import htmlCssImg from '../image/icon/html-css.png'
import gitImg from '../image/icon/git.png'
import apiImg from '../image/icon/restapi.png'



const skillArray = [
   {title: 'React', imageUrl: reactImg },
    {title: 'Redux', imageUrl: reduxImg },
    {title: 'TypeScript', imageUrl: typescriptImg },
    {title: 'JavaScript', imageUrl: javascriptImg },
    {title: 'HTML/CSS', imageUrl: htmlCssImg },
    {title: 'GIT', imageUrl: gitImg },
    {title: 'REST API', imageUrl: apiImg },

]


function Skills() {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={style.container}>

                {skillArray.map((skill) =>(
                    <Skill title={skill.title} imageUrl={skill.imageUrl}/>
                ))}
            </div>

        </div>
    );
}

export default Skills;
