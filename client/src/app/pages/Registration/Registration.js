import React, {useEffect, useRef, useState} from "react";
import {Link} from 'react-router-dom'
import IMask from 'imask';
import Captcha from "../../components/Captcha/Captcha";
import withFormPage from "../../hoc/withFormPage";
import './style.css'
import {useLazyQuery, useMutation} from "@apollo/client";
import {CHECK_CAPTCHA} from "../../query/checkCaptcha";
import {SIGN_UP} from "../../query/signUp";


function Registration() {
    const [checkCaptcha] = useLazyQuery(CHECK_CAPTCHA)
    const [singUp] = useMutation(SIGN_UP)

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [userAgreement, toggleUserAgreement] = useState(true)

    const [inputErrors, setInputErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const phoneInputRef = useRef()

    useEffect(() => {
        const mask = IMask(phoneInputRef.current, {
            mask: '+{7}(000)000-00-00'
        });
    })

    const createUser = () => {
        singUp({
            variables: {
                data: {email, phone, password}
            }
        }).then(data => console.log(data))
            .catch(e => setInputErrors(prevState => [e.message]))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setInputErrors(prevState => [])
        checkCaptcha({variables: {captcha}})
            .then(({data}) => {
                setLoading(false)
                data.checkCaptcha ? createUser() :
                    setInputErrors(prevState => ['Капча введена неправильно'])
            })
    }

    return (
        <form method='POST' className="form-page" onSubmit={submitHandler}>
            <h1 className="form-page__title title">Зарегистрироваться</h1>

            <input type="email" className="form-page__input tl-input"
                   placeholder='E-mail'
                   onChange={e => setEmail(e.target.value)}
                   name='email' required/>
            <input type="tel" className="form-page__input tl-input"
                   placeholder='Телефон'
                   onChange={e => setPhone(e.target.value)}
                   ref={phoneInputRef}
                   name='phone' required/>
            <input type="password" className="form-page__input tl-input"
                   placeholder='Пароль'
                   minLength="8"
                   onChange={e => setPassword(e.target.value)}
                   name='password' required/>

            <div className="form-page__checkbox-row">
                <input type="checkbox" className="form-page__checkbox" id='user-agreement'
                       checked={userAgreement}
                       onChange={() => {
                           toggleUserAgreement(prevState => !prevState)
                       }}
                       name='user-agreement'
                       required/>
                <label htmlFor="user-agreement" className="form-page__checkbox-label"/>
                <p className="form-page__checkbox-text">
                    Принимаю <a href="/docs/Terms-of-use.pdf" className="form-page__link">пользовательское
                    соглашение</a>
                </p>
            </div>
            <Captcha setCaptcha={setCaptcha}
                     inputError={!!inputErrors.includes('Капча введена неправильно')}/>
            <p className="form-page__text">У меня есть
                аккаунт <Link to="/login" className="form-page__enter-link">Войти</Link>
            </p>
            <p className='form-page__errors'>{inputErrors.map(inputError => inputError + '\n')}</p>
            <button disabled={!userAgreement || loading}
                    type='submit'
                    className="form-page__submit tl_btn">
                {loading ? 'Проверка данных...' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
            </button>
            <Link to='/' className="close-btn">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className='close-btn__line' x="6.875" y="6.09717" width="17.8777" height="1.80706"
                          transform="rotate(45 6.875 6.09717)" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth="0.2"/>
                    <rect className='close-btn__line' x="19.5164" y="7.37494" width="17.8777" height="1.80706"
                          transform="rotate(135 19.5164 7.37494)" fill="#D9D9D9" stroke="#D9D9D9"
                          strokeWidth="0.2"/>
                </svg>
            </Link>
        </form>
    )
}


export default withFormPage(Registration)