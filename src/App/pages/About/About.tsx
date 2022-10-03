import React, { memo } from "react";

import style from "./About.module.scss";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Обо мне</div>
      <div className={style.description}>
        <p className={style.elem}>
          Привет, я Амир – Frontend-разработчик из Уфы. Мне интересна разработка
          приложений, веб-интерфейса и всего, что с этим связано.
        </p>
        <p className={style.elem}>
          Свой путь я начал с изучения простых одностраничных сайтов,
          самостоятельно изучил React, а позже окончил курс от KTS Metaclass по
          React и MobX
        </p>
        <p className={style.elem}>
          Люблю работать в команде и имею опыт в коммерческой разработке
        </p>
        <p className={style.elem}>
          Мне нравится разбираться в том, как работает изнутри какое-то решение
          или технология, поэтому готов реализовывать различные проекты с
          замечательными людьми.
        </p>
      </div>
    </div>
  );
};

export default memo(About);
