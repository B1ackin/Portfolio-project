import style from ".//Footer.module.css";
import React from "react";


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>


           <div className={style.footerNav}>
               <a href="#">Home</a>
               <a href="#">Skill</a>
               <a href="#">About me</a>
               <a href="#">Portfolio</a>
           </div>
            <div className={style.footerContact}>
                <span>Contact:</span>
                <span>Email: xx13.02@gmail.com</span>
                <span>Linkedin: 1111</span>
                <span>Call: +375 25 751 95 35</span>
            </div>
            <div className={style.copyright}>
                <button className={style.btnDonwload}>DOWNLOAD CV</button>
                <span>Copyright © 2021, Leonid</span>
            </div>
            </div>
        </div>
    );
}

export default Footer;
