import React, {useEffect, useRef} from "react";
import './style.css'
import useCaptchaImage from "../../hooks/captcha.hooks";


function Captcha(props) {
    const {setCaptcha, inputError} = props
    const captchaImgBlock = useRef()
    const [getCaptchaImg, img, loading, error] = useCaptchaImage()
    const options = useRef({
        variables: {
            width: 0,
            height: 0
        }
    })

    let inputClass = inputError ? 'captcha__input' + ' captcha__input_err' : 'captcha__input',
        labelClass = error ? 'captcha__label' + ' captcha__label_error' : 'captcha__label'

    const reloadCaptcha = (e) => {
        e.preventDefault()
        getCaptchaImg(options.current)
    }

    useEffect(() => {
        options.current = {
            variables: {
                width: Math.floor(captchaImgBlock.current.getBoundingClientRect().width),
                height: Math.floor(captchaImgBlock.current.getBoundingClientRect().height)
            }
        }
        getCaptchaImg(options.current)
    }, [])


    return (
        <div className="captcha">
            <label htmlFor=""
                   className={labelClass}>
                {error ? 'Ошибка при получении капчи' : 'Введите указанное слово'}
            </label>
            <div className="captcha__row">
                <input type="text" pattern='^[а-яА-ЯёЁ0-9]+$'
                       onChange={e => setCaptcha(e.target.value.toLowerCase())}
                       className={inputClass} required/>
                <button className="captcha__img" disabled={loading} onClick={reloadCaptcha} ref={captchaImgBlock}>
                    {
                        loading ? <p>Загрузка изображения</p> : <img src={img} alt=""/>
                    }
                </button>
                <button className="captcha__refresh-btn" disabled={loading} onClick={reloadCaptcha}/>
            </div>
        </div>
    )
}


export default Captcha