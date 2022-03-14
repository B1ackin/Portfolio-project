import style from "./Footer.module.css";
import React from "react";
import cv from '../common/cv/cv.pdf';


function Footer() {
    return (
        <div id={'contact'} className={style.footer}>
            <div className={style.footerContainer}>


           <div className={style.footerNav}>
               <span className={style.menuTitle}>Menu:</span>
               <a href="#">Home</a>
               <a href="#">Skill</a>
               <a href="#">About me</a>
               <a href="#">Portfolio</a>
           </div>
            <div className={style.footerContact}>
                <span className={style.menuTitle}>Contact:</span>
                <span>Telegram: <a href="https://t.me/leonid_kr">@leonid_kr</a></span>
                <span>Linkedin: <a href="https://www.linkedin.com/in/leonid-kruchenok-4868b591/"><u>view profile</u></a></span>
                <span>Email: xx13.02@gmail.com</span>
                <span>Call: <a href="tel:+375257519535">+375 (25) 751-95-35</a></span>
            </div>
            <div className={style.copyright}>
                <a className={style.btnDonwload} href={cv} download={'CV_Leonid_Kruchenok'} target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a>
                <span>Copyright © 2021, Leonid</span>
            </div>
            </div>
        </div>
    );
}

export default Footer;
