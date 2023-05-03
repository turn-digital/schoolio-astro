import React from "react";
const Features = () => {
  console.log("Header");
  return (
    <div class="features">
      <div class="home__features">
        <div class="wrapper">
          <div class="home__features-info">
            <h2 class="home__title home__title--light">
              Saņem vairāk nekā tikai mājaslapu
            </h2>
            <p class="home__description">
              Mūsu prioritāte ir izglītošana, lai katrs iesaistītais ir ar
              izpratni un pārliecību mājaslapas ieviešanā, satura veidošanā un
              uzturēšanā. Pievienojies un saņem:{" "}
            </p>
          </div>

          <div class="home__list">
            <div class="card-article card-article--dark">
              <div class="card-article__img">
                <img
                  class="card-article__cover-img lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-diamond.svg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-diamond.svg"
                ></img>
              </div>

              <div class="card-article__info">
                <p class="card-article__title">Zināšanas</p>
                <div class="card-article__desc text-editor">
                  Uzzini, kādi ir veiksmīgas vietnes pamatnosacījumi papildus
                  ērtai un pārdomātai lapas sagatavei;
                </div>
              </div>
            </div>
            <div class="card-article card-article--dark">
              <div class="card-article__img">
                <img
                  class="card-article__cover-img lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-pad-star.svg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-pad-star.svg"
                ></img>
              </div>

              <div class="card-article__info">
                <p class="card-article__title">Piekļūstamības mācības</p>
                <div class="card-article__desc text-editor">
                  Bezmaksas mācības par digitālās vides piekļūstamību un Google
                  Analytics/ Search Console izmantošanu mājaslapas veiksmes
                  noteikšanā;
                </div>
              </div>
            </div>
            <div class="card-article card-article--dark">
              <div class="card-article__img">
                <img
                  class="card-article__cover-img lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-bars-horizontal.svg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-bars-horizontal.svg"
                ></img>
              </div>

              <div class="card-article__info">
                <p class="card-article__title">
                  Piekļūstamības paziņojuma sagatavi
                </p>
                <div class="card-article__desc text-editor">
                  Piekļūstamības paziņojums, kas integrēts mājaslapā;
                </div>
              </div>
            </div>
            <div class="card-article card-article--dark">
              <div class="card-article__img">
                <img
                  class="card-article__cover-img lazyloaded"
                  data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-play.svg"
                  alt=""
                  src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-play.svg"
                ></img>
              </div>

              <div class="card-article__info">
                <p class="card-article__title">Mācību video</p>
                <div class="card-article__desc text-editor">
                  Atbalsta materiāls, lai ērtā laikā un tempā nostiprinātu vai
                  atjaunotu zināšanas;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
