import React from "react";
import "../../../App.css";
const PopularMovies = () => {
  return (
    <section className="movies">
      {/* <!-- filter bar --> */}
      <div className="filter-bar" id="filter_bar_id_2">
        <div className="filter-dropdowns">
          <select name="genre" className="genre">
            <option value="all genres">All genres</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animal">Animal</option>
            <option value="animation">Animation</option>
            <option value="biography">Biography</option>
          </select>

          <select name="year" className="year">
            <option value="all years">All the years</option>
            <option value="2022">2022</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2010-2019">2010-2019</option>
            <option value="2000-2009">2000-2009</option>
            <option value="1980-1999">1980-1999</option>
          </select>
        </div>

        <div className="filter-radios">
          <input type="radio" name="grade" id="featured" checked />
          <label for="featured">Featured</label>

          <input type="radio" name="grade" id="popular" />
          <label for="popular">Popular</label>

          <input type="radio" name="grade" id="newest" />
          <label for="newest">Newest</label>

          <div className="checked-radio-bg"></div>
        </div>
      </div>

      {/* <!--
          - movies grid
        --> */}

      <div className="movies-grid">
        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>6.4</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Red Notice</h3>

            <div className="card-info">
              <span className="genre">Action/Comedy</span>
              <span className="year">2021</span>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>7.3</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Black Panther</h3>

            <div className="card-info">
              <span className="genre">Action/Adventure</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>6.7</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Venom</h3>

            <div className="card-info">
              <span className="genre">Action/Adventure</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>8.9</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Lord Of The Rings: Return Of The King</h3>
            <div className="card-info">
              <span className="genre">Fantasy/Adventure</span>
              <span className="year">2003</span>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>8.6</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Saving Private Ryan</h3>

            <div className="card-info">
              <span className="genre">War/Action</span>
              <span className="year">1998</span>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>8.6</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Interstellar</h3>

            <div className="card-info">
              <span className="genre">Sci-fi/Adventure</span>
              <span className="year">2014</span>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="card-head">
            <img src="../../../series-2.png" alt="" className="card-img" />
            <div className="card-overlay">
              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>8.5</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Gladiator</h3>

            <div className="card-info">
              <span className="genre">Action/Adventure</span>
              <span className="year">2000</span>
            </div>
          </div>
        </div>
      </div>

      <button className="load-more">LOAD MORE</button>
    </section>
  );
};

export default PopularMovies;
