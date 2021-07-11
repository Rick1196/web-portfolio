import { useEffect, useState } from "react";
// font awsome icons
import "@fortawesome/fontawesome-free/css/all.min.css";
// profile pic  import
import profilePic from '../../../../public/pictures/self.jpg'

// icons images import
import nextLogo from '../../../../public/icons/next.jpg'
import express from '../../../../public/icons/express.jpg'
import flask from '../../../../public/icons/flask-logo.png'
import mongoDb from '../../../../public/icons/mongodb-logo.png'
import mySql from '../../../../public/icons/my-sql.png'
import postgre from '../../../../public/icons/Postgre.png'
import sqlServer from '../../../../public/icons/sql-server-min.png'
import firestore from '../../../../public/icons/logo-small.png'
// filter profile pic
import backgroundPic from '../../../../public/pictures/picture-background.png'
import Image from 'next/image'
import moment from 'moment';

const PersonalInfoSection: React.ComponentType<Record<string, never>> = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(0);
    useEffect(() => {
        const elementCards = document.getElementsByClassName('info-card');
        setNumberOfCards(elementCards.length - 1);
    }, [])
    const changeCardLeft = () => {
        if (activeCard === 0) {
            setActiveCard(numberOfCards);
        } else {
            setActiveCard(activeCard - 1);
        }
    }
    const changeCardRight = () => {
        if (activeCard === (numberOfCards)) {
            setActiveCard(0);
        } else {
            setActiveCard(activeCard + 1);
        }
    }
    const calculateAge = () => {
        const age = moment(new Date().toISOString()).diff(moment(new Date('11/11/1996').toISOString()), 'years');
        return age
    }
    return (
        <>
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
                            I&apos;m {calculateAge()} years old</p>
                        <p>
                            I&apos;m a huge fan of video games and science fiction, I try to organize me to have time to play video games at least twice a week,
                            spend enough time with my family and friends and have time for my self as well as my work and keep learning  web development stuff.
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
                                    <li><span><i  className="fab fa-js"></i></span>Java Script</li>
                                    <li><span><i className="fab fa-css3-alt"></i></span>CSS</li>
                                    <li><span><i className="fab fa-python"></i></span>Python</li>
                                </ul>
                            </div>
                            <div>
                                <label htmlFor="front-end">Front end</label>
                                <ul id="front-end">
                                    <li><span><i className="fab fa-angular"></i></span>Angular</li>
                                    <li><span><i className="fab fa-react"></i></span>React</li>
                                    <li><span><Image className="circle-picture" alt="next-logo" src={nextLogo} height={14} width={16} /></span>Next</li>
                                </ul>
                            </div>
                            <div>
                                <label htmlFor="back-end">Back end</label>
                                <ul id="back-end">
                                    <li><span><Image className="circle-picture" alt="express-logo" src={express} height={14} width={16} /></span>Express JS</li>
                                    <li><span><Image className="circle-picture" alt="flask-logo" src={flask} height={14} width={16} /></span>Flask</li>
                                </ul>
                            </div>
                            <div>
                                <label htmlFor="database">Databases</label>
                                <ul id="database">
                                    <li><span><Image className="circle-picture" alt="flask-logo" src={mySql} height={14} width={16} /></span>My SQL</li>
                                    <li><span><Image className="circle-picture" alt="postgre-logo" src={postgre} height={14} width={16} /></span>PostgreSQL</li>
                                    <li><span><Image className="circle-picture" alt="sql-logo" src={sqlServer} height={14} width={16} /></span>SQL Server</li>
                                    <li><span><Image className="circle-picture" alt="mongo-logo" src={mongoDb} height={14} width={16} /></span>Mongo DB</li>
                                    <li><span><Image className="circle-picture" alt="firestore-logo" src={firestore} height={14} width={16} /></span>Firestore</li>
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
        </>

    );

}

export default PersonalInfoSection;
