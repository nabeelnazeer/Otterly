import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/Login", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data === "exist")) {
            history("/profile",);
          } else if ((res.data === "notexist")) {
            alert("user have not sign up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="Login">
      <h1>Login</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />

      <Link to="/Signup">Signup Page</Link>
    </div>
  );
}
export default Login;
