import React from "react";
import { Link } from "react-router-dom";

// Components
import Card from "components/PrimeReact/Card/Card";
import Password from "components/PrimeReact/Password/Password";
import InputText from "components/PrimeReact/InputText/InputText";
import Button from "components/PrimeReact/Button/Button";

// Styles
import './style.scss';

const Login = () => {
  return (
    <div className="login flex h-screen w-screen">
      <div className="flex flex-grow-1 card-container flex-wrap justify-content-center align-content-center">

        <Card className="flex p-4 login-card align-items-center">

          <p className="font-semibold text-3xl text-left m-0 pb-4">
            Sign In
          </p>

          <label htmlFor="email">Email</label>
          <InputText className="mb-2 mt-1 w-full" id="email" />

          <label htmlFor="password">Password</label>
          <Password className="password mb-2 mt-1 w-full" inputId="password" />

          <Button className="w-full mt-2 h-3rem" label="Login" />
          
          <p className="font-medium text-sm pt-2 text-center">
            <Link to="/register">Create an account</Link>
          </p>

        </Card>

      </div>
    </div>
  );
}

export default Login;