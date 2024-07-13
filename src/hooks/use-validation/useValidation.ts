import { useEffect, useState } from "react";
import { Validations } from "../../types";

const useValidation = (value: string, validations: Validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
  
    const [inputValid, setInputValid] = useState(false);
  
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "minLength": {
            // @ts-ignore
            validations[validation] && validations && value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          
          }
  
          case "isEmpty": {
            value ? setIsEmpty(false) : setIsEmpty(true);
            break;
          }
          case "maxLength": {
              // @ts-ignore
              validations[validation] && validations && value.length > validations[validation]
              ? setMaxLengthError(true)
              : setMaxLengthError(false);
            break;
          
          }
          case "isEmail": {
            const re =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            re.test(String(value).toLowerCase())
              ? setEmailError(false)
              : setEmailError(true);
            break;
          }
        }
      }
    }, [value]);
  
    useEffect(() => {
      if (isEmpty || maxLengthError || minLengthError || emailError) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    }, [isEmpty, maxLengthError, minLengthError, emailError])
    return { isEmpty, minLengthError, maxLengthError, emailError, inputValid };
}

export default useValidation;