import * as yup from "yup";
import { name_regex, email_regex } from "../utils/variables";
export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(name_regex, "Numbers & Special Characters are not allowed.")
    .required("*"),
  email: yup.string().matches(email_regex, "Must be a valid email address").required("*"),
  password: yup.string().min(8, "Minimum of 8 characters").required("*"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password do not match")
    .required("*"),
  location: yup.string().required("*"),
});
