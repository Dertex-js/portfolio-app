import React, { memo } from "react";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <h2 className={style.name}>
          Agzamov <br />
          Amir
        </h2>

        <h1 className={style.description}>
          Frontend-developer <br />
          26 years old, Ufa
        </h1>

        <div className={style.lang}>RU | ENG</div>
      </div>
    </div>
  );
};

export default memo(Home);
