import React from "react";
import Image from "next/image";

const TopCast = () => {
  const topCastData = [
    {
      imageSrc: "/../../../char-1.jpg",
      name: "JOHN DOE",
      username: "@johndoesurname",
    },
    {
      imageSrc: "/../../../char-2.jpg",
      name: "JANE DOE",
      username: "@janedoesurname",
    },
    {
      imageSrc: "/../../../char-1.jpg",
      name: "JOHN DOE",
      username: "@johndoesurname",
    },
    {
      imageSrc: "/../../../char-2.jpg",
      name: "JANE DOE",
      username: "@janedoesurname",
    },
    {
      imageSrc: "/../../../char-1.jpg",
      name: "JOHN DOE",
      username: "@johndoesurname",
    },
    {
      imageSrc: "/../../../char-2.jpg",
      name: "JANE DOE",
      username: "@janedoesurname",
    },
  ];

  return (
    <div className="container mt-16">
      <div className="filter-bar" id="filter_bar_id">
        <div className="filter-radios">
          <p id="p_tag_center">Top Cast</p>
        </div>
      </div>
      <section className="movies grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {topCastData.map((cast, index) => (
          <div key={index} className="profile-card-2">
            <Image
              src={cast.imageSrc}
              height={290}
              width={260}
              alt="top cast"
            />
            <div className="profile-name">{cast.name}</div>
            <div className="profile-username">{cast.username}</div>
            <div className="profile-icons flex gap-2">
              <a href="/#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TopCast;
