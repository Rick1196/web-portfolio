import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pomodoroPicture from "../../../../public/pictures/pomodoro-app.png";
import weatherPicture from "../../../../public/pictures/weather-app.png";
const ProjectsSections: React.ComponentType<Record<string, never>> = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="section-title">
        {t("sections.projectsSections.title")}
      </div>
      <div className="cards-deck">
        <div className="item-card">
          <div className="card-item-header">
            <Image
              className="bordered-image"
              alt="header-card-project"
              src={pomodoroPicture}
              layout="fill"
            />
          </div>
          <div className="card-item-content">
            {t("sections.projects.todo-app.description")}
            <p>Todos</p>
            <ul>
              <li>{t("sections.projects.todo-app.todos.design")}</li>
              <li>{t("sections.projects.todo-app.todos.teams")}</li>
              <li>{t("sections.projects.todo-app.todos.tasks")}</li>
            </ul>
          </div>
          <div className="card-item-footer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pomodoro-app-44c9b.web.app/"
            >
              {t("sections.projectsSections.commonButton")}
            </a>
            <a
              href="https://github.com/Rick1196/pomodoro-front"
              rel="noreferrer"
              target="_blank"
            >
              {t("sections.projectsSections.repoButton")}
            </a>
          </div>
        </div>
        {/* Weahter app */}
        <div className="item-card">
          <div className="card-item-header">
            <Image
              className="bordered-image"
              alt="header-card-project"
              src={weatherPicture}
              layout="fill"
            />
          </div>
          <div className="card-item-content">
            {t("sections.projects.weather-app.description")}
            <p>Weather App</p>
            <ul>
              <li>{t("sections.projects.weather-app.todos.internazionalitation")}</li>
            </ul>
          </div>
          <div className="card-item-footer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://weather-app-navy-chi.vercel.app/"
            >
              {t("sections.projectsSections.commonButton")}
            </a>
            <a
              href="https://github.com/Rick1196/weather-app"
              rel="noreferrer"
              target="_blank"
            >
              {t("sections.projectsSections.repoButton")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSections;
