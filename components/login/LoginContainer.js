"use client";
import { useAuthenticationContext } from "@/context/AuthenticationContext";
import "./loginContainer.scss";
import { useRouter } from "next/navigation";
// import { CircleProgress } from "@mui/material";
const LoginContainer = () => {
  const {
    errorMessage,
    logining,
    login,
    reader,
    loginForm,
    handleLoginFormChange,
  } = useAuthenticationContext();

  console.log("loginform", loginForm);

  const router = useRouter();

  console.log(reader);

  return (
    <form
      className="login-inputs"
      onSubmit={(e) => login(e, () => router.push("/"))}
    >
        <input
          name="email"
          onChange={handleLoginFormChange}
          type="email"
          className="input-area"
          required
          value={loginForm?.email}
          placeholder="E-posta Adresi"
        />
        <input
          className="input-area"
          onChange={handleLoginFormChange}
          type="password"
          required
          name="password"
          value={loginForm?.password}
          placeholder="Şifre"
        />
        <button className="submit-btn" type="submit">
          Giriş yap
        </button>
        {errorMessage ? (
          <div className="error-message">{errorMessage}</div>
        ) : null}
    </form>
  );
};

export default LoginContainer;
