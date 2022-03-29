import React, {useContext, useEffect, useRef, useState} from "react";
import {Link} from 'react-router-dom'
import IMask from 'imask';
import Captcha from "../../components/Captcha/Captcha";
import withFormPage from "../../hoc/withFormPage";
import './style.css'
import CloseButton from "../../components/CloseBtn/CloseBtn";
import {useInput} from "../../hooks/forms.hooks";
import {useRegistration} from "../../hooks/user.hooks";

function Registration(props) {
    const {isCaptchaVerified, setCaptchaVerified, loading, setLoading, inputErrors, setInputErrors, errors} = props
    const {singUp, registrationData, registrationLoading, registrationError} = useRegistration()

    const [userAgreement, toggleUserAgreement] = useState(true)
    const email = useInput('', "form-page__input tl-input", errors.emailError)
    const password = useInput('', "form-page__input tl-input", errors.passwordError)
    const phone = useInput('', "form-page__input tl-input", errors.phoneError)

    const phoneInputRef = useRef()
    useEffect(() => {
        IMask(phoneInputRef.current, {mask: '+{7}(000)000-00-00'});
    })

    const createUser = () => {
        setLoading(true)
        singUp({variables: {data: {email: email.value, phone: phone.value, password: password.value}}})
    }

    useEffect(() => {
        setLoading(false)
        if (registrationError) setInputErrors([registrationError.message]);
    }, [registrationLoading, registrationError])

    useEffect(() => {
        setLoading(false)
        if (registrationData) setTimeout(() => {
            document.location.href = '/login'
        }, 2000)
    }, [registrationData])

    const submitHandler = (e) => {
        e.preventDefault()
        setInputErrors([])
        isCaptchaVerified ? createUser() : setInputErrors(['Капча введена неправильно'])
    }

    return (
        <form method='POST' className="form-page" onSubmit={submitHandler}>
            <h1 className="form-page__title title">Зарегистрироваться</h1>

            <input type="email" className="form-page__input tl-input" placeholder='E-mail' name='email'
                   {...email}
                   required/>
            <input type="tel" className="form-page__input tl-input" placeholder='Телефон' name='phone'
                   ref={phoneInputRef}
                   {...phone}
                   required/>
            <input type="password" className="form-page__input tl-input" placeholder='Пароль' minLength="8"
                   name='password'
                   {...password}
                   required/>

            <div className="form-page__checkbox-row">
                <input type="checkbox" className="form-page__checkbox" id='user-agreement' checked={userAgreement}
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
            <Captcha setCaptchaVerified={setCaptchaVerified}/>
            <p className="form-page__text">У меня есть
                аккаунт <Link to="/login" className="form-page__enter-link">Войти</Link>
            </p>
            <p className='form-page__errors'>{inputErrors.map(inputError => inputError + '\n')}</p>
            <button disabled={!userAgreement || loading || registrationData} type='submit' className="form-page__submit tl_btn">
                {loading ? 'Проверка данных...' : registrationData ? 'Пользователь создан...' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
            </button>
            <CloseButton/>
        </form>
    )
}


export default withFormPage(Registration)