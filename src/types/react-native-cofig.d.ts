declare module 'react-native-config' {
  interface Config {
    API_URL: string;
    GOOGLE_API_KEY: string;
    // add more as needed
  }
  module.exports = {
  assets: ['../assets/fonts'],  // Add custom assets like fonts

};
  const Config: Config;
  export default Config;
}
