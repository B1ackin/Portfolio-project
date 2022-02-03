import React from 'react';
import style from "../slider/Slider.module.css";

type SlidePropsType = {
    image: string,
    title: string | undefined
    text: string | undefined
}


function Slide(props: SlidePropsType) {
    return (
        <div className={style.oneSlide}>
            <div>
                <img src={props.image} alt="travel" className={style.image}/>
            </div>
            <div className={style.textBlock}>
                <div className={style.slideTitle}>{props.title}</div>
                <p>{props.text}</p>
            </div>


        </div>
    );
}

export default Slide;
