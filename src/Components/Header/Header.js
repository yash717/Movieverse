import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../App.css"

const HeaderReact = () => {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Movie", href: "#" },
    { text: "Tv Show", href: "#" },
    { text: "Web Series", href: "#" },
    { text: "Pricing", href: "#" },
  ];

  const socialLinks = [
    { icon: "logo-twitter" },
    { icon: "logo-facebook" },
    { icon: "logo-pinterest" },
    { icon: "logo-instagram" },
    { icon: "logo-youtube" },
  ];

  return (
    <span className="header_react">
      <header id="header" className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>

          <Link href="/">
            <div className="logo">
              <Image src="/logo.png" alt="logo" height={140} width={190} />
            </div>
          </Link>

          <button className="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two"></ion-icon>
          </button>

          <nav id="navbar" className="navbar" data-navbar>
            <div className="navbar-top">
              <Link href="/">
                <div className="logo">
                  <Image src="/logo.png" alt="logo" height={60} width={60} />
                </div>
              </Link>
              <button className="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <div className="navbar-link">{link.text}</div>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="navbar-social-list">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href="#" className="navbar-social-link">
                    <ion-icon name={social.icon}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </span>
  );
};

export default HeaderReact;
