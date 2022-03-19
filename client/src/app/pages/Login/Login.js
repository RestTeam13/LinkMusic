import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom'
import Captcha from "../../components/Captcha/Captcha";
import withFormPage from "../../hoc/withFormPage";
import {useMutation, useLazyQuery} from "@apollo/client";
import {AUTH} from '../../query/auth'
import {CHECK_CAPTCHA} from "../../query/checkCaptcha";
import {AuthContext} from "../../context/AuthContext";


function Login() {//Todo useInput hook
    const [newToken] = useMutation(AUTH) // Todo Вынести как отдельный сервис
    const [checkCaptcha] = useLazyQuery(CHECK_CAPTCHA)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captcha, setCaptcha] = useState('')

    const [inputErrors, setInputErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const auth = useContext(AuthContext)

    const getToken = () => {
        setLoading(true)
        newToken({variables: {email, password}})
            .then(({data}) => {
                setLoading(false)
                auth.login(data.authenticateUserWithPassword.token, email)
                document.location.href = '/'
            })
            .catch(error => {
                setLoading(false)
                setInputErrors(prevState => [error.message]);
            })
    }

    const authUser = (e) => {
        e.preventDefault()
        setLoading(true)
        setInputErrors(prevState => [])
        checkCaptcha({variables: {captcha}})
            .then(({data}) => {
                setLoading(false)
                data.checkCaptcha ? getToken() :
                    setInputErrors(prevState => ['Капча введена неправильно'])
            })
    }

    const emailInputClasses = !!inputErrors.includes('Логин или пароль неверны') ||
    !!inputErrors.includes('Введен некорректный email') ?
        "form-page__input tl-input form-page__input_error" : "form-page__input tl-input"

    const passInputClasses = !!inputErrors.includes('Логин или пароль неверны') ||
    !!inputErrors.includes('Пароль должен содержать не менее 8 символов') ?
        "form-page__input tl-input form-page__input_error" : "form-page__input tl-input"

    return (
        <form method='POST' className="form-page" onSubmit={authUser}>
            <h1 className="form-page__title title">Войти</h1>
            <input type="email"
                   className={emailInputClasses}
                   name="email"
                   placeholder='E-mail'
                   onChange={e => setEmail(e.target.value)} required/>
            <input type="password"
                   className={passInputClasses}
                   minLength="8"
                   name="password"
                   placeholder='Пароль'
                   onChange={e => setPassword(e.target.value)} required/>
            <Link to='/forgot-password'
                  type='button'
                  className="forgot-password">Забыли пароль?</Link>
            <Captcha setCaptcha={setCaptcha}
                     inputError={!!inputErrors.includes('Капча введена неправильно')}/>
            <p className="form-page__text">Нет аккаунта?
                <Link to="/registration"
                      className="form-page__enter-link"> Зарегистрироваться</Link>
            </p>
            <p className='form-page__errors'>{inputErrors.map(inputError => inputError + '\n')}</p>
            <button type='submit'
                    disabled={loading}
                    className="form-page__submit tl_btn">
                {loading ? 'Проверка данных...' : 'Вход'}
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


export default withFormPage(Login)