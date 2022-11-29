import './App.css';
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
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
  );
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
