import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import PersonalInfoSection from '../src/compontents/sections/personal-info-section/personal-info-container';
import React from 'react';
import ContactSection from '../src/compontents/sections/contact-section/contact-container';
import ProjectsSections from '../src/compontents/sections/projects-section/projects-container';
import Link from 'next/link';
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Ricardos Work Portafolio</title>
        <meta name="description" content="Ricardo Manuel Perez Plata" />
        <meta name="owner-name" content="Ricardo Perez" />
        <meta name="onwer-fullname" content="Ricardo Manuel Perez" />
        <meta name="project-title" content="Ricardo Perez Portfolio" />
        <meta name="project-alt-title" content="Ricardo Perez Work" />
        <meta name="project-secont-alt-title" content="Ricardo Perez Projects" />
        <meta name="project-es-title" content="Proyectos de Ricardo Perez" />
        <meta name="project-es-alt-title" content="Trabajo de Ricardo Perez" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>

      <nav>
        <div id="nav-actions" className="nav-actions">
          <button name="translate" className="nav-action-lang" id="language">
            <span><i className="fas fa-language"></i></span>
          </button>
          <a className="nav-action" href="#personal-data">
            <span><i className="fas fa-id-card-alt"></i></span>
            <span className="button-text">Personal Info</span>
          </a>
          <a className="nav-action" href="#projects-rail">
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
          <ProjectsSections />
        </section>
        <section id="contact-form" className="section-container-sm">
          <ContactSection />
        </section>
      </main>
      <footer className="footer">
        <div>
          <div>
            <Link href="https://www.linkedin.com/in/ricardo-manuel-p%C3%A9rez-plata-533037176/" passHref><a target="_blank"> <i className="fab fa-linkedin"></i></a></Link>
          </div>
            <div></div>
            <div></div>
          </div>
          <div><strong> Ricardo Manuel Perez</strong>, Web Developer</div>
      </footer>
    </div>
      )
}
