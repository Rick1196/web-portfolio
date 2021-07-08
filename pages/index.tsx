import Head from 'next/head'
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from '../styles/Home.module.scss'
import profilePic from '../public/pictures/self.jpg'
import backgroundPic from '../public/pictures/picture-background.png'
import Image from 'next/image'

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
          <a className="nav-action" href="#projects-rails">
            <span><i className="fas fa-briefcase"></i></span>
            <span className="button-text">Projects</span>
          </a>
          <a className="nav-action" href="#personal-data">
            <span><i className="fas fa-id-card-alt"></i></span>
            <span className="button-text">Personal Info</span>
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

          <div id="picture-container" className="picture-container">
            <div className="circle-picture-container">
              <Image className="circle-picture" alt="ricardo-picture" src={profilePic} height={500} />
            </div>
            <div className="filter-picture-container">
              <Image alt="ricardo-picture" className="texture" src={backgroundPic} height={500} width={500} />
            </div>
          </div>
          <div id="info-container" className="info-container">
            <input type="radio" id="trigger1" name="slider"/>
            <label htmlFor="trigger1"></label>
            <div className="slide"></div>


          </div>
        </section>
        <section id="projects-rail" className="section-container">

        </section>
        <section id="contact-form" className="section-container">
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
