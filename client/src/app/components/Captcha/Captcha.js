import React from "react";
import './style.css'

function Captcha() {
    return (
        <div className="captcha">
            <label htmlFor="" className="captcha__label">Введите указанное слово</label>
            <div className="captcha__row">
                <input type="text" className="captcha__input"/>
                <div className="captcha__img">
                    <img src="images/block-form_img-check.png" alt=""/>
                </div>
                <div className="captcha__refresh-btn"/>
            </div>
        </div>
    )
}


export default Captcha