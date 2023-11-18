"use client";
import "./loginRegisterContainer.scss";
import { useAuthenticationContext } from "@/context/AuthenticationContext";
import firebase from "firebase/app";
import {
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  increment,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

const LoginRegisterContainer = () => {

  const {
    changedUser,
    reader,
    errorMessage,
    readerData,
    register,
    handleRegFormChange,
    regForm,
    logining
  } = useAuthenticationContext();


  const router = useRouter();

  return (
    <form
      onSubmit={(e) => register(e, () => router.push("/"))}
      className="register-inputs"
    >
      <input
        name="email"
        required
        id="email"
        onChange={handleRegFormChange}
        type="email"
        className="input-area"
        value={regForm?.email}
        placeholder="E-posta Adresi"
      />
      <input
        onChange={handleRegFormChange}
        type="text"
        id="name"
        required
        name="name"
        className="input-area"
        value={regForm?.name}
        placeholder="İsim"
      />
      <input
        className="input-area"
        onChange={handleRegFormChange}
        type="password"
        id="password"
        required
        name="password"
        value={regForm?.password}
        placeholder="Şifre"
      />
      <input
        className="input-area"
        onChange={handleRegFormChange}
        type="password"
        required
        name="confirmPass"
        value={regForm?.confirmPass}
        placeholder="Şifreyi doğrulayın"
      />
      <button type="submit">Kayıt Ol</button>
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : null}
    </form>
  );
};

export default LoginRegisterContainer;
