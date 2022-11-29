import './App.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


function App() {
  /* const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); */
/*   const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data); */

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

      <input 
        {...register("lastName", { required: true })} 
        aria-invalid={errors.lastName ? "true" : "false"} 
      />
      {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}

      <input type="number"
        {...register("phoneNumber", { required: true })} 
        aria-invalid={errors.phoneNumber ? "true" : "false"} 
      />
      {errors.phoneNumber?.type === 'required' && <p role="alert">Phone number is required</p>}

      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <input type="password"
        {...register("password", { required: true })} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password?.type === 'required' && <p role="alert">Password is required</p>}

      <input
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
      
      <input type="submit" />
    </form>
  );

 /*  return (
    <form>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        type="number"
        name="phoneNumber"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        min="8"
        required
      />
      <button type="submit">Submit</button>
    </form>
  ); */
}
export default App;




  
/*   function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.username.value)  
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" required />

      <label htmlFor="type">Account Type</label>
      <select id="type">
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter! <input type="checkbox" id="newsletter" />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default App; */
