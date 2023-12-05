import React, { useEffect, useState } from "react";
import {Message} from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Luck",
    email: "lf@example.com",
  });
  const { username, email } = formState;
  //func que se encarga estar pendiente de cuando se mofifica el input 
  const onInputChange = ({target})=>{
    const {name, value}= target
    setFormState({
        ...formState,
        [name]: value
    })

  }
  useEffect(() => {
    // console.log("useEffect Disparado primera vez")
  }, [])

//useEffect Disparado formState change
  useEffect(() => {
    // console.log("useEffect Disparado formState change")
  }, [formState])
  
  //useEffect Disparado email change
  useEffect(() => {
    // console.log("useEffect Disparado email change")
  }, [email])
  

  return (
    <>
      <h2>Formulario Simple</h2>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
     {(username === 'Luck2') &&  <Message/>}
      <input
        type="text"
        className="form-control"
        placeholder="email@example.com"
        name="email"
        value={email}
        onChange={onInputChange}

      />
     {/* {(email === 'lf2@example.com') &&  <Message/>} */}

    </>
  );
};
