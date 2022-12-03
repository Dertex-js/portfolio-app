import React, { memo } from "react";

import Logo from "@assets/avatar.jpg";

import useMatchMedia from "../../../hooks/useMatchMedia";
import style from "./Home.module.scss";

const Home = () => {
  const { isMobile } = useMatchMedia();

  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <h1 className={style.name}>Амир {isMobile && <br />}Агзамов</h1>

        <h2 className={style.description}>
          Junior+ Frontend-разработчик <br />
          26 лет, Уфа
        </h2>
      </div>
      <div className={style.imgBlock}>
        <img src={Logo} alt="My" className={style.img} />
      </div>
    </div>
  );
};

export default memo(Home);
