import React, {useState} from "react";
import Captcha from "../../components/Captcha/Captcha";
import withFormPage from "../../hoc/withFormPage";
import {Link} from "react-router-dom";
import CloseButton from "../../components/CloseBtn/CloseBtn";
import {useInput} from "../../hooks/forms.hooks";


function ForgotPassword(props) { // Todo Объединить со страницей регистрацией
    const {isCaptchaVerified, setCaptchaVerified, loading, setLoading, inputErrors, setInputErrors, errors} = props
    const email = useInput('', "form-page__input tl-input", errors.emailError)

    const resetPassword = () => {
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setInputErrors([])
        isCaptchaVerified ? resetPassword() : setInputErrors(['Капча введена неправильно'])
    }

    return (
        <form method='POST' className="form-page" onSubmit={submitHandler}>
            <h1 className="form-page__title title">Восстановить пароль</h1>
            <input type="email" name="email" placeholder='E-mail'
                   {...email}
                   required/>
            <Captcha setCaptchaVerified={setCaptchaVerified}/>
            <p className="form-page__text">Нет аккаунта?
                <Link to="/registration" className="form-page__enter-link"> Зарегистрироваться</Link>
            </p>

            <p className='form-page__errors'>{inputErrors.map(inputError => inputError + '\n')}</p>
            <button type='submit' className="form-page__submit tl_btn" disabled={loading}>
                {loading ? 'Проверка данных...' : 'Продолжить'}</button>
            <CloseButton/>
        </form>
    )
}


export default withFormPage(ForgotPassword)