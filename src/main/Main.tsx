import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/style/Container.module.css'
import myPhoto from '../image/skillsAndPhoto.png';



function Main() {

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span>HELLO</span>
                    <h1>I’M LEONID KRUCHENOK</h1>
                    <p>I've been doing web design, front-end and back-end development for a year now.
                        Do you need a website design, site layout, or maybe a turnkey website?
                        Then contact me
                    </p>
                    <button className={style.btnDonwload}>DOWNLOAD CV</button>
                    <a href="https://avatars.githubusercontent.com/u/9919?s=280&v=4" download='CV' target="_blank">2222</a>
                </div>
                <div className={style.photo}><img src={myPhoto} /></div>
            </div>
        </div>
    );
}

export default Main;
