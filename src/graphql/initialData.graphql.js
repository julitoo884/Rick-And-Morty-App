import { gql } from '@apollo/client'

const GET_DATA = gql`
    query {
        characters(page : ${Math.floor(Math.random() * 41)+1} , filter: {}) {
            info {
                count
            }
            results {
                name , id , image, status, species
            }
        }
    }
`;

export default GET_DATA 