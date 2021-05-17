import React, { useState } from 'react';
import useToken from './useToken';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    // return fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    // body: JSON.stringify({
    //   "email": "eve.holt@reqres.in",
    //   "password": "cityslicka"
    // })
  })
    .then(data => data.json())
    .catch(err => alert(err))
}


// const Login = ({ setToken }) => {
const Login = (props) => {
  console.log(props)
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    if (token) {
      setToken(token);
      props.history.push("/dashboard");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required onChange={e => setUserName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>

        </div>
      </form>
    </>
  );
}

export default Login;
