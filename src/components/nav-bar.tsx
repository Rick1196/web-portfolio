import { i18n } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

const NavBar = (props: { children: JSX.Element }) => {
  const router = useRouter()
  const languageSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    router.push(router.route, router.route, { locale: event.target.value });
  }
  return (
    <nav>
      <section id="logo-section" className="nav-start">
        <select defaultValue={i18n?.language} onChange={languageSelect} className="base-select" name="lang-select" id="lang-select">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </section>
      <section id="buttons-section" className="nav-end">
        {props.children}
      </section>
    </nav>
  );
};

export default NavBar;
