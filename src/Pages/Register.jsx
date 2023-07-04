import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/apidomain';
import Axios from 'axios'
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        customer_name: yup.string().required("fullname is required"),
        email: yup.string().required("email is required"),
        password: yup.string().required("password is required").min(4, "password is too short"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
    const onSubmit = (data) => {
        
        Axios.post(`${apidomain}/auth/register`, data)

            .then((response) => {
                console.log(response);
                response.data.message && alert(response.data.message);
                console.log('success', response.data.message);
                navigate("/Login");
            })
            .catch((response) => {
                console.log(response)
                    

            });
    }
    return (
    <div className = 'mainform' >
        <form className = "form" onSubmit = { handleSubmit(onSubmit) } >
        {/* <fieldset className = '' > */}
        {/* <legend > Sign - Up </legend>  */}
        
        <input type = "text" {...register("customer_name") } placeholder = "fullName" required />
        <p> { errors.customer_name ?.message }</p> 
       
        <input type = "text" {...register("email") } placeholder = "email" />
        <p> { errors.email ?.message }</p>  
        
        <input type = "password" {...register("password") }
        placeholder = "Password"
        required />
        <p> { errors.password ?.message }</p>  
   
        <input type = "password" {...register("confirmPassword") } placeholder = "ConfirmPassword"
        required />
        <p> { errors.confirmPassword ?.message } </p>  

        <button type="submit">Register</button>

       
        </form> 
        </div>
    );
};


export default Register;