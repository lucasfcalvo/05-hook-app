import { useState } from "react";

export const useForm = (initialForm={}) => {
  const [formState, setFormState] = useState(initialForm);

  //func que se encarga estar pendiente de cuando se mofifica el input
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onResetForm =()=>{
    setFormState(initialForm)
  }
  return {
    ...formState,
    formState,
    onInputChange, 
    onResetForm
    
  };
};

