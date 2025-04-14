declare module 'react-native-config' {
  interface Env {
    GRAPHQL_ENDPOINT: string;
    HASURA_SECRET: string;
    // Add more env variables as needed
  }

  const Config: Env;

  export default Config;
}
