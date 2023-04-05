import * as yup from "yup";
import { email_regex } from "../utils/variables";

export const loginSchema = yup.object().shape({
  email: yup.string().matches(email_regex, "Please provide a valid email.").required("*"),
  password: yup.string().required("*"),
});
