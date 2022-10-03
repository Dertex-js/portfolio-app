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
        <a href="https://t.me/agzamov_az">
          <img src={Telegram} alt="Telegram" className={style.item} />
        </a>
        <a href="https://t.me/agzamov_az">
          <img src={Instagram} alt="Instagram" className={style.item} />
        </a>
        <a href="https://t.me/agzamov_az">
          <img src={Vk} alt="VK" className={style.item} />
        </a>
        <a href="https://t.me/agzamov_az">
          <img src={Linkedin} alt="Linkedin" className={style.item} />
        </a>
      </div>
    </div>
  );
};

export default memo(Contacts);
