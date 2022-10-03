import React, { memo, useState } from "react";

import Instagram from "@assets/instagram.png";
import Linkedin from "@assets/linkedin.png";
import Telegram from "@assets/telegram.png";
import Vk from "@assets/vk.png";

import style from "./Contacts.module.scss";

const email: string = "ryoamir60@gmail.com";

const Contacts = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <div className={style.container}>
      <div className={style.title}>Контакты</div>
      <div className={style.description}>
        Хотите узнать больше или просто поболтать? Пожалуйста!
      </div>
      <button
        className={style.button}
        onClick={() => {
          navigator.clipboard.writeText(email).then(() => {
            setDisabled(true);
            setTimeout(() => {
              setDisabled(false);
            }, 1000);
          });
        }}
      >
        {disabled ? "Email скопирован" : email}
      </button>
      <div className={style.linkList}>
        <a
          href="https://t.me/agzamov_az"
          className={style.item}
          target="_blank"
          rel="noreferrer"
        >
          <img src={Telegram} alt="Telegram" className={style.itemImg} />
        </a>
        <a
          href="https://www.instagram.com/agzam001"
          className={style.item}
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram" className={style.itemImg} />
        </a>
        <a
          href="https://vk.com/halvamagistram"
          className={style.item}
          target="_blank"
          rel="noreferrer"
        >
          <img src={Vk} alt="VK" className={style.itemImg} />
        </a>
        <a
          href="https://www.linkedin.com/in/dertex-js"
          className={style.item}
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" className={style.itemImg} />
        </a>
      </div>
    </div>
  );
};

export default memo(Contacts);
