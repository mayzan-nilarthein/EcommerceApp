declare module 'react-native-config' {
  interface Config {
    API_URL: string;
    GOOGLE_API_KEY: string;
    // add more as needed
  }

  const Config: Config;
  export default Config;
}
