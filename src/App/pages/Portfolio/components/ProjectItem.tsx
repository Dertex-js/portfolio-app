import React, { FC } from "react";

import style from "./ProjectItem.module.scss";

export type ProjectItemProps = {
  image: string;
  description: string;
  src: string;
};

const ProjectItem: FC<ProjectItemProps> = ({ image, description, src }) => {
  return (
    <div className={style.item}>
      <a href={src} className={style.itemLink} target="_blank" rel="noreferrer">
        <img src={image} alt="work" className={style.itemImg} />
      </a>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default ProjectItem;
