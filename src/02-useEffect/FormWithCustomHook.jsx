import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange,onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });
  // const {username, email, password}= formState

  return (
    < >
      <h2>Formulario con CustomHook</h2>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "duck2" && <Message />}
      <input
        type="text"
        className="form-control"
        placeholder="email@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {/* {(email === 'lduck2@example.com') &&  <Message/>} */}

      <input
        type="password"
        className="form-control"
        placeholder="*******"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn mt-7 " style={{ backgroundColor: "red" }}
      onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
