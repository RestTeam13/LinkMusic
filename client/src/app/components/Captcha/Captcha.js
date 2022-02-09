import React, {useContext, useEffect, useState} from "react";
import './style.css'
import {useQuery} from "@apollo/client";
import {GET_CAPTCHA} from "../../query/getCaptcha";

function Captcha() {
    const {data, loading, error} = useQuery(GET_CAPTCHA) // Todo Вынести как отдельный сервис
    const [img, setImg] = useState('')

    useEffect(() => {
        if (!loading) setImg(data.getCaptcha)
    })

    return (
        <div className="captcha">
            <label htmlFor="" className="captcha__label">Введите указанное слово</label>
            <div className="captcha__row">
                <input type="text" className="captcha__input"/>
                <div className="captcha__img" onClick={()=>{console.log('reload captcha')}}>
                    <img src={img} alt=""/>
                </div>
                <div className="captcha__refresh-btn" onClick={()=>{console.log('reload captcha')}}/>
            </div>
        </div>
    )
}


export default Captcha