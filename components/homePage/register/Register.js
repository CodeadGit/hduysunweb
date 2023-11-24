"use client";
import React from "react";
import Image from "next/image";
import "./register.scss";
import mobile from "../assets/mobile.png";
import { useThemeContext } from "@/context/ThemeContext";
import pngandro from "../assets/pngandro.png";
import pngapple from "../assets/pngapple.png";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";
const Register = () => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const { images } = useFetchAssetsContext();

  return (
    <div className="register">
      <div className="register-form">
        <p className={modeStatus ? "dark" : ""}>
          Üyemiz olarak öncelikli haber bildirimlerine, haber takibi ve yorum
          yapabilirsiniz.
        </p>
        <input
          type="email"
          className="register-form-email"
          placeholder="E-mail"
        />
        <input
          type="password"
          className="register-form-password"
          placeholder="Şifre"
        />
        <div className="register-form-phones">
          <input
            type="text"
            className="first-phone"
            placeholder="Şifre Tekrar"
          />
          <input type="text" className="first-phone" placeholder="0 5xxxxxx" />
        </div>
        <button className={`btn ${modeStatus ? "dark" : ""}`} type="submit">
          KAYIT OL
        </button>
      </div>

      <div className="register-store">
        <div className="mobile">
          <Image src={mobile} alt="mobile" fill />
        </div>
        <div className="information">
          <p className={modeStatus ? "dark" : ""}>
            Size özel haber kategorilerini seçip, keyifli okumanızı sağlayacak
            üyelik alanımızda web ve mobil entegre kolaylığı ile haberi duyan
            ilk siz olun.
          </p>

          {/* <div className="apps">
          <a href="https://apps.apple.com/tr/app/">
            <Image src={appstore} alt="mobile" width={208} className="appStore"/>
            </a>

            <a href="https://play.google.com">
            <Image src={trgoogle} alt="mobile" width={206} className="googlePlay"/>
          </a>
          
          </div> */}
          <div className="apps">
            <a href="https://apps.apple.com/tr/app/">
              <img
                src={images[6]}
                alt="mobile"
               // style={{width:"208px"}}
                className="appStore"
              />
            </a>

            <a href="https://play.google.com">
              <img
                src={images[64]}
                alt="mobile"
               // style={{width:"206px"}}
                className="googlePlay"
              />
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Register;
