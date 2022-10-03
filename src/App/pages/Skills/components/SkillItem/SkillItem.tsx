import React, { FC } from "react";

import blackStar from "@assets/skillsIco/Star-black.png";
import greyStar from "@assets/skillsIco/Star-grey.png";

import style from "./SkillItem.module.scss";
export type SkillItemProps = {
  image: string;
  title: string;
  stars: number;
};

const SkillItem: FC<SkillItemProps> = ({ image, title, stars }) => {
  const starsArr: boolean[] = [false, false, false, false, false];
  for (let i = 0; i < stars; i++) {
    starsArr[i] = true;
  }

  return (
    <div className={style.item}>
      <img className={style.itemImg} src={image} alt="title" />
      <div className={style.itemDescription}>{title}</div>
      <div className={style.itemStars}>
        {starsArr.map((item) =>
          item ? (
            <img
              className={style.star}
              src={blackStar}
              alt=""
              key={Math.random()}
            />
          ) : (
            <img
              className={style.star}
              src={greyStar}
              alt=""
              key={Math.random()}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SkillItem;
