export interface Register {
  email: string;
  password: string;
  fullName: string;
  referralCode:string
}

export const emptyRegister = {
  email: "",
  password: "",
  fullName: "",
  referralCode:""
};
