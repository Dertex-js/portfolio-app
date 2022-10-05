import React, { memo, useState } from "react";

import cn from "classnames";
import { NavLink } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <header className={style.navMenu}>
      <div className={style.container}>
        <nav className={cn(style.menu, { [style.activeMenu]: active })}>
          <ul className={style.menuList}>
            <li className={style.menuListItem}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? cn(style.menuListItemLink, style.active)
                    : style.menuListItemLink
                }
                onClick={() => setActive(false)}
                end
              >
                Главная
              </NavLink>
            </li>
            <li className={style.menuListItem}>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? cn(style.menuListItemLink, style.active)
                    : style.menuListItemLink
                }
                onClick={() => setActive(false)}
              >
                Обо мне
              </NavLink>
            </li>
            <li className={style.menuListItem}>
              <NavLink
                to={"/skills"}
                className={({ isActive }) =>
                  isActive
                    ? cn(style.menuListItemLink, style.active)
                    : style.menuListItemLink
                }
                onClick={() => setActive(false)}
              >
                Навыки
              </NavLink>
            </li>
            <li className={style.menuListItem}>
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) =>
                  isActive
                    ? cn(style.menuListItemLink, style.active)
                    : style.menuListItemLink
                }
                onClick={() => setActive(false)}
              >
                Портфолио
              </NavLink>
            </li>
            <li className={style.menuListItem}>
              <NavLink
                to={"/contacts"}
                className={({ isActive }) =>
                  isActive
                    ? cn(style.menuListItemLink, style.active)
                    : style.menuListItemLink
                }
                onClick={() => setActive(false)}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={cn(style.burger, { [style.activeBurger]: active })}
          onClick={handleClick}
        >
          <span className={style.span}></span>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
