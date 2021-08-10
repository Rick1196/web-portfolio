import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../src/components/footer";
import NavBar from "../src/components/nav-bar";
import ContactSection from "../src/components/contact-container";
import { loadStaticProps } from "../src/functions/get-static-props";
import Head from "next/head";
interface ContactDataI {
  title: string;
  email: string;
  message: string;
}
const ContactPage = () => {
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
        <Link href="/" passHref>
          <button className="action-button">Home</button>
        </Link>
      </NavBar>
      <ContactSection></ContactSection>
      <Footer />
    </>
  );
};

export default ContactPage;
export const getStaticProps = loadStaticProps;
