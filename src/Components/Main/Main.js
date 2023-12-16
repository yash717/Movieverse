import React from "react";
import MovieDetail from "../MovieDetail/MovieDetail"
const MainReact = () => {
  return (
    <main>
      <article>
        {/* <!-- 
        - #MOVIE DETAIL
      --> */}

        <section className="movie-detail">
          <MovieDetail />
        </section>
      </article>
    </main>
  );
};

export default MainReact;
