import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import Card from "components/PrimeReact/Card/Card";
import Password from "components/PrimeReact/Password/Password";
import InputText from "components/PrimeReact/InputText/InputText";
import Button from "components/PrimeReact/Button/Button";

// api's
import { loginUser } from "api/Profile/User";

// Styles
import './style.scss';

const Login = () => {
  /** useState **/
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const navigate = useNavigate();

  const login = async () => {
    const isUserValid: boolean = await loginUser(email, password); 
    if (!isUserValid) {
      setPassword('');
      setIsInvalid(true);
    } else {
      navigate('/dashboard');
    }

  };

  const onPasswordChange = (value: string) => {
    setIsInvalid(false);
    setPassword(value);
  };

  return (
    <div className="login flex h-screen w-screen">
      <div className="flex flex-grow-1 card-container flex-wrap justify-content-center align-content-center">

        <Card className="flex p-4 login-card align-items-center">
          <p className="font-semibold text-3xl text-left m-0 pb-4">
            Sign In
          </p>

          <label htmlFor="email">Email</label>
          <InputText 
            className="mb-2 mt-1 w-full" 
            id="email" 
            value={email} 
            onChange={(e: any) => setEmail(e.target.value)} 
          />

          <label htmlFor="password">Password</label>
          <Password 
            className={`password mt-1 w-full mb-0 pb-0 ${isInvalid && 'p-invalid'}`} 
            feedback={false} 
            value={password} 
            onChange={(e: any) => onPasswordChange(e.target.value)} 
          />
          {
            isInvalid
              ? (<small className="mb-2 text-red-500" id="password-invalid">
                Login is invalid. Please try again.
                </small>
              )
              : <></>
          }

          <Button className="w-full mt-2 h-3rem" label="Login" onClick={login} />

          <p className="font-medium text-sm pt-2 text-center">
            <Link to="/register">Create an account</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Login;