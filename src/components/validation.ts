import * as Yup from "yup";

// const regx = {
//   // name: /^[а-яА-Яa-zA-Z]{2,20}$/,
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
// };

const email = Yup.string().email().required("Enter your email");
const newpassword = Yup.string().min(5).max(30).required("Enter your password");
const password = Yup.string().min(5).max(30).required("Enter your password");

const repeatPassword = Yup.string()
  .required("Repeat your password without errors")
  .oneOf([Yup.ref("newpassword")], "Passwords must match");

const name = Yup.string().min(2).max(40);

export const schemas = {
  signUp: Yup.object().shape({
    password,
    repeatPassword,
    email,
  }),
  signIn: Yup.object().shape({
    password,
    email,
  }),
  updateUserInfo: Yup.object().shape({
    name,
    email,
  }),
  updatePassword: Yup.object().shape({
    password,
    newpassword,
    repeatPassword,
  }),
};
