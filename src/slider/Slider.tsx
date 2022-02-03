import React, {useState} from 'react';
import style from "../slider/Slider.module.css";
import {FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Slide from "./Slide";

export type SliderDataType = {
    image: string
    title?: string | undefined
    text?: string | undefined
}

export type SliderPropsType = {
    slides: Array<SliderDataType>
}


function Slider(props: SliderPropsType) {
    const [current, setCurrent] = useState(0)
    const length = props.slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null
    }

    return (
        <div className={style.bg}><div className={style.title}>PORTFOLIO</div>
        <div className={style.slider}>
            <FaArrowCircleLeft className={style.leftArrow}  onClick={prevSlide}/>
            <FaArrowCircleRight className={style.rightArrow} onClick={nextSlide} />
            {props.slides.map((slide, index) => {
                return (
                    <div className={index === current ? style.slideActive : style.slide} key={index}>
                        {index === current && (
                            <Slide image={slide.image} title={slide.title} text={slide.text}/>

                        )

                        }

                        {/*<img src={slide.image1} alt="travel" className={style.image1}*/}
                    </div>
                    )

            })}
        </div>
        </div>
    );
}

export default Slider;
