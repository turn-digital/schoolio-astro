import React from "react";
const Contacts = () => {
  console.log("Contacts");
  return (
    <div class="home__contacts">
      <div class="wrapper">
        <div class="home__contacts-box">
          <div class="home__contacts-info">
            <h2 class="home__title">Sazinies ar mums</h2>
            <p class="home__description">
              Un noskaidro, kā Tavai skolai tikt pie izcilas mājaslapas
            </p>
          </div>

          <div class="home__contacts-people">
            <div class="home__contacts-main">
              <div class="card-person">
                <div class="card-person__profile">
                  <img
                    class=" lazyloaded"
                    data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/Peteris.jpg"
                    alt=""
                    src="https://www.schooliowp.com/wp-content/uploads/2021/10/Peteris.jpg"
                  ></img>
                </div>

                <div class="card-person__info">
                  <p class="card-person__title">Pēteris Jurčenko</p>
                  <p class="card-person__job"></p>
                  <p class="card-person__link">
                    <a href="tel:+371 28280185">+371 28280185</a>
                  </p>
                  <p class="card-person__link">
                    <a href="mailto:peteris.jurcenko@pieklustamiba.lv">
                      peteris.jurcenko@pieklustamiba.lv
                    </a>
                  </p>
                </div>
              </div>{" "}
            </div>

            <div class="home__contacts-list">
              <div class="home__contacts-card"></div>
              <div class="home__contacts-card"></div>

              <div class="home__contacts-card">
                <img
                  class=" lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/Sabine.jpg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/Sabine.jpg"
                ></img>
              </div>
              <div class="home__contacts-card">
                <img
                  class=" lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/Kristine.jpg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/Kristine.jpg"
                ></img>
              </div>
              <div class="home__contacts-card">
                <img
                  class=" lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/Reinis.jpg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/Reinis.jpg"
                ></img>
                <div class="home__contacts-card">
                  <img
                    class=" lazyloaded"
                    data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/Helvijs.jpg"
                    alt=""
                    src="https://www.schooliowp.com/wp-content/uploads/2021/10/Helvijs.jpg"
                  ></img>
                </div>

                <div class="home__contacts-card"></div>
                <div class="home__contacts-card"></div>
                <div class="home__contacts-card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
