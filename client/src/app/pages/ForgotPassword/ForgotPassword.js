import React, {useState} from "react";
import Captcha from "../../components/Captcha/Captcha";
import withFormPage from "../../hoc/withFormPage";
import {Link} from "react-router-dom";
import {useLazyQuery} from "@apollo/client";
import {CHECK_CAPTCHA} from "../../query/checkCaptcha";


function ForgotPassword() { // Todo Объединить со страницей регистрацией
    const [checkCaptcha] = useLazyQuery(CHECK_CAPTCHA)
    const [email, setEmail] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [inputErrors, setInputErrors] = useState([])

    const [loading, setLoading] = useState(false)

    const resetPassword = () => {
        // singUp({
        //     variables: {
        //         data: {email, phone, password}
        //     }
        // }).then(data => console.log(data))
        //     .catch(e => console.log(e))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setInputErrors(prevState => [])
        checkCaptcha({variables: {captcha}})
            .then(({data}) => {
                setLoading(false)
                data.checkCaptcha ? resetPassword() :
                    setInputErrors(prevState => ['Капча введена неправильно'])
            })
    }

    return (
        <form method='POST' className="form-page" onSubmit={submitHandler}>
            <h1 className="form-page__title title">Восстановить пароль</h1>
            <input type="email" className="form-page__input tl-input"
                   name="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)} required/>
            <Captcha setCaptcha={setCaptcha}/>
            <p className="form-page__text">Нет аккаунта?
                <Link to="/registration" className="form-page__enter-link"> Зарегистрироваться</Link>
            </p>
            <p className='form-page__errors'>{inputErrors.map(inputError => inputError + '\n')}</p>
            <button type='submit'
                    className="form-page__submit tl_btn"
                    disabled={loading}>
                {loading ? 'Проверка данных...' : 'Продолжить'}</button>
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


export default withFormPage(ForgotPassword)