import {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_CAPTCHA} from "../query/getCaptcha";


export default function useCaptchaImage() {
    const [img, setImg] = useState('')
    const [getCaptchaImg, {data, loading, error}] = useLazyQuery(GET_CAPTCHA)

    useEffect(() => {
        if (data) setImg(data.getCaptcha)
    }, [data])

    return [getCaptchaImg, img, loading, error]
}