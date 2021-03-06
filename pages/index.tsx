import Head from "next/head";
import Link from "next/link";
import React from "react";
import Content from "../src/components/content";
import Footer from "../src/components/footer";
import NavBar from "../src/components/nav-bar";
import { loadStaticProps } from "../src/functions/get-static-props";

const Portfolio = () => {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Ricardo Manuel Perez Plata" />
        <meta name="owner-name" content="Ricardo Perez" />
        <meta name="onwer-fullname" content="Ricardo Manuel Perez" />
        <meta name="project-title" content="Ricardo Perez Portfolio" />
        <meta name="project-alt-title" content="Ricardo Perez Work" />
        <meta name="project-secont-alt-title" content="Ricardo Perez Projects" />
        <meta name="project-es-title" content="Proyectos de Ricardo Perez" />
        <meta name="project-es-alt-title" content="Trabajo de Ricardo Perez" />
        <link rel="icon" href="/icons/favicon.png" />
        <title>Ricardos Work Portafolio</title>
      </Head>
      <NavBar>
        <Link href="/contact" passHref>
          <button className="action-button">Contact me</button>
        </Link>
      </NavBar>
      <Content />
      <Footer />
    </>
  );
};
export default Portfolio;
export const getStaticProps = loadStaticProps;
