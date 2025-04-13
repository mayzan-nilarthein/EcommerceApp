// Register
export interface RegisterInput {
  email: string;
  name: string;
  password: string;
}

export interface RegisterResponse {
  register: {
    user: {
      id: number;
      email: string;
      name: string;
    };
    token: string;
  };
}
// SendOTP
export interface SendOTPInput {
  email: string;
}

export interface SendOTPResponse {
  sendOtp: {
    success: boolean;
    message: string;
  };
}

// Login
export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginUser {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  user: LoginUser;
}

// Verify OTP
export interface VerifyOTPInput {
  email: string;
  otp: string;
}

export interface VerifyOTPResponse {
  success: boolean;
  message: string;
}
