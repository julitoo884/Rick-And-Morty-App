import { ApolloClient , InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri : process.env.REACT_APP_RICK_AND_MORTY_API,
    cache : new InMemoryCache(),
    cors:{
        origin:'http://localhost:3000',
        credentials:true,
    },
})

export default client 