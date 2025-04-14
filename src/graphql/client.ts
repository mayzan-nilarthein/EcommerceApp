import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Config from 'react-native-config';
const client = new ApolloClient({
  link: new HttpLink({
    uri: Config.GRAPHQL_ENDPOINT,
    headers: {
      'x-hasura-admin-secret': Config.HASURA_SECRET,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
