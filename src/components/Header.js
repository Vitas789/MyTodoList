import React from 'react'

function Header() {
  return(
    <header className="header">
    <div className="wrapper">
      <div className="header__content">
        <h1 className="header__title">Сегодня</h1>
        <button className="header__button" type="button">Править</button>
      </div>
    </div>
  </header>
  )
}

export default Header