import React from "react";

function Header() {
  const date = new Date();
  let month = date.getMonth();
  const number = date.getDate();
  let day = date.getDay();

  switch (day) {
    case 0:
      day = "Воскресенье";
      break;
    case 1:
      day = "Понедельник";
      break;
    case 2:
      day = "Вторник";
      break;
    case 3:
      day = "Среда";
      break;
    case 4:
      day = "Четверг";
      break;
    case 5:
      day = "Пятница";
      break;
    case 6:
      day = "Суббота";
      break;
    default:
      day = "";
      break;
  }

  switch (month) {
    case 0:
      month = "января";
      break;
    case 1:
      month = "февраля";
      break;
    case 2:
      month = "марта";
      break;
    case 3:
      month = "апреля";
      break;
    case 4:
      month = "мая";
      break;
    case 5:
      month = "июня";
      break;
    case 6:
      month = "июля";
      break;
    case 7:
      month = "августа";
      break;
    case 8:
      month = "сентября";
      break;
    case 9:
      month = "октября";
      break;
    case 10:
      month = "ноября";
      break;
    case 11:
      month = "декабря";
      break;
    default:
      month = "";
      break;
  }

  return (
    <header className="header">
      <h1 className="header__title">
        {day}, {number} {month}
      </h1>
    </header>
  );
}

export default Header;
