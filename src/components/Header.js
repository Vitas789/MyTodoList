import React from "react";
import moment from 'moment'

function Header() {
  moment.updateLocale('ru', {
    months : [
      "Января", "Февраля", "Марта", "Апреля", "Май", "Июня", "Июля",
      "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ],
    weekdays : [
      "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ]
  });
  const date = moment().format('D MMMM, dddd');

  return (
    <header className="header">
      <h1 className="header__title">
        {date}
      </h1>
    </header>
  );
}

export default Header;
