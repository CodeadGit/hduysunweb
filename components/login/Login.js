import React from "react";
import "./login.scss";
import darkLogo from "../navbarLogo/darkLogo.svg";
import Image from "next/image";
import { BsApple } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container-left">
          <div className="login-container-left-top">
            <Image src={darkLogo} alt="logo" />
            <h3>BİZE KATIL</h3>
          </div>
          <div className="login-container-left-bottom">
            <p>Özel Haberlerini Seç</p>
            <p>Kategorilere Böl</p>
            <p>Yorum Yap ve Paylaş</p>
          </div>
        </div>
        <div className="login-container-right">
          <div className="login-container-right-inputs">
            <input type="email" placeholder="E-posta Adresi" />
            <input type="text" placeholder="İsim" />
            <input type="password" placeholder="Şifre" />
            <button type="submit">DEVAM ET</button>
          </div>
          <div className="login-container-right-auth">
            <h6>Ya da şununla giriş yap</h6>
            <div className="login-container-right-auth-icons">
              <span className="icon-circle">
                <BsApple />
              </span>
              <span className="icon-circle">
                <FaGooglePlusG />
              </span>
            </div>
            <h6 className="account">Zaten hesabın var mı?</h6>
            <Link href="/">Giriş yap</Link>
          </div>
          <p className="policy">
            Devam ederek şunu kabul ediyorsun: Kullanım Koşulları ve Gizlilik
            Politikası
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
