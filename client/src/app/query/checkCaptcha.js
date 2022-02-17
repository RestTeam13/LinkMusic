import {gql} from '@apollo/client'


export const CHECK_CAPTCHA = gql`
    query($captcha: String!) {
        checkCaptcha(receivedCaptcha: $captcha)
    }
`