declare module 'react-native-config' {
  interface Config {
    GRAPHQL_ENDPOINT: string | UriFunction | undefined;
    HASURA_SECRET: string;
  }
  module.exports = {
    assets: ['../assets/fonts'],
  };
  const Config: Config;
  export default Config;
}
declare module '*.png' {
  const value: any;
  export = value;
}
