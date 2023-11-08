import React from "react";
import "./login.css";

function Login() {
  return (
    <section className="hh">
      <div className="login_box">
        <form>
          <h2>Login</h2>
          <div className="input_box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="input_box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember_forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#"> Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register_link">
            <p>
              Don't have an account?
              <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
