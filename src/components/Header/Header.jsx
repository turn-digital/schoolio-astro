import React from "react";
const Header = () => {
  console.log("Header");
  return (
    <header class="header" role="banner">
      <div class="wrapper">
        <div class="header__content">
          <a href="https://www.schooliowp.com" class="header__title">
            <img
              class="header__title-image"
              src="https://www.schooliowp.com/wp-content/themes/schooliowp/assets/img/logo_1_.svg"
              alt="schooliowp.lv logo - return to the home"
            ></img>
          </a>
          <nav class="header__menu header__menu--desktop">
            <ul class="header__menu-items"></ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
