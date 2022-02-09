import {gql} from '@apollo/client'


export const AUTH = gql`
    mutation ($email: String, $password: String){
        authenticateUserWithPassword(email: $email, password: $password){
            token
        }
    }
`