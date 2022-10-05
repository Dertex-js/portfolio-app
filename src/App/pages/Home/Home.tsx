import React, { memo } from "react";

import Logo from "@assets/photo_2021-12-19_03-23-41.png";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <h1 className={style.name}>
          Амир <br />
          Агзамов
        </h1>

        <h2 className={style.description}>
          Frontend-разработчик <br />
          26 лет, Уфа
        </h2>

        <div className={style.lang}>RU | ENG</div>
      </div>
      <div className={style.imgBlock}>
        <img src={Logo} alt="My" className={style.img} />
      </div>
    </div>
  );
};

export default memo(Home);
