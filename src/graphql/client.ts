import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Config from 'react-native-config';
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://funny-gobbler-49.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret':
        'e4EozLsRfVOzALojyeJDReFqmVTHDurlZHtdlenRTMj8h2ZacCabjfq6SuAAGk56',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
