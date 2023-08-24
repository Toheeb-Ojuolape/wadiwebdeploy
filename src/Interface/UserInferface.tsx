export interface User {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName?: string;
    photoURL?: string;
    phoneNumber?: string;
    firstName:string,
    lastName:string,
    notifications:Array<{message: string; title:string;timestamp:string }>,
    providerData: {
      providerId: string;
      uid: string;
      displayName?: string;
      photoURL?: string;
      email?: string;
      phoneNumber?: string;
    }[];
    refreshToken: string;
    metadata: {
      lastSignInTime: string;
      creationTime: string;
    };
  }
  
  export const emptyLogin = {
    email: "",
    password: "",
  };
  

 export interface MyUser {
    user:{
      value:User
    },
    loading: Boolean
  }