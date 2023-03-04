import React from "react";

// Components
import Card from "components/PrimeReact/Card/Card";

// Styles
import './style.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="grid">
        <div className="col-4">
        </div>
        <div className="col-8">
          <Card className="register-card"/>
        </div>
      </div>
    </div>
  );
}

export default Register;