import {gql} from '@apollo/client'

export const UPDATE_USERPROFILE_INFO = gql`
    mutation($id: ID!, $data: UserUpdateInput) {
        updateUser(id: $id, data: $data){
            name
        }
    }
`