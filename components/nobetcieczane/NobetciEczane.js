"use client";
import React, { useEffect, useState } from "react";
import "./nobetci.scss";
import axios from "axios";
import { cities, regions } from "../../context/districts";
import eczane from "../homePage/assets/eczane.jpg";
import home from "../homePage/assets/adres.png";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import NobetciEczaneSkeleton from "./NobetciEczaneSkeleton";

const APIKEY = "apikey 0GQBAjriPIwWIqjcxU7MhJ:5p1vdCUZGkH9xE3UI5ihuh";

const NobetciEczaneComp = () => {

  const [info, setInfo] = useState({
    city: "Bursa",
    region: "",
  });

  const [regionList, setRegionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eczaneList, setEczaneList] = useState([]);

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const now = new Date().toLocaleString("tr-TR", options);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "city") {
      setInfo((pre) => ({ ...pre, [name]: value, region: "" }));
      setRegionList(regions[value]);
    } else {
      setInfo((pre) => ({ ...pre, [name]: value }));
    }
  };

  const fetchEczaneInfo = async () => {
    try {
      const res = await axios.get(
        `https://api.collectapi.com/health/dutyPharmacy?ilce=${info.region}&il=${info.city}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "apikey 0GQBAjriPIwWIqjcxU7MhJ:5p1vdCUZGkH9xE3UI5ihuh",
          },
        }
      );
      const list = res.data.result;
      setEczaneList(list);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchEczaneInfo();
  };
  
  useEffect(() => {
   fetchEczaneInfo();
  }, [info.city, info.region]);

  useEffect(() => {
    setRegionList(regions["Bursa"]);
  }, []);
  
  if (loading) return <NobetciEczaneSkeleton />
  
  return (
    <div className="form-wrapper">
      <form className="city-form" onSubmit={handleSubmit}>
        <select
          onChange={handleChange}
          className="city-form-select"
          name="city"
          required
          value={info.city}
        >
          <option value="" selected hidden disabled>
            --İl seçiniz--
          </option>
          {cities.map((i) => {
            return (
              <option key={i} value={i}>{i}</option>
            )
          })}
        </select>
        <select
          onChange={handleChange}
          className="city-form-select"
          name="region"
          required
          value={info.region}
        >
          <option value="" selected hidden disabled>
            --İlçe seçiniz--
          </option>

          {regionList?.map((i, idx) => {
            return (
              <option key={idx} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <input className="submit-btn" type="submit" value="Eczane Bul"/>
      </form>
      <h4>{now} {info.city} İli { info.region && `${info.region} İlçesi`} Nöbetçi Eczaneleri</h4>
      { eczaneList && !eczaneList.error && eczaneList?.map((i) => (
        <div key={i.phone} className="info-wrapper">
          <div className="item">
            <div className="upside">
              <div className="upside-left">
                <Image src={eczane} alt="" />
                <h5>{i.name.includes("ECZANESİ") ? i.name : i.name.concat(" ECZANESİ")}</h5>
                <div className="location-icon">
                  <FmdGoodOutlinedIcon />
                </div>
              </div>
              <div className="upside-right">
               <span>0{i.phone}</span> 
                <span>{i.dist}</span>
              </div>
            </div>
            <div className="downside">
              <Image src={home} />
              <p>{i.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NobetciEczaneComp;
