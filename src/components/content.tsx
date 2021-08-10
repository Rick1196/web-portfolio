import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profilePic from "../../public/pictures/profile.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import pomodoroPicture from "../../public/pictures/pomodoro-app.png";
import weatherPicture from "../../public/pictures/weather-app.png";

import nextLogo from "../../public/icons/next.jpg";
import express from "../../public/icons/express.jpg";
import flask from "../../public/icons/flask-logo.png";
import mongoDb from "../../public/icons/mongodb-logo.png";
import postgre from "../../public/icons/Postgre.png";
import typescript from "../../public/icons/typescript.png";
import firestore from "../../public/icons/logo-small.png";

export const Content = () => {
  const { t } = useTranslation("common");
  return (
    <div id="content-wrapper" className="content-wrapper">
      <section id="description">
        <div className="description">
          <h1 className="description__title">{t("description.title")}</h1>
          <h1 className="description__description">
            {t("description.description")}
          </h1>
        </div>
        <div className="description__container">
          <Image
            className="description__image"
            alt="ricardo-picture"
            src={profilePic}
            width="300"
            height="250"
          />
        </div>
        <div className="description__social-media">
          <Link
            href="https://www.linkedin.com/in/ricardo-manuel-p%C3%A9rez-plata-533037176/"
            passHref
          >
            <a className="description__social-media__icon" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </Link>
          <Link href="https://github.com/Rick1196" passHref>
            <a className="description__social-media__icon" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </Link>
          <Link href="https://dev.to/rick1196" passHref>
            <a className="description__social-media__icon" target="_blank">
              <i className="fab fa-dev"></i>
            </a>
          </Link>
          <Link href="mailto: ricardompp11@gmail.com" passHref>
            <a
              className="description__social-media__icon"
              href="mailto: ricardompp11@gmail.com"
            >
              <i className="far fa-envelope"></i>
            </a>
          </Link>
        </div>
      </section>
      <section id="about-me">
        <div className="hero">
          <div className="content-hero">
            <h1 className="hero__title">{t("presentation.title")}</h1>
            <p className="hero__descriptions">
              {t("presentation.description")}
            </p>
          </div>
        </div>
        <div className="hero-list">
          <div className="column">
            <p className="column__title">
              {t(
                "sections.personalSection.subsSections.skills.skills.languages"
              )}
            </p>
            <div className="column__content">
              <ul id="languages">
                <li>
                  <span>
                    <i className="fab fa-html5"></i>
                  </span>
                  HTML
                </li>
                <li>
                  <span>
                    <i className="fab fa-css3-alt"></i>
                  </span>
                  CSS
                </li>
                <li>
                  <span>
                    <i className="fab fa-js"></i>
                  </span>
                  Java Script
                </li>
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="next-logo"
                      src={nextLogo}
                      height={14}
                      width={16}
                    />
                  </span>
                  Type Script
                </li>
                <li>
                  <span>
                    <i className="fab fa-python"></i>
                  </span>
                  Python
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <p className="column__title">Front End</p>
            <div className="column__content">
              <ul id="front-end">
                <li>
                  <span>
                    <i className="fab fa-angular"></i>
                  </span>
                  Angular
                </li>
                <li>
                  <span>
                    <i className="fab fa-react"></i>
                  </span>
                  React
                </li>
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="next-logo"
                      src={nextLogo}
                      height={14}
                      width={16}
                    />
                  </span>
                  Next
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <p className="column__title">Back End</p>
            <div className="column__content">
              <ul id="back-end">
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="express-logo"
                      src={express}
                      height={14}
                      width={16}
                    />
                  </span>
                  Express JS
                </li>
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="flask-logo"
                      src={flask}
                      height={14}
                      width={16}
                    />
                  </span>
                  Flask
                </li>
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="postgre-logo"
                      src={postgre}
                      height={14}
                      width={16}
                    />
                  </span>
                  PostgreSQL
                </li>
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="firestore-logo"
                      src={firestore}
                      height={14}
                      width={16}
                    />
                  </span>
                  Firestore
                </li>
                <li>
                  <span>
                    <Image
                      className="circle-picture"
                      alt="mongo-logo"
                      src={mongoDb}
                      height={14}
                      width={16}
                    />
                  </span>
                  Mongo DB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="title">{t("sections.projectsSections.title")}</div>
        <div className="grid">
          <div className="card">
            <div className="card__image">
              <Image alt="header-card-project" src={pomodoroPicture} />
            </div>
            <div className="card__content">
              <div className="card__title">
                {t("sections.projects.todo-app.title")}
              </div>
              <div className="card__description">
                {t("sections.projects.todo-app.description")}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <Image alt="header-card-project" src={weatherPicture} />
            </div>
            <div className="card__content">
              <div className="card__title">
                {t("sections.projects.weather-app.title")}
              </div>
              <div className="card__description">
                {t("sections.projects.weather-app.description")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
