import React from "react";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";

// Components
import Card from "components/PrimeReact/Card/Card";
import Password from "components/PrimeReact/Password/Password";
import InputText from "components/PrimeReact/InputText/InputText";
import InputMask from "components/PrimeReact/InputMask/InputMask";
import Button from "components/PrimeReact/Button/Button";

// api's
import { registerUser } from "api/Profile/User";

// Styles
import './style.scss';

const Register = () => {

  /** Formik **/
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      reEnterPassword: '',
    },
    validate: (data) => {
      const errors = {} as any;
      const { firstName, lastName, email, phoneNumber, password, reEnterPassword } = data;

      if (!firstName) errors.firstName = 'Name - First name is required.';

      if (!lastName) errors.lastName = 'Last Name - Last name is required.';

      if (!email) errors.email = 'Email - Email is required.';

      if (!phoneNumber) errors.phoneNumber = 'Phone - Phone number is required.';

      if (!password) errors.password = 'Password - Valid password is required.';

      if (reEnterPassword !== password) errors.reEnterPassword = 'Password - Passwords must be the same.';

      return errors;
    },
    onSubmit: (data) => {
      const { firstName, lastName, email, phoneNumber, password } = data;

      /** @todo Do stuff with filled out form here */
      formik.resetForm();
      registerUser(firstName, lastName, password, email, phoneNumber);
    }
  });

  const isFormFieldInvalid = (name: string) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: string) => {
    return isFormFieldInvalid(name)
      ? <small className="p-error">{formik.errors[name]}</small>
      : <small className="p-error">&nbsp;</small>;
  };

  /** Components **/

  const textFillerSection = (
    <div className="hidden lg:block p-4 w-21rem h-8rem">
      <p className="font-semibold text-5xl text-white">
        Are you ready to dive into the world of investing?
      </p>

      <p className="font-medium text-3xl text-white">
        Our simulation will give you the chance to experience the ups and downs of the stock market without risks
      </p>
    </div>
  );

  const startText = (
    <p className="font-medium text-xl text-center">
      Start with <span className="font-bold">$10,000</span> in your simulated investment portfolio today
    </p>
  );

  const firstNameField = (
    <>
      <label htmlFor="first-name">First Name</label>
      <InputText
        className={`mt-1 w-full ${classNames({ 'p-invalid': isFormFieldInvalid('firstName') })}`}
        name="firstName"
        value={formik.values.firstName}
        onChange={(e: any) => formik.setFieldValue('firstName', e.target.value)}
      />
      {getFormErrorMessage('firstName')}
    </>
  );

  const lastNameField = (
    <>
      <label htmlFor="last-name">Last Name</label>
      <InputText
        className={`mt-1 w-full ${classNames({ 'p-invalid': isFormFieldInvalid('lastName') })}`}
        name="lastName"
        value={formik.values.lastName}
        onChange={(e: any) => formik.setFieldValue('lastName', e.target.value)}
      />
      {getFormErrorMessage('lastName')}
    </>
  );

  const emailField = (
    <>
      <label htmlFor="email">Email</label>
      <InputText
        className={`mt-1 w-full ${classNames({ 'p-invalid': isFormFieldInvalid('email') })}`}
        id="email"
        name="email"
        value={formik.values.email}
        onChange={(e: any) => formik.setFieldValue('email', e.target.value)}
      />
      {getFormErrorMessage('email')}
    </>
  );

  const phoneNumberField = (
    <>
      <label htmlFor="phone">Phone</label>
      <InputMask
        className={`mt-1 w-full ${classNames({ 'p-invalid': isFormFieldInvalid('phoneNumber') })}`}
        id="phone"
        name="phoneNumber"
        mask="(999) 999-9999"
        placeholder="(999) 999-9999"
        value={formik.values.phoneNumber}
        onChange={(e: any) => formik.setFieldValue('phoneNumber', e.target.value)}
      />
      {getFormErrorMessage('phoneNumber')}
    </>
  );

  const passwordField = (
    <>
      <label htmlFor="password">Password</label>
      <Password
        className={`register-password mt-1 w-full ${classNames({ 'p-invalid': isFormFieldInvalid('password') })}`}
        name="password"
        value={formik.values.password}
        onChange={(e: any) => formik.setFieldValue('password', e.target.value)}
      />
      {getFormErrorMessage('password')}

    </>
  );

  const reEnterPasswordField = (
    <>
      <label htmlFor="re-enter-password">Re-enter Password</label>
      <Password
        className={`register-password mt-1 w-full ${classNames({ 'p-invalid': isFormFieldInvalid('reEnterpassword') })}`}
        name="reEnterPassword"
        value={formik.values.reEnterPassword}
        onChange={(e: any) => formik.setFieldValue('reEnterPassword', e.target.value)}
      />
      {getFormErrorMessage('reEnterPassword')}
    </>
  );

  return (
    <div className="register flex h-screen w-screen">
      <div className="flex flex-grow-1 card-container flex-wrap justify-content-center align-content-center">

        {textFillerSection}

        <Card className="flex p-4 register-card align-items-center">

          {startText}

          <form onSubmit={formik.handleSubmit}>
            {firstNameField}

            {lastNameField}

            {emailField}

            {phoneNumberField}

            {passwordField}

            {reEnterPasswordField}

            <Button className="w-full mt-2 h-4rem" type="submit" label="Register Now" />
          </form>

        </Card>

      </div>
    </div>
  );
}

export default Register;