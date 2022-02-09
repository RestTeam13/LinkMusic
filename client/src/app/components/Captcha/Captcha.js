import React, {useEffect, useState} from "react";
import './style.css'
import {useQuery} from "@apollo/client";
import {GET_CAPTCHA} from "../../query/getCaptcha";

function Captcha() {
    const {data, loading, error, refetch} = useQuery(GET_CAPTCHA)
    const [img, setImg] = useState('')

    const reloadCaptcha = (e) => {
        e.preventDefault()
        refetch()
    }

    useEffect(() => {
        if (!loading) setImg(data.getCaptcha)
    }, [data])

    return (
        <div className="captcha">
            <label htmlFor="" className="captcha__label">Введите указанное слово</label>
            <div className="captcha__row">
                <input type="text" className="captcha__input"/>
                <div className="captcha__img" onClick={reloadCaptcha}>
                    <img src={img} alt=""/>
                </div>
                <div className="captcha__refresh-btn" onClick={reloadCaptcha}/>
            </div>
        </div>
    )
}


export default Captcha