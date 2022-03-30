import {gql} from '@apollo/client'

export const GET_USERPROFILE_INFO = gql`
    query {
        authenticatedUser{
            name,
            description,
            email,
            phone,
            emailAddress,
            siteAddress,
            socialLinks{
                link
            },
            releases{
                link
            },
            canBookPerformance,
            avatar{
                publicUrl
            },
            isPartner
        }
    }
`