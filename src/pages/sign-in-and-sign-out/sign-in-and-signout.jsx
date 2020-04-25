import React from "react";
import SignIn from "../../components/SignIn/signin";
import SignUp from "../../components/signup/signup";
import "./sign-in-and-signout.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
