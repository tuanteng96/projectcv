import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="wrapper">
            {/* Sidebar */}
            <aside className="sidebar" data-simplebar>
                <div>
                    <div className="avatar-wrap">
                    <svg className="avatar avatar--180" viewBox="0 0 188 188">
                        <g className="avatar__box">
                        <image xlinkHref="http://netgon.net/artstyles/v-card2/assets/img/avatar-1.jpg" height="100%" width="100%" />
                        </g>
                    </svg>
                    </div>
                    <div className="text-center">
                    <h3 className="title sidebar__user-name"><span className="weight--500">Felecia</span> Brown</h3>
                    <div className="badge badge--gray">Creative Director</div>
                    {/* Social */}
                    <div className="social">
                        <a className="social__link" href="https://www.facebook.com/"><i className="font-icon icon-facebook" /></a>
                        <a className="social__link" href="https://www.behance.com/"><i className="font-icon icon-twitter" /></a>
                        <a className="social__link" href="https://www.linkedin.com/"><i className="font-icon icon-linkedin2" /></a>
                    </div>
                    </div>
                    <ul className="contact-block">
                    <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Birthday">
                        <i className="font-icon icon-calendar2" />March 25, 1995
                    </li>
                    <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Address">
                        <i className="font-icon icon-map-pin" />San-Francisco, USA
                    </li>
                    <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
                        <a href="mailto:example@mail.com"><i className="font-icon icon-mail" />example@mail.com</a>
                    </li>
                    <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Phone">
                        <i className="font-icon icon-smartphone" />+1 (070) 123-4567
                    </li>
                    <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Skype">
                        <a href="skype:skype-example"><i className="font-icon icon-skype" />Felecia_Brown</a>
                    </li>
                    </ul>
                </div>
                <a className="btn" href="#"><i className="font-icon icon-download" /> Download CV</a>
            </aside>
            {/* Content */}
            <div className="content" data-simplebar>
            {/* About */}
            <div className="section mt-0">
                <h1 className="title title--h1 title__separate">About Me</h1>
                <div className="pt-2 pt-sm-3">
                <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p className="mb-0">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across
                    your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                </div>
            </div>
            {/* What */}
            <div className="section">
                <h2 className="title title--h2">What I'm Doing</h2>
                <div className="row">
                {/* Case Item */}
                <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                    <img className="case-item__icon" src="http://netgon.net/artstyles/v-card2/assets/icons/icon-design.svg" alt="" />
                    <h3 className="title title--h3">Web Design</h3>
                    <p className="case-item__caption">The most modern and high-quality design made at a professional level. </p>
                    </div>
                </div>
                {/* Case Item */}
                <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                    <img className="case-item__icon" src="http://netgon.net/artstyles/v-card2/assets/icons/icon-dev.svg" alt="" />
                    <h3 className="title title--h3">Web Development</h3>
                    <p className="case-item__caption">High-quality development of sites at the professional level.</p>
                    </div>
                </div>
                {/* Case Item */}
                <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                    <img className="case-item__icon" src="http://netgon.net/artstyles/v-card2/assets/icons/icon-app.svg" alt="" />
                    <h3 className="title title--h3">Mobile Apps</h3>
                    <p className="case-item__caption">Professional development of applications for iOS and Android.</p>
                    </div>
                </div>
                {/* Case Item */}
                <div className="col-12 col-lg-6 case-item-wrap">
                    <div className="case-item">
                    <img className="case-item__icon" src="http://netgon.net/artstyles/v-card2/assets/icons/icon-photo.svg" alt="" />
                    <h3 className="title title--h3">Photography</h3>
                    <p className="case-item__caption">I make high-quality photos of any category at a professional level.</p>
                    </div>
                </div>
                </div>
            </div>
            {/* Testimonials */}
            <div className="section">
                <h2 className="title title--h2">Testimonials</h2>
                <div className="swiper-container js-carousel-review">
                <div className="swiper-wrapper">
                    {/* Item review */}
                    <div className="swiper-slide review-item">
                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                        <image xlinkHref="http://netgon.net/artstyles/v-card2/assets/img/avatar-2.jpg" height="100%" width="100%" />
                        </g>
                    </svg>
                    <h4 className="title title--h3">Daniel Lewis</h4>
                    <p className="review-item__caption">Felicia was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.</p>
                    </div>
                    {/* Item review */}
                    <div className="swiper-slide review-item">
                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                        <image xlinkHref="http://netgon.net/artstyles/v-card2/assets/img/avatar-3.jpg" height="100%" width="100%" />
                        </g>
                    </svg>
                    <h4 className="title title--h3">Jessica Miller</h4>
                    <p className="review-item__caption">Felicia was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.</p>
                    </div>
                    {/* Item review */}
                    <div className="swiper-slide review-item">
                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                        <image xlinkHref="http://netgon.net/artstyles/v-card2/assets/img/avatar-4.jpg" height="100%" width="100%" />
                        </g>
                    </svg>
                    <h4 className="title title--h3">Tanya Ruiz</h4>
                    <p className="review-item__caption">Felicia was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.</p>
                    </div>
                    {/* Item review */}
                    <div className="swiper-slide review-item">
                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                        <g className="avatar__hexagon">
                        <image xlinkHref="http://netgon.net/artstyles/v-card2/assets/img/avatar-5.jpg" height="100%" width="100%" />
                        </g>
                    </svg>
                    <h4 className="title title--h3">Thomas Castro</h4>
                    <p className="review-item__caption">Felicia was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.</p>
                    </div>
                </div>
                <div className="swiper-pagination" />
                </div>
            </div>
            {/* Clients */}
            <div className="section">
                <h2 className="title title--h2">Clients</h2>
                <div className="swiper-container js-carousel-clients">
                <div className="swiper-wrapper">
                    {/* Item client */}
                    <div className="swiper-slide">
                    <a href="#"><img src="http://netgon.net/artstyles/v-card2/assets/img/logo-partner.svg" alt="Logo" /></a>
                    </div>
                    {/* Item client */}
                    <div className="swiper-slide">
                    <a href="#"><img src="http://netgon.net/artstyles/v-card2/assets/img/logo-partner.svg" alt="Logo" /></a>
                    </div>
                    {/* Item client */}
                    <div className="swiper-slide">
                    <a href="#"><img src="http://netgon.net/artstyles/v-card2/assets/img/logo-partner.svg" alt="Logo" /></a>
                    </div>
                    {/* Item client */}
                    <div className="swiper-slide">
                    <a href="#"><img src="http://netgon.net/artstyles/v-card2/assets/img/logo-partner.svg" alt="Logo" /></a>
                    </div>
                </div>
                <div className="swiper-pagination" />
                </div>
            </div>
            </div>
            {/* Content End */}
        </div>
        );
    }
}

export default About;