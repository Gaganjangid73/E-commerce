import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Comman/form"; 
import { loginFormControls } from "../../config/index";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthLogin = () => {
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
        Login ✨
        </h1>
        <p className="mt-2">
         New user?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/signup"
          >
            Signup
          </Link>
        </p>
      </div>
      <Form
        formcontrols={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setformData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
