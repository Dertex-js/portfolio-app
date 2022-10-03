import React, { memo } from "react";

import { ProjectItemsList } from "@config/ProjectItemsList";

import ProjectItem from "./components";
import style from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Мои проекты</div>
      {ProjectItemsList.map((item) => (
        <ProjectItem
          image={item.image}
          description={item.subtitle}
          src={item.src}
          key={item.key}
        />
      ))}
    </div>
  );
};

export default memo(Portfolio);
