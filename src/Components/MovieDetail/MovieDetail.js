import React from "react";
import "../../App.css";
const MainReact = () => {
  return (
    <div>
      <div className="container mb-4">
        <figure className="movie-detail-banner">
          <img
            className="img_banner"
            src="../../../series-2.png"
            alt="Free guy movie poster"
          />

          <button className="play-btn">
            <ion-icon name="play-circle-outline"></ion-icon>
          </button>
        </figure>

        <div className="movie-detail-content">
          <p className="detail-subtitle">New Episodes</p>

          <h1 className="h1 detail-title">
            Free <strong>Guy</strong>
          </h1>

          <div className="meta-wrapper">
            <div className="badge-wrapper">
              <div className="badge badge-fill">PG 13</div>

              <div className="badge badge-outline">HD</div>
            </div>

            <div className="ganre-wrapper">
              <a href="#">Comedy,</a>

              <a href="#">Action,</a>

              <a href="#">Adventure,</a>

              <a href="#">Science Fiction</a>
            </div>

            <div className="date-time">
              <div>
                <ion-icon name="calendar-outline"></ion-icon>

                <time datetime="2021">2021</time>
              </div>

              <div>
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT115M">115 min</time>
              </div>
            </div>
          </div>

          <p className="storyline">
            A bank teller called Guy realizes he is a background character in an
            open world video game called Free City that will soon go offline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainReact;
