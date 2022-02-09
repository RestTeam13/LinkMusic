import {gql} from '@apollo/client'


export const GET_CAPTCHA = gql`
    query {
        getCaptcha
    }
`