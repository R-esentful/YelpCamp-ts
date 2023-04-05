import { useField } from "formik";
import { InputInterface } from "./FormControlInput";

function CustomInput({ className, ...props }: InputInterface) {
  const [fields] = useField(props);
  return <input className={`${className}`} {...fields} {...props} />;
}
export default CustomInput;
