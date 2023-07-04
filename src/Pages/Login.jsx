import React, { useState } from 'react';
import  Axios  from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './Login.css';
import { useForm } from 'react-hook-form';
import { apidomain } from '../utils/apidomain';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const onSubmit = (data) => {
    

    Axios.post(`${apidomain}/Auth/login`, data)
      .then(({ data }) => {
        if (data.token) {
          navigate("/Home")
        }
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  return (
    <div className="login">
      <form className="sign" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input type="text" {...register("username")} placeholder="Enter your Name" />
        {errors.username && <p>{errors.username.message}</p>}

        <input type="text" {...register("email")} placeholder="Enter your email" />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="text" {...register("password")} placeholder="Enter password" />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Enter</button>
        <p>Don't have an account?<span>sign up.</span> </p>
      </form>
      {loginSuccess && <p>Login successful!</p>}
    </div>
  );
}
