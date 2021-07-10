import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import PersonalInfoSection from '../src/compontents/sections/personal-info-section/personal-info-container';
import React from 'react';
import ContactSection from '../src/compontents/sections/contact-section/contact-container';
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Ricardos Work Portafolio</title>
        <meta name="description" content="Ricardo Manuel Perez Plata" />
        <meta name="description" content="Ricardo Perez" />
        <meta name="description" content="Ricardo Manuel Perez" />
        <meta name="description" content="Ricardo Perez Portafolio" />
        <meta name="description" content="Ricardo Perez Work" />
        <meta name="description" content="Ricardo Perez Projects" />
        <meta name="description" content="Proyectos de Ricardo Perez" />
        <meta name="description" content="Trabajo de Ricardo Perez" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>

      <nav>
        <div id="nav-actions" className="nav-actions">
          <button className="nav-action-lang" id="language">
            <span><i className="fas fa-language"></i></span>
          </button>
          <a className="nav-action" href="#personal-data">
            <span><i className="fas fa-id-card-alt"></i></span>
            <span className="button-text">Personal Info</span>
          </a>
          <a className="nav-action" href="#projects-rails">
            <span><i className="fas fa-briefcase"></i></span>
            <span className="button-text">Projects</span>
          </a>
          <a className="nav-action" href="#contact-form">
            <span><i className="fas fa-inbox"></i></span>
            <span className="button-text">Contact</span>
          </a>
        </div>
        <div id="nav-title" className="nav-title">
          <p className="desktop-title">Ricardo Perez Portafolio</p>
          <p className="mobile-title">Portafolio</p>
        </div>
      </nav>

      <main className={styles.main}>
        <section id="personal-data" className="section-container personal-data">
          <PersonalInfoSection />
        </section>
        <section id="projects-rail" className="section-container">

        </section>
        <section id="contact-form" className="section-container">
          <ContactSection />
        </section>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
