/* eslint-disable default-case */
import { useEffect, useState } from "react";

export const useValidations = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
  
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
            break;
          case 'isEmpty':
            value ? setEmpty(false) : setEmpty(true)
            break;
          case 'isEmail':
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
            break;
        }
      }
    }, [value])
  
    return {
      isEmpty,
      minLengthError,
      emailError
    }
  }
  
  export const UseInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidations(value, validations)
  
    const onChange = (e) => {
      setValue(e.target.value)
    }
  
    const onBlur = (e) => {
      setDirty(true)
    }
  
    return {
      value,
      onBlur,
      onChange,
      isDirty,
      ...valid
    }
  }