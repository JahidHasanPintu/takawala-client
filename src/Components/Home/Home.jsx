import React from 'react';
import './Home.css';
import headerImage from '../../Assets/Images/main-pic-hero.png';
import Feature from './Feature/Feature';
import GetApp from './GetApp/GetApp';
import HeroCustomer from '../HeroCustomer/HeroCustomer';
const Home = () => {
    return (
        <div>
            <HeroCustomer/>
            <div className="sc-gKclnd gPKrSb">
                <picture>
                    <source media="(min-width:1025px)" srcSet={headerImage} />
                    <source media="(min-width:768px)" srcSet="/static/media/main-pic-tablet.91710c59d3cfc62d4187.jpg" />
                    <img src="/static/media/main-pic-mobile.6cefd0742015a02c5437.jpg" alt="main image" />
                </picture>
                <div className="width-wrapper">
                    <div className="content-wrapper">
                        <h1>ব্যাংক লোনের  পরিপূর্ণ সমাধান</h1>
                        <h3>নতুন উদ্যোক্তা | ছোট ব্যবসা  | কৃষি উদ্যোক্তা </h3>
                        <a href="#startBusiness" className="mokam-button">আবেদন করুন</a>
                    </div>
                </div>
            </div>
            <Feature/>
            <GetApp/>
        </div>
    );
};

export default Home;