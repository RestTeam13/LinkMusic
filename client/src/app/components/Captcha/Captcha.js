import React, {useEffect, useRef, useState} from "react";
import './style.css'
import {useCheckCaptcha, useGetCaptchaImage} from "../../hooks/captcha.hooks";


function Captcha(props) { //Todo Почистить логику
    const {setCaptchaVerified} = props

    const [captchaInput, setCaptchaInput] = useState('')
    const [errors, updateErrors] = useState([])
    const captchaImgBlockRef = useRef()
    const sizeOptions = useRef({variables: {width: 0, height: 0}})

    const {getCaptchaImg, captchaImg, getImgLoading, getImgError} = useGetCaptchaImage()
    const {checkCaptcha, isCaptchaVerified, checkCaptchaLoading, errorCaptchaLoading} = useCheckCaptcha()
    const hasErrors = errors.length > 0
    const timerRef = useRef({inputTimer: null})

    const reloadCaptcha = (e) => {
        e.preventDefault()
        setCaptchaVerified(false)
        updateErrors([])
        getCaptchaImg(sizeOptions.current)
    }

    useEffect(() => {
        setCaptchaVerified(false)
        sizeOptions.current = {
            variables: {
                width: Math.floor(captchaImgBlockRef.current.getBoundingClientRect().width),
                height: Math.floor(captchaImgBlockRef.current.getBoundingClientRect().height)
            }
        }
        getCaptchaImg(sizeOptions.current)
    }, [])// set first-render captchaImg

    useEffect(() => {
        if (getImgError) updateErrors([getImgError.message])
        if (errorCaptchaLoading) updateErrors([errorCaptchaLoading.message])
    }, [getImgError, errorCaptchaLoading])// add errors

    useEffect(() => {
        clearTimeout(timerRef.current.inputTimer);
        timerRef.current.inputTimer = setTimeout(() => {
            if (captchaInput !== '') checkCaptcha({variables: {captcha: captchaInput}})
        }, 1500)
    }, [captchaInput])

    useEffect(() => {
        setCaptchaVerified(false)
        updateErrors([])
        if (isCaptchaVerified) {
            setCaptchaVerified(true)
        } else {
            if (captchaInput !== '') updateErrors(['Капча введена неправильно'])
        }
    }, [isCaptchaVerified, checkCaptchaLoading])

    return (
        <div className="captcha">
            <label htmlFor=""
                   className={hasErrors ? 'captcha__label' + ' captcha__label_error' : 'captcha__label'}>
                {
                    hasErrors ? errors.map(error => error) :
                        checkCaptchaLoading ? 'Проверка...' :
                            isCaptchaVerified ? '' : 'Введите указанное слово'
                }
            </label>
            <div className="captcha__row">
                <input type="text" pattern='^[а-яА-ЯёЁ0-9]+$'
                       onChange={(e) => {setCaptchaInput(e.target.value.toLowerCase())}}
                       className={
                           hasErrors ? 'captcha__input' + ' captcha__input_err' :
                               isCaptchaVerified ? 'captcha__input' + ' captcha__input_done' : 'captcha__input'
                       }
                       required/>
                <button type='button'
                        className="captcha__img"
                        disabled={getImgLoading || checkCaptchaLoading}
                        onClick={reloadCaptcha}
                        ref={captchaImgBlockRef}>
                    {
                        getImgLoading ? <p>Загрузка изображения</p> : <img src={captchaImg} alt=""/>
                    }
                </button>
                <button type='button'
                        className={
                            getImgLoading || checkCaptchaLoading ? "captcha__refresh-btn loading" : "captcha__refresh-btn"
                        }
                        disabled={getImgLoading || checkCaptchaLoading}
                        onClick={reloadCaptcha}/>
            </div>
        </div>
    )
}


export default Captcha