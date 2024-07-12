import { useState } from "react";
import useValidation from "../use-validation/useValidation";
import { Validations } from "../../types";

const useInput = (initialValue: string, validations: Validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
  
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsDirty(true);
    };
  
    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid,
    };
  };
  export default useInput;