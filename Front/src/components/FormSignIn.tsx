import axios from "axios";
import { useState } from "react";

const FormSignIn = () => {
  const [emailForm, setEmailForm] = useState<string>("");
  const [passwordForm, setPasswordForm] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  type FormObject = {
    email: string;
    password: string;
  };

  const formData: FormObject = {
    email: emailForm,
    password: passwordForm,
  };

  function hangleSubmit(
    data: FormObject,
    e: React.FormEvent<HTMLFormElement>
  ): void {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((success) => {
        if (rememberMe) {
          localStorage.setItem("token", success.data.body.token);
        } else {
          sessionStorage.setItem("token", success.data.body.token);
        }
        window.location.href = "profile";
      });
  }

  function hangleFormData(type: "email" | "password", value: string): void {
    if (type === "email") {
      setEmailForm(value);
    } else if (type === "password") {
      setPasswordForm(value);
    } else {
      console.log("type is not correct");
    }
  }

  return (
    <form onSubmit={(e) => hangleSubmit(formData, e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => hangleFormData("email", e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => hangleFormData("password", e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default FormSignIn;
