import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-center md:flex-row">
              <Image
                src="/images/logo.png"
                alt=""
                height={20}
                width={100}
                className="footer-logo"
              />
              <p className="slogan text-center md:text-left">
                Movies & TV Shows, Online cinema, Movie database HTML Template.
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <h6>About</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. Algorithm.
            </p>
          </div>

          <div>
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <Link href="http://scanfcode.com/category/c-language/">C</Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/category/android/">
                  Android
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/category/templates/">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link href="http://scanfcode.com/about/">About Us</Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/contact/">Contact Us</Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/sitemap/">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
      </div>

    </footer>
  );
};

export default Footer;
