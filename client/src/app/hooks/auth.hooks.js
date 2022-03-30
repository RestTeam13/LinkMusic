import {useState, useCallback, useEffect} from 'react'
import {useGetUserInfo} from "./user.hooks";

const storageName = 'lm-token'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const {getUserInfo, userInfo, userInfoLoading, userInfoError} = useGetUserInfo()


    const login = useCallback((token, userId) => {
        setToken(token)
        setUserId(userId)

        localStorage.setItem(storageName, JSON.stringify({token, userId}))
        getUserInfo()
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])


    return {login, logout, token, userId, userInfo, userInfoLoading, userInfoError}
}