"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

const MenuFix = () => {
  const router = useRouter();
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "home_button":
        router.push("/");
        break;
      case "icon_id_cast":
        router.push("/top-cast");
        break;
      case "icon_id_recommend":
        router.push("/recommended");
        break;
      case "icon_id_popular":
        router.push("/popular");
        break;
      case "icon_id_about":
        router.push("/about");
        break;
      default:
        break;
    }
  };

  const handleGoTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="stick_top_id">
      <div
        className={`go-top ${showGoTop ? "active" : ""}`}
        id="go_top_id"
        data-go-top
        onClick={handleGoTopClick}
      >
        <div className="navigation">
          <ul className="listWrap">
            <li className="list active">
              <a href="/#" id="home_button" onClick={handleLinkClick}>
                <i className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </i>
                <span className="text">Home</span>
              </a>
            </li>
            <li className="list">
              <a href="/#" id="icon_id_cast" onClick={handleLinkClick}>
                <i className="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </i>
                <span className="text">Top Cast</span>
              </a>
            </li>
            <li className="list">
              <a href="/#" id="icon_id_recommend" onClick={handleLinkClick}>
                <i className="icon">
                  <ion-icon name="videocam-outline"></ion-icon>
                </i>
                <span className="text">Recommended</span>
              </a>
            </li>
            <li className="list">
              <a href="/#" id="icon_id_popular" onClick={handleLinkClick}>
                <i className="icon">
                  <ion-icon name="sparkles-outline"></ion-icon>
                </i>
                <span className="text">Popular</span>
              </a>
            </li>
            <li className="list">
              <a href="/#" id="icon_id_about" onClick={handleLinkClick}>
                <i className="icon">
                  <ion-icon name="help-outline"></ion-icon>
                </i>
                <span className="text">About</span>
              </a>
            </li>
            <li className="indicator"></li>
          </ul>
        </div>
        <ion-icon name="chevron-up"></ion-icon>
      </div>
    </div>
  );
};

export default MenuFix;
