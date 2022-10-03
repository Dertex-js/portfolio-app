import ChessPr from "@assets/projectsItems/chess.png";
import CoinsPr from "@assets/projectsItems/coins.png";

export const ProjectItemsList = [
  {
    image: CoinsPr,
    src: "https://github.com/Dertex-js/hw-5",
    subtitle:
      "Приложение на React с использованием библиотеки MobX и TypeScript. Файлы собираются с помощью Webpack. Все .ts/.js/.tsx/.jsx файлы транспилируются с помощью Babel. Настроена сборка стилей: поддерживается sass-синтаксис, css-modules; для dev-сборки используется style-loader, для prod -  MiniCssExtractPlugin. Подключен Hot Module Replacement. Работа с API",
    key: 0,
  },
  {
    image: ChessPr,
    src: "https://github.com/Dertex-js/chess-app",
    subtitle:
      "Приложение SRA написано на React и TypeScript. Задействованы хуки, функциональные компоненты, ООП, реализована логика игры",
    key: 1,
  },
];
