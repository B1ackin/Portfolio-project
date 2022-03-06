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
                    <p className={style.description}>FRONT-END DEVELOPER</p>
                    <p className={style.skills}>React, Redux, TypeScript, JavaScript</p>
                    {/*<button className={style.btnDonwload}>DOWNLOAD CV</button>*/}
                    <a className={style.btnDonwload} href="#" download='CV' target="_blank">DOWNLOAD CV</a>
                </div>
                <div className={style.photo}><img src={myPhoto} /></div>
            </div>
        </div>
    );
}

export default Main;
