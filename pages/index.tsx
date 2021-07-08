import Head from 'next/head'
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from '../styles/Home.module.scss'
import profilePic from '../public/pictures/self.jpg'
import backgroundPic from '../public/pictures/picture-background.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);
  useEffect(() => {
    const elementCards = document.getElementsByClassName('info-card');
    setNumberOfCards(elementCards.length - 1);
  }, [])
  const changeCardLeft = () => {
    console.log('changeCardLeft', numberOfCards, activeCard, typeof(activeCard))
    if (activeCard === 0) {
      setActiveCard(numberOfCards);
    }else{
      setActiveCard(activeCard - 1);
    }
  }
  const changeCardRight = () => {
    console.log('changeCardRight', activeCard, numberOfCards)
    if (activeCard === (numberOfCards)) {
      console.log('changeCardRight reset to 0', activeCard, numberOfCards, typeof(activeCard))
      setActiveCard(0);
    }else{
      setActiveCard(activeCard + 1);
    }
  }
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

          <div id="picture-container" className="picture-container">
            <div className="circle-picture-container">
              <Image className="circle-picture" alt="ricardo-picture" src={profilePic} height={500} />
            </div>
            <div className="filter-picture-container">
              <Image alt="ricardo-picture" className="texture" src={backgroundPic} height={500} width={500} />
            </div>
          </div>
          <div id="info-container" className="info-container">
            <div className={(activeCard === 0) ? "info-card card-active" : "info-card"}>
              <div className="title">
                About my self
              </div>
              <div className="card-content">
                <p> Hi there, I&apos;m <strong>Ricardo Perez</strong>, I&apos;m from Mexico and currently I live at Mexico City.
                  I&apos;m 24 years old</p>
                <p>
                  I&apos;m a huge fan of video games and science fiction, I try to organize my time to have time to play video games at least twice a week,
                  spend enough time with my family and friends and have time for my self as well as my work and keep learning and web development stuff.
                </p>
              </div>
              <div className="card-footer">
                <button className="button-left" onClick={() => changeCardLeft()}><span><i className="fas fa-chevron-left"></i></span></button>
                <button className="button-right" onClick={() => changeCardRight()}><span><i className="fas fa-chevron-right"></i></span></button>
              </div>
            </div>
            <div className={(activeCard === 1) ? "info-card card-active" : "info-card"}>
              <div className="title">
                My background
              </div>
              <div className="card-content">
                <p>
                  For the last two years I&apos;ve been a web developer in a professional level, the first nine months I work as a full stack developer,
                  then I moved to a front end position, where I currently stay working; Before that, when I was at college,
                  I participate as volunteer developing projects for my faculty alongside some of my classmates.
                </p>
              </div>
              <div className="card-footer">
                <button className="button-left" onClick={() => changeCardLeft()}><span><i className="fas fa-chevron-left"></i></span></button>
                <button className="button-right" onClick={() => changeCardRight()}><span><i className="fas fa-chevron-right"></i></span></button>
              </div>
            </div>
            <div className={(activeCard === 2) ? "info-card card-active" : "info-card"}>
              <div className="title">
                My skills
              </div>
              <div className="card-content">
                <p>
                  For the last two years I&apos;ve been a web developer in a professional level, the first nine months I work as a full stack developer,
                  then I moved to a front end position, where I currently stay working; Before that, when I was at college,
                  I participate as volunteer developing projects for my faculty alongside some of my classmates.
                </p>
              </div>
              <div className="card-footer">
                <button className="button-left" onClick={() => changeCardLeft()}><span><i className="fas fa-chevron-left"></i></span></button>
                <button className="button-right" onClick={() => changeCardRight()}><span><i className="fas fa-chevron-right"></i></span></button>
              </div>
            </div>
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
