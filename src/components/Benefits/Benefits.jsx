import React from "react";
const Benefits = () => {
  console.log("Header");
  return (
    <div class="wrapper">
      <div class="home__benefits-info">
        <h2 class="home__title home__title--center">
          Skolām un pašvaldībām, kas vēlas darīt labāk
        </h2>
        <p class="home__description home__description--center">
          Vai tu esi domājis kāda ir Tava mājaslapa? Vai gribi būt soli priekšā
          citiem? <br />
          Parupējies par mājaslapas apmeklētājiem, lai viņi ērti iegūst <br />
          nepieciešamo informāciju par izglītības iestādi.
          <br />
          Katra skola ir pelnījusi tīmekļvietni, ar kuru var lepoties!
        </p>
      </div>
      <div class="home__list">
        <div class="card-article ">
          <div class="card-article__img">
            <img
              class="card-article__cover-img lazyloaded"
              data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-not-eye.svg"
              alt=""
              src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-not-eye.svg"
            ></img>
          </div>

          <div class="card-article__info">
            <p class="card-article__title">
              Viens risinājums piekļūstamības prasībām
            </p>
            <div class="card-article__desc text-editor">
              <p>
                MK noteikumi 445 “Kādā ievieto informāciju internetā” paredz
                nodrošināt mājaslapā izvietoto drukāto, audio un vizuālo saturu
                viegli uztveramu arī cilvēkiem ar invilidtāti. Platformā ir
                apvienoti būtiski digitālās vides piekļūstamības risinājumi, ko
                novērtēs visi Tavas lapas lietotāji.
              </p>
            </div>
          </div>
        </div>
        <div class="card-article ">
          <div class="card-article__img">
            <img
              class="card-article__cover-img lazyloaded"
              data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-phone.svg"
              alt=""
              src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-phone.svg"
            ></img>
          </div>

          <div class="card-article__info">
            <p class="card-article__title">Tagad ērtāk no mobilā telefona</p>
            <div class="card-article__desc text-editor">
              <p>
                Ar katru gadu mājaslapu apmeklētāji informāciju vairāk meklē no
                viedierīcēm. Novērtē iespēju saturu veidot, publicēt un labot,
                izmantojot mobilo telefonu, tas ir tikpat vienkārši kā Facebook.
                Saturs un dizains ir pārdomāti izkārtots, atbilstoši mobīlo
                ierīču prasībām. Saturu veido un ievieto no jebkuras vietas
                pasaulē!
              </p>
            </div>
          </div>
        </div>
        <div class="card-article ">
          <div class="card-article__img">
            <img
              class="card-article__cover-img lazyloaded"
              data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-zoom.svg"
              alt=""
              src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-zoom.svg"
            ></img>{" "}
          </div>

          <div class="card-article__info">
            <p class="card-article__title"> Atrodi vajadzīgo bez piepūles</p>
            <div class="card-article__desc text-editor">
              <p>
                Izmanto risinājumu, kas balstīts lietotāju pieredzes pētījuma
                datos, mājaslapas saturu ievieto četrās galvenās sadaļās, kas
                apmeklētājam sniedz iespēju intuitīvi atrast vajadzīgo.
              </p>
            </div>
          </div>
        </div>
        <div class="card-article ">
          <div class="card-article__img">
            <img
              class="card-article__cover-img lazyloaded"
              data-src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-bars-vertical.svg"
              alt=""
              src="https://www.schooliowp.com/wp-content/uploads/2021/10/icon-bars-vertical.svg"
            ></img>{" "}
          </div>

          <div class="card-article__info">
            <p class="card-article__title">Mājaslapas apmeklējuma statistika</p>
            <div class="card-article__desc text-editor">
              <p>
                Iegūsti pārliecību, ka skolai mājaslapa ir vajadzīga. Saņem
                vizuālu pārskatu, analizē apmeklētāju uzvedību un zini:
                <br />
                kā un cik daudz cilvēku nonāk mājaslapā;
                <br />
                kas ir populārākais saturs;
                <br />
                kādi ir regulārie mājaslapas apmekējuma scenāriji;
                <br />
                cik ilgu laiku pavada pētot saturu u.c.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
