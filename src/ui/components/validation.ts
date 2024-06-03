import * as Yup from "yup";

export const email = Yup.string().min(3).email().required("Enter your email");
export const newpassword = Yup.string()
  .min(5)
  .max(30)
  .required("Enter new password");
export const password = Yup.string()
  .min(5)
  .max(30)
  .required("Enter your password");

export const createRepeatPasswordSchema = (fieldNameToRepeat: string) => {
  return Yup.string()
    .required("Repeat your password without errors")
    .oneOf([Yup.ref(`${fieldNameToRepeat}`)], "Passwords must match");
};
