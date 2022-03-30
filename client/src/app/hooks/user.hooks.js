import {useContext, useEffect, useState} from "react";
import {useLazyQuery, useMutation} from "@apollo/client";
import {GET_USERPROFILE_INFO} from "../query/getUserInfo";
import {AUTH} from "../query/auth";
import {SIGN_UP} from "../query/signUp";
import {AuthContext} from "../context/AuthContext";

const useLogin = () => {
    const [getToken, {data, loading: tokenLoading, error: tokenError}] = useMutation(AUTH)
    const {login} = useContext(AuthContext)

    useEffect(() => {
        if (data) login(data.authenticateUserWithPassword.token)
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


function useGetUserInfo() {
    const [userInfo, setUserInfo] = useState({})
    const [getUserInfo, {data, loading: userInfoLoading, error: userInfoError}] = useLazyQuery(GET_USERPROFILE_INFO)
    const {isAuthenticated} = useContext(AuthContext)

    useEffect(() => {
        if (data) setUserInfo(data.authenticatedUser)
    }, [data])

    useEffect(() => {
        if(isAuthenticated) getUserInfo()
    },[isAuthenticated])

    return {getUserInfo, userInfo, userInfoLoading, userInfoError}
}


export {useLogin, useRegistration, useGetUserInfo}