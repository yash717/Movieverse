import React from "react";
const SearchBottom = () => {
  return (
    <>
    <section className="section_search_bar">
        
    </section>
      <section className="section_search_bar">
        <div className="container py-5 text-white">
          <div className="row ">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="div_350px">
                <h2 className="h1">Aproveite na TV.</h2>
                <p>
                  Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  aparelhos de Blu-ray e outros dispositivos.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative video-tv">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt="none"
                  className="img-fluid"
                />

                <video autoplay playsinline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_search_bar">
        <div className="container py-5 text-white">
          <div className="row ">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="none"
                className="img500px"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ">
              <div className="img350px">
                <h2 className="h1">Baixe séries para assistir offline.</h2>
                <p>
                  Salve seus títulos favoritos e sempre tenha algo para
                  assistir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_search_bar">
        <div className="container py-5 text-white">
          <div className="row ">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="img350px">
                <h2 className="h1">Assista quando quiser.</h2>
                <p>
                  Assista no celular, tablet, Smart TV ou notebook sem pagar a
                  mais por isso.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative video-tev">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                  alt="none"
                  className="img-fluid"
                />

                <video autoplay playsinline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_search_bar">
        <div className="container py-5 text-white">
          <div className="row ">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="img_500px"
                src="https://occ-0-1278-185.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABWGB3YOpSh2wA7OOZQYD-MkalQ0oJEy-YEEpoPKAIenLtZf5lKeERDdKj-u6WnZx9wx_QuiDVHkGM_1QmVQt9yxM7mKjevBNHKFz.png?r=1b8"
                alt="none"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="img350px">
                <h2 className="h1">Crie perfis para crianças.</h2>
                <p>
                  Deixe as crianças se aventurarem com seus personagens
                  favoritos em um espaço feito só para elas, sem pagar a mais
                  por isso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBottom;
