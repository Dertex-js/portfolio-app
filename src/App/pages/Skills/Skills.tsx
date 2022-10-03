import React, { memo } from "react";

import { skillsList } from "@config/skillsList";

import SkillItem from "./components/SkillItem";
import style from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Навыки</div>
      <div className={style.subTitle}>
        Основные языки и фреймворки, которые я использую
      </div>
      <div className={style.skillsWrapper}>
        {skillsList.map((item) => (
          <SkillItem
            image={item.image}
            title={item.title}
            stars={item.stars}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Skills);
