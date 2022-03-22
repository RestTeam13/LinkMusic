import {gql} from '@apollo/client'


export const GET_USER_AVATAR = gql`
    query {
        authenticatedUser{
            avatar{
                publicUrl
            }
        }
    }
`

export const GET_USERPROFILE_INFO = gql`
    query {
        authenticatedUser{
            name,
            description,
            emailAddress,
            siteAddress,
            canBookPerformance
        }
    }
`