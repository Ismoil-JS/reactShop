import React from 'react'
import c from "./Login.module.scss";
import { useState } from 'react';
import axios from 'axios';
import {  useTranslation } from 'react-i18next';


const Login = () => {
  const {t} = useTranslation();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

function loginUser(e){
  e.preventDefault();
  axios.post("https://api.escuelajs.co/api/v1/auth/login", {
    email: userEmail,
    password:userPassword
  })
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
}

  return (
    <div>
      <form onSubmit={loginUser} className={c.login__form}>
        <input required type="email"  placeholder={t("email")} onChange={(e) => setUserEmail(e.target.value)}/>
        <input required type="password"  placeholder={t("password")} onChange={(e) => setUserPassword(e.target.value)}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login