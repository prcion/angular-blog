export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FireBaseAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Post {
  id?: number;
  title: string;
  text: string;
  author: string;
  date?: Date;
}
