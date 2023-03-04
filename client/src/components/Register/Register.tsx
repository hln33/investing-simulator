import React from "react";

// Components
import Card from "components/PrimeReact/Card/Card";
import Password from "components/PrimeReact/Password/Password";
import InputText from "components/PrimeReact/InputText/InputText";
import InputMask from "components/PrimeReact/InputMask/InputMask";
import Button from "components/PrimeReact/Button/Button";

// Styles
import './style.scss';

const Register = () => {
  return (
    <div className="register flex h-screen w-screen">
      <div className="flex flex-grow-1 card-container flex-wrap justify-content-center overflow-hidden">

        <div className="p-4 w-21rem h-8rem">
          <p className="font-semibold text-5xl text-white">
            Are you ready to dive into the world of investing?
          </p>

          <p className="font-medium text-3xl text-white">
            Our simulation will give you the chance to experience the ups and downs of the stock market without risks
          </p>
        </div>

        <Card className="flex p-4 register-card">

            <p className="font-medium text-xl text-center">
              Start with $10,000 in your simulated investment portfolio today
            </p>

            <label htmlFor="first-name">First Name</label>
            <InputText className="mb-2 mt-1 w-full" inputId="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <InputText className="mb-2 mt-1 w-full" inputId="last-name" />

            <label htmlFor="email">Email</label>
            <InputText className="mb-2 mt-1 w-full" id="email" />

            <label htmlFor="phone">Phone</label>
            <InputMask className="mb-2 mt-1 w-full" id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" />

            <label htmlFor="password">Password</label>
            <Password className="register-password mb-2 mt-1 w-full" inputId="password" />

            <label htmlFor="re-enter-password">Re-enter Password</label>
            <Password className="register-password mb-2 mt-1 w-full" inputId="re-enter-password" />

            <Button className="w-full mt-2 h-4rem" label="Register Now" />

        </Card>

      </div>
    </div>
  );
}

export default Register;