/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef } from "react";
import Icon from "../Icon/icon";
import { Link } from "react-scroll";
import img1 from "../../img/profile.JPG";
import img2 from "../../img/lagos.jpg";
import styles from "./Home.module.scss";
import gsap from "gsap";
import "../../js/Math.js";
import RGBShiftEffect from "../../js/RGBShiftEffect.js";
import imagesLoaded from "imagesloaded";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TestFlight2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  let header = useRef(null);
  let imageRef = useRef(null);
  let worksContainer = useRef(null);
  let mainContainer = useRef(null);
  let effectWrapper = useRef(null);
  let effectLinks;

  let scroll;

  useEffect(() => {
    const items = gsap.utils.toArray("#project");
    const links = gsap.utils.toArray("#link");
    links.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        let imageData = e.target.getAttribute("data-image");
        gsap.set(imageRef.current, {
          attr: { src: imageData },
          ease: "power2.in",
        });
      });
      el.addEventListener("mousemove", (e) => {
        let imageData = e.target.getAttribute("data-image");
        gsap.set(imageRef.current, {
          attr: { src: imageData },
          ease: "power2.in",
        });
      });
    });
    items.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        gsap.set(e, {
          css: {
            zIndex: 99,
          },
        });
        gsap.set(imageRef.current, {
          ease: "power2.in",
        });
      });
      el.addEventListener("mousemove", (e) => {
        let imageData = e.target.getAttribute("data-image");
        gsap.set(imageRef.current, {
          attr: { src: imageData },
          css: {
            display: "block",
            top: e.clientY,
            left: e.clientX,
          },
          ease: "power2.in",
        });
      });
      el.addEventListener("mouseleave", (e) => {
        e.target.style.zIndex = 1;
        gsap.set(imageRef.current, {
          attr: { src: "" },
          css: { display: "none" },
          ease: "power2.in",
        });
      });
    });
    items.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.in",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play complete reverse reset",
          end: "10px 75%",
          start: "0 89%",
          scrub: 0.2,
        },
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      gsap.set(imageRef.current, {
        css: {
          position: "fixed",
        },
      });
    });
    gsap.from("#greeting, #location, #intro__text", {
      opacity: 0,
      y: -50,
      stagger: 0.2,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: header.current,
        start: "top 30%",
        end: "bottom 90%",
        toggleActions: "play complete none none",
      },
    });
    gsap.from("#navigation", {
      opacity: 0,
      y: -100,
      duration: 0.6,
      ease: "power2.in",
    });
  }, []);

  useEffect(() => {
    window.onload = function () {
      gsap.fromTo(
        "#loader",
        {
          opacity: 1,
          duration: "12s",
          css: {
            backgroundColor: "black",
          },
        },
        {
          y: 0,
          opacity: 0,
          zIndex: -1,
        }
      );
    };
    const container = document.body;
    effectLinks = gsap.utils.toArray("#effect");
    const preloadImages = () => {
      return new Promise((resolve, reject) => {
        new imagesLoaded(document.querySelectorAll("img"), resolve);
      });
    };

    // And then.._
    // Preload images

    preloadImages().then(() => {
      // Remove the loader
      document.body.classList.remove("loading");
      const effect = new RGBShiftEffect(
        container,
        effectWrapper.current,
        effectLinks,
        {
          strength: 0.25,
        }
      );
    });
  }, []);

  return (
    <>
      <div id="loader" className={styles.loader}></div>
      <div
        className={styles.testFlight2}
        data-scroll-container
        ref={mainContainer}
        id="main"
      >
        <nav className={styles.navigation} id="navigation">
          <div className={styles.left}>
            <Link to="main" smooth="true">
              <h1 id="logo">Temi T</h1>
            </Link>
          </div>
          <div className={styles.right}>
            <ul>
              <li id="projectlink">
                <Link
                  to="works__container"
                  activeClass={styles.linkActive}
                  smooth={true}
                  spy={true}
                >
                  Projects
                </Link>
              </li>
              <li id="aboutlink">
                <Link
                  to="about"
                  activeClass={styles.linkActive}
                  smooth={true}
                  spy={true}
                >
                  About
                </Link>
              </li>
              <li
                id="contactlink"
                onClick={() =>
                  scroll.scrollTo(
                    document.querySelector("[data-scroll-contact]")
                  )
                }
              >
                <Link
                  to="contact"
                  smooth={true}
                  activeClass={styles.linkActive}
                  spy={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.topHeader} ref={header}>
          <div
            className={styles.mainText}
            id="effectWrapper"
            ref={effectWrapper}
          >
            <p className={styles.greeting} id="greeting">
              Hello
            </p>
            <div id="header__text">
              <p id="intro__text">
                <a
                  aria-label="link-1"
                  target="_blank"
                  rel="noopener"
                  draggable="false"
                  className={styles.link}
                  id="effect"
                >
                  <span className={styles.info} id="location">
                    Temitoyin
                  </span>{" "}
                  <img className="content__img" src={img1} alt="img1" />
                </a>{" "}
                is an interesting Front-End developer from<br></br>
              </p>
              <p id="intro__text">
                <a
                  aria-label="link-1"
                  target="_blank"
                  rel="noopener"
                  draggable="false"
                  className={styles.link}
                  id="effect"
                >
                  <span className={styles.location} id="location">
                    Lagos Nigeria
                  </span>{" "}
                  <img className="content__img" src={img2} alt="img1" />
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <section
          className={styles.works}
          data-scroll-works
          id="works__container"
          ref={worksContainer}
        >
          <h2 id="works" className={styles.heading}>
            My Projects
          </h2>
          <img
            src=""
            id="projectImg"
            ref={imageRef}
            rel="preload"
            alt="project"
          />
          <a
            href="https://distracted-euler-df595f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={styles.project}
              id="project"
              data-image="https://res.cloudinary.com/bankai/image/upload/v1636551254/Portfolio/gdyqktez2jovdy2ycfnx.png"
            >
              <div className={styles.project__text} id="project">
                <h2
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551254/Portfolio/gdyqktez2jovdy2ycfnx.png"
                >
                  Url Shortener
                </h2>
                <p
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551254/Portfolio/gdyqktez2jovdy2ycfnx.png"
                >
                  Personal/ React, Axios, Scss
                </p>
              </div>
              <span className={styles.project__arrow}>
                <Icon name="arrow" />
              </span>
            </div>
          </a>

          <div
            className={styles.project}
            id="project"
            data-image="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg"
          >
            <div className={styles.project__text} id="project">
              <h2
                id="link"
                data-image="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg"
              >
                Dashood
              </h2>
              <p
                id="link"
                data-image="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg"
              >
                Logistics/ Next, Redux, Rest, Scss
              </p>
            </div>
            <span className={styles.project__arrow}>
              <Icon name="arrow" className={styles.arrow} />
            </span>
          </div>
          <a href="https://new.konga.com/" target="_blank" rel="noreferrer">
            <div
              className={styles.project}
              id="project"
              data-image="https://res.cloudinary.com/bankai/image/upload/v1636551885/Portfolio/dgfoao6dozilp9vw2kyr.png"
            >
              <div className={styles.project__text} id="project">
                <h2
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551885/Portfolio/dgfoao6dozilp9vw2kyr.png"
                >
                  konga SuperApp
                </h2>
                <p
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551885/Portfolio/dgfoao6dozilp9vw2kyr.png"
                >
                  Ecommerce/ React, Redux, Graphql, Scss
                </p>
              </div>
              <span className={styles.project__arrow}>
                <Icon name="arrow" />
              </span>
            </div>
          </a>
          <a href="https://www.konga.com/">
            <div
              className={styles.project}
              id="project"
              data-image="https://res.cloudinary.com/bankai/image/upload/v1636552253/Portfolio/sdsivpsng2ce0seizyni.png"
            >
              <div className={styles.project__text} id="project">
                <h2
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636552253/Portfolio/sdsivpsng2ce0seizyni.png"
                >
                  konga
                </h2>
                <p
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636552253/Portfolio/sdsivpsng2ce0seizyni.png"
                >
                  Ecommerce/ Next, Redux, Graphql, Scss
                </p>
              </div>
              <span className={styles.project__arrow}>
                <Icon name="arrow" />
              </span>
            </div>
          </a>
        </section>
        <section className={styles.about} data-scroll-about id="about">
          <div className={styles.about__heading}>
            <h3 id="aboutStuff">About</h3>
            <div className={styles.about__info}>
              <p>
                Hello,<br></br>
                I'm Temitoyin Ayorinde a front-end developer with over 2 years
                experience in creating mobile responsive, accessible
                applications. I enjoy turning complex problems into simple,
                beautiful and intuitive designs.
              </p>
              <p>
                When I'm not writing code, I spend my time playing basketball,
                reading, watching anime, cooking and generally having a good
                time.
              </p>
              <p>
                If you need some inspiration on something to watch, read or
                listen to checkout my links
              </p>
            </div>
            <div className={styles.about__links}>
              <a
                href="https://myanimelist.net/animelist/Toyin18"
                target="_blank"
                rel="noreferrer"
              >
                <p>My aime list</p>
              </a>
              <a
                href="https://www.goodreads.com/review/list/142870885?ref=nav_mybooks"
                target="_blank"
                rel="noreferrer"
              >
                <p>Good reads</p>
              </a>
              <a
                href="https://open.spotify.com/playlist/7mTZwyStZ8GK0WIu8Euehn"
                target="_blank"
                rel="noreferrer"
              >
                <p>Spotify playlist</p>
              </a>
            </div>
          </div>
          <div className={styles.toolStack}>
            <h4>My Stack</h4>
            <div class={styles.categories}>
              <div class="front-end">
                <h3>Front end</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>Three.js</li>
                  <li>Gsap</li>
                </ul>
              </div>
              <div class="back-end">
                <h3>Back end</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Postman</li>
                  <li>Express</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                </ul>
              </div>
              <div class="version-control">
                <h3>Version control</h3>
                <ul>
                  <li>Git</li>
                  <li>Github</li>
                </ul>
              </div>
              <div class="data-base">
                <h3>Database</h3>
                <ul>
                  <li>MySQL</li>
                  <li>MongoDb</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles.contact}
          data-scroll-contact
          id="contact"
        ></section>
        <footer class={styles.footer}>
          <div class={styles.footer__copyright}>
            Temitoyin © <span id="date"></span> Copyright
          </div>
          <div class={styles.socialmedia__icons}>
            <a
              href="https://twitter.com/toyin_ayorinde"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-twitter-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/toyin-ayorinde-55a859101/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Temitoyin"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-github"></i>
            </a>
            <a
              href="https://codepen.io/temitoyin"
              target="blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-codepen"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TestFlight2;
