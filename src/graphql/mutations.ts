import { gql } from '@apollo/client';
export const REGISTER = gql`
  mutation Register($email: String!, $name: String!, $password: String!) {
    register(email: $email, name: $name, password: $password) {
      user {
        email
        id
        name
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        id
        name
      }
    }
  }
`;

export const SEND_OTP = gql`
  mutation SendOTP($email: String!) {
    sendOtp(email: $email) {
      message
      success
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation VerifyOTP($email: String!, $otp: String!) {
    verifyOtp(email: $email, otp: $otp) {
      message
      success
    }
  }
`;
