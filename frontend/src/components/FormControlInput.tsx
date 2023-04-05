import { useField } from "formik";
import CustomInput from "./CustomInput";

interface FormControlInterface {
  fcstyle: string;
  lblstyle: string;
  lblname: string;
}

export interface InputInterface {
  name: string;
  type: string;
  placeholder: string;
  className: string;
}

interface Combined extends FormControlInterface, InputInterface {}

function FormControlInput({ fcstyle, lblstyle, lblname, className, ...props }: Combined) {
  console.log();
  const [fields, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <div className={`form-control ${fcstyle} `}>
      <label htmlFor="" className="label">
        <span className={`label-text ${lblstyle}`}>{lblname}</span>
        {error ? <span className="label-text-alt text-error">{meta.error}</span> : null}
      </label>
      <CustomInput
        className={error ? className.replace("input-ghost", "input-error") : className}
        {...props}
      />
    </div>
  );
}
export default FormControlInput;
