import {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_CAPTCHA} from "../query/getCaptcha";
import {CHECK_CAPTCHA} from "../query/checkCaptcha";


function useGetCaptchaImage() {
    const [captchaImg, setCaptchaImg] = useState('')
    const [getCaptchaImg, {data, loading:getImgLoading, error:getImgError}] = useLazyQuery(GET_CAPTCHA)

    useEffect(() => {
        if (data) setCaptchaImg(data.getCaptcha)
    }, [data])

    return {getCaptchaImg, captchaImg, getImgLoading, getImgError}
}

function useCheckCaptcha() {
    const [isCaptchaVerified, setCaptchaVerified] = useState(false)
    const [checkCaptcha, {data, loading:checkCaptchaLoading, error:errorCaptchaLoading}] = useLazyQuery(CHECK_CAPTCHA)

    useEffect(() => {
        if (data) setCaptchaVerified(data.checkCaptcha)
    }, [data])

    return {checkCaptcha, isCaptchaVerified, checkCaptchaLoading, errorCaptchaLoading}
}


export {useGetCaptchaImage, useCheckCaptcha}