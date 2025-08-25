import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Comman/form"; // Corrected import: should be capitalized for a component
import { registerFormControls } from "../../config/index"; // Make sure the path is correct

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthSignup = () => {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(e) {
    e.preventDefault();
    // Add your signup logic here
    // For now, just log the form data
    console.log(formData);
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">
          Already Have an Account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <Form
        formcontrols={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setformData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthSignup;
