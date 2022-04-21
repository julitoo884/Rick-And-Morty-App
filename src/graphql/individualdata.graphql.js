import { gql } from '@apollo/client'

const GET_INDIVIDUAL_DATA = gql`
    query Character($id : ID!) {
        character(id : $id) {
            id,
            name,
            status,
            species,
            gender,
            image,
            location {
                name
            },
            origin {
                name
            }
        }
    }
`;

export default GET_INDIVIDUAL_DATA