import React, { memo } from "react";

import cn from "classnames";
import { NavLink } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.navMenu}>
      <nav className={style.container}>
        <nav className={style.menu}>
          <ul className={style.menuList}>
            <li className={style.menuListItem}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? cn(style.menuListItemLink, style.active)
                    : style.menuListItemLink
                }
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
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
};

export default memo(Header);
