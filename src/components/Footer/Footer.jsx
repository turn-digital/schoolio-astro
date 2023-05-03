import React from "react";
const Footer = () => {
  console.log("Footer");
  return (
    <footer class="footer" aria-label="Page footer">
      <div class="wrapper">
        <img
          class="lazyloaded"
          data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/logo.svg"
          alt=""
          src="https://www.schooliowp.com/wp-content/uploads/2021/10/logo.svg"
        ></img>

        <p class="footer__copy">
          © 2023 Turn Digital, visas tiesības aizsargātas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
