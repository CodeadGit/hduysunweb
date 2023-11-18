"use client";
import { useState } from "react";
import "./login.scss";
import darkLogo from "../navbarLogo/darkLogo.svg";
import Image from "next/image";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import LoginRegisterContainer from "./LoginRegisterContainer";
import LoginContainer from "./LoginContainer";
import { useAuthenticationContext } from "@/context/AuthenticationContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loginClicked, setLoginClicked] = useState(true);

  const loginBtnClickHandler = () => {
    setLoginClicked(true);
  };

  const registerBtnClickHandler = () => {
    setLoginClicked(false);
  };

  const router = useRouter();

  var go = () => router.push("/");

  const { googlelogin, facebooklogin,submitReset } = useAuthenticationContext();

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container-left">
          <div className="login-container-left-top">
            <Image src={darkLogo} alt="logo" />
            <h3 className="h3-btn" onClick={registerBtnClickHandler}>
              BİZE KATIL
            </h3>
          </div>
          <div className="login-container-left-bottom">
            <p>Özel Haberlerini Seç</p>
            <p>Kategorilere Böl</p>
            <p>Yorum Yap ve Paylaş</p>
          </div>
        </div>
        <div className="login-container-right">
          {loginClicked === true ? (
            <LoginContainer />
          ) : (
            <LoginRegisterContainer />
          )}
          <div className="login-container-right-auth">
            <>
              <span onClick={submitReset} className="forget">Şifremi unuttum</span>
            </>
            {loginClicked === true ? (
              <h6>Ya da şununla giriş yap</h6>
            ) : (
              <h6>Ya da şununla kayıt ol</h6>
            )}
            <div className="login-container-right-auth-icons">
              {/* <span className="icon-circle" onClick={applelogin}>
                <BsApple />
              </span> */}
              <span className="icon-circle" onClick={(e)=>googlelogin(e,go)} >
                <FaGooglePlusG />
              </span>
              <span className="icon-circle" onClick={(e)=>facebooklogin(e,go)} >
                <FaFacebookF />
              </span>
            </div>
            {loginClicked === false ? (
              <>
                <h6 className="account">Zaten hesabın var mı?</h6>
                <span className="span-btn" onClick={loginBtnClickHandler}>
                  Giriş yap
                </span>
              </>
            ) : (
              <>
                <h6 className="account">Hesabınız yok mu?</h6>
                <span className="span-btn" onClick={registerBtnClickHandler}>
                  Kayıt ol
                </span>
              </>
            )}
          </div>
          <p className="policy">
            Devam ederek şunu kabul ediyorsun:{" "}
            <Link href="/kullanim-sartnamesi">Kullanım Koşulları</Link> ve
            <Link href="/gizlilik-politikasi"> Gizlilik Politikası</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
