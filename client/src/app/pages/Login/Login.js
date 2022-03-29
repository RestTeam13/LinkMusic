import React, {useEffect} from "react";
import {Link} from 'react-router-dom'
import Captcha from "../../components/Captcha/Captcha";
import withFormPage from "../../hoc/withFormPage";
import {useInput} from "../../hooks/forms.hooks";
import CloseButton from "../../components/CloseBtn/CloseBtn";
import {useLogin} from "../../hooks/user.hooks";


function Login(props) {
    const {isCaptchaVerified, setCaptchaVerified, loading, setLoading, inputErrors, setInputErrors, errors} = props
    const {getToken, data, tokenLoading, tokenError} = useLogin()

    const email = useInput('', "form-page__input tl-input", errors.emailError)
    const password = useInput('', "form-page__input tl-input", errors.passwordError)

    const login = () => {
        setLoading(true)
        getToken({variables: {email: email.value, password: password.value}})
    }

    useEffect(() => {
        setLoading(false)
        if (tokenError) setInputErrors([tokenError.message]);
    }, [tokenLoading, tokenError])

    useEffect(() => {
        if (data) document.location.href = '/'
    }, [data])

    const submitHandler = (e) => { // Todo Вынести со всех страниц
        e.preventDefault()
        setInputErrors([])
        isCaptchaVerified ? login() : setInputErrors(['Капча введена неправильно'])
    }

    return (
        <form method='POST' className="form-page" onSubmit={submitHandler}>
            <h1 className="form-page__title title">Войти</h1>
            <input type="email" name="email" placeholder='E-mail'
                   {...email}
                   required
            />
            <input type="password" minLength="8" name="password" placeholder='Пароль'
                   {...password}
                   required/>
            <Link to='/forgot-password' type='button' className="forgot-password">Забыли пароль?</Link>
            <Captcha setCaptchaVerified={setCaptchaVerified}/>
            <p className="form-page__text">Нет аккаунта?
                <Link to="/registration" className="form-page__enter-link"> Зарегистрироваться</Link>
            </p>

            <p className='form-page__errors'>{inputErrors.map(inputError => inputError + '\n')}</p>
            <button type='submit' disabled={loading} className="form-page__submit tl_btn">
                {loading ? 'Проверка данных...' : 'Вход'}
            </button>
            <CloseButton/>
        </form>
    )
}


export default withFormPage(Login)