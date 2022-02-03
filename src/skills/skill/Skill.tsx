import React from 'react';
import style from './Skill.module.css';

type SkillPropsType = {
    title: string,
    imageUrl: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.skillBlock}>
            <div><img src={props.imageUrl} alt=""/></div>
            <div className={style.title}>{props.title}</div>
        </div>
    );
}

export default Skill;
