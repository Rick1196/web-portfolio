import Head from 'next/head'
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from '../styles/Home.module.scss'
import profilePic from '../public/pictures/self.jpg'

//icons
import nextLogo from '../public/icons/next.jpg'
import express from '../public/icons/express.jpg'
import flask from '../public/icons/flask-logo.png'
import mongoDb from '../public/icons/mongodb-logo.png'
import mySql from '../public/icons/my-sql.png'
import postgre from '../public/icons/Postgre.png'
import sqlServer from '../public/icons/sql-server-min.png'
import firestore from '../public/icons/logo-small.png'

import backgroundPic from '../public/pictures/picture-background.png'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
interface ContactDataI { title: string, email: string, message: string };
export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [loadingForm, setLoadingForm] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactDataI>();
  useEffect(() => {
    const elementCards = document.getElementsByClassName('info-card');
    setNumberOfCards(elementCards.length - 1);
  }, [])
  const sendMail = (data: ContactDataI) => {
    setLoadingForm(true);
    console.log('Sending', data);
    fetch('/api/email-service', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      reset({ email: '', title: '', message: '' });
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
      setLoadingForm(false);
    })
  }
  const changeCardLeft = () => {
    console.log('changeCardLeft', numberOfCards, activeCard, typeof (activeCard))
    if (activeCard === 0) {
      setActiveCard(numberOfCards);
    } else {
      setActiveCard(activeCard - 1);
    }
  }
  const changeCardRight = () => {
    console.log('changeCardRight', activeCard, numberOfCards)
    if (activeCard === (numberOfCards)) {
      console.log('changeCardRight reset to 0', activeCard, numberOfCards, typeof (activeCard))
      setActiveCard(0);
    } else {
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
                My Hard skills
              </div>
              <div className="card-content">
                <div className="list-grid">
                  <div>
                    <label htmlFor="languages">Languages</label>
                    <ul id="languages">
                      <li><span><i className="fab fa-js"></i></span>Java Script</li>
                      <li><span><i className="fab fa-css3-alt"></i></span>CSS</li>
                      <li><span><i className="fab fa-python"></i></span>Python</li>
                    </ul>
                  </div>
                  <div>
                    <label htmlFor="front-end">Front end</label>
                    <ul id="front-end">
                      <li><span><i className="fab fa-angular"></i></span>Angular</li>
                      <li><span><i className="fab fa-react"></i></span>React</li>
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={nextLogo} height={14} width={16} /></span>Next</li>
                    </ul>
                  </div>
                  <div>
                    <label htmlFor="back-end">Back end</label>
                    <ul id="back-end">
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={express} height={14} width={16} /></span>Express JS</li>
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={flask} height={14} width={16} /></span>Flask</li>
                    </ul>
                  </div>
                  <div>
                    <label htmlFor="database">Databases</label>
                    <ul id="database">
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={mySql} height={14} width={16} /></span>My SQL</li>
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={postgre} height={14} width={16} /></span>PostgreSQL</li>
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={sqlServer} height={14} width={16} /></span>SQL Server</li>
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={mongoDb} height={14} width={16} /></span>Mongo DB</li>
                      <li><span><Image className="circle-picture" alt="csharp-logo" src={firestore} height={14} width={16} /></span>Firestore</li>
                    </ul>
                  </div>
                </div>
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
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-title">Contact Me</div>
              <form className="contact-form" onSubmit={handleSubmit(sendMail)}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input  {...register("title", { required: true })} type="text" id="title" name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Your email address</label>
                  <input {...register("email", { required: true })} type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="Message">Message</label>
                  <textarea {...register("message", { required: true })} name="message" id="message" cols={30} rows={10}></textarea>
                </div>
                <div className="form-footer">
                  <button type='submit' className="submit-button" disabled={loadingForm}>
                    Send
                    {(loadingForm) && <div className="loading-spinner"></div>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
