import React, { useEffect, useState } from "react";
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
import { Trans, useTranslation } from "next-i18next";

const PersonalInfoSection: React.ComponentType<Record<string, never>> = () => {
    const { t } = useTranslation('common');
    const [activeCard, setActiveCard] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(0);
    const [age, setAge] = useState(0);
    useEffect(() => {
        setAge(calculateAge());
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
                        {t('sections.personalSection.subsSections.aboutMe.title')}
                    </div>
                    <div className="card-content">
                        <p>
                            <Trans i18nKey="sections.personalSection.subsSections.aboutMe.content" values={{ age: age }}>
                            </Trans>
                        </p>
                        <p>
                            {t('sections.personalSection.subsSections.aboutMe.hobbies')}
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="button-left" onClick={() => changeCardLeft()}><span><i className="fas fa-chevron-left"></i></span></button>
                        <button className="button-right" onClick={() => changeCardRight()}><span><i className="fas fa-chevron-right"></i></span></button>
                    </div>
                </div>
                <div className={(activeCard === 1) ? "info-card card-active" : "info-card"}>
                    <div className="title">
                        {t('sections.personalSection.subsSections.background.title')}
                    </div>
                    <div className="card-content">
                        <p>
                            {t('sections.personalSection.subsSections.background.content')}
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="button-left" onClick={() => changeCardLeft()}><span><i className="fas fa-chevron-left"></i></span></button>
                        <button className="button-right" onClick={() => changeCardRight()}><span><i className="fas fa-chevron-right"></i></span></button>
                    </div>
                </div>
                <div className={(activeCard === 2) ? "info-card card-active" : "info-card"}>
                    <div className="title">
                        {t('sections.personalSection.subsSections.skills.title')}
                    </div>
                    <div className="card-content">
                        <div className="list-grid">
                            <div>
                                <label htmlFor="languages">{t('sections.personalSection.subsSections.skills.skills.languages')}
                                </label>
                                <ul id="languages">
                                    <li><span><i className="fab fa-html5"></i></span>HTML</li>
                                    <li><span><i className="fab fa-css3-alt"></i></span>CSS</li>
                                    <li><span><i className="fab fa-js"></i></span>Java Script</li>
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
                                <label htmlFor="database">{t('sections.personalSection.subsSections.skills.skills.databases')}</label>
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
