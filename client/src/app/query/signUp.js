import {gql} from '@apollo/client'


export const SIGN_UP = gql`
    mutation($data: UserCreateInput) {
        createUser(data: $data) {
            email
        }
    }
`