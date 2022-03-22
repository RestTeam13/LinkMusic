import {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_USER_AVATAR} from "../query/getUserInfo";
import avatarDummy from '../components/Header/images/avatar.png'

export default function useAvatar() {
    const [avatar, setAvatar] = useState(avatarDummy)
    const [getUserAvatar, {data, loading, error}] = useLazyQuery(GET_USER_AVATAR)

    useEffect(() => {
        if (data) setAvatar(data.authenticatedUser.avatar.publicUrl);
    }, [data])

    return [getUserAvatar, avatar, loading, error]
}