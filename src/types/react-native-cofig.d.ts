declare module 'react-native-config' {
  interface Config {
    API_URL: string;
    GOOGLE_API_KEY: string;
    // add more as needed
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
