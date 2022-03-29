import {useContext, useEffect, useState} from "react";
import {useLazyQuery, useMutation} from "@apollo/client";
import {GET_USER_AVATAR} from "../query/getUserInfo";
import avatarDummy from '../components/Header/images/avatar.png'
import {AUTH} from "../query/auth";
import {SIGN_UP} from "../query/signUp";
import {AuthContext} from "../context/AuthContext";

function useAvatar() {
    const [avatar, setAvatar] = useState(avatarDummy)
    const [getUserAvatar, {data, loading, error}] = useLazyQuery(GET_USER_AVATAR)

    useEffect(() => {
        if (data && data.authenticatedUser.avatar) setAvatar(data.authenticatedUser.avatar.publicUrl);
    }, [data])

    return {getUserAvatar, avatar, loading, error}
}

const useLogin = () => {
    const [getToken, {data, loading: tokenLoading, error: tokenError}] = useMutation(AUTH)
    const auth = useContext(AuthContext)

    useEffect(() => {
        if (data) auth.login(data.authenticateUserWithPassword.token)
    }, [data])

    return {getToken, data, tokenLoading, tokenError}
}

function useRegistration() {
    const [singUp, {data: registrationData, loading: registrationLoading, error: registrationError}] = useMutation(SIGN_UP)

    useEffect(() => {
        if (registrationData) console.log('User create')
    }, [registrationData])

    return {singUp, registrationData, registrationLoading, registrationError}
}


export {useAvatar, useLogin, useRegistration}