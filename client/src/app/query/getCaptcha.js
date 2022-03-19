import {gql} from '@apollo/client'


export const GET_CAPTCHA = gql`
    query ($width: Int!, $height: Int!){
        getCaptcha(width: $width,height: $height)
    }
`