import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log("in login page from login.js")
  console.log('email and password', email, password)

  const submit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }
    axios.post("http://localhost:8000/user/login2", user).then(res => {
      console.log(res.data)
    }).catch(res => {
      console.error("error in token fetch: ", res.message)
    })
  }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input className="form-control mt-1"
              placeholder="Enter Email"
              name='email'
              type='email' value={email}
              required
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input name='password'
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit"
              className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
};
export default App;

