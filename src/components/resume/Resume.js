import React, { Component } from 'react';

class Resume extends Component {
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
          <div className="section mt-0">
            <h1 className="title title--h1 title__separate">Resume</h1>
          </div>
          {/* Experience */}
          <div className="section">
            <h2 className="title title--h2"><img className="title-icon" src="http://netgon.net/artstyles/v-card2/assets/icons/icon-education.svg" alt="" /> Education</h2>
            <div className="timeline">
              {/* Item */}
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">University School of the Arts</h5>
                <span className="timeline__period">2007 — 2009</span>
                <p className="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </article>
              {/* Item */}
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">New York Academy of Art</h5>
                <span className="timeline__period">2005 — 2007</span>
                <p className="timeline__description">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
              </article>
              {/* Item */}
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">High School of Art and Design</h5>
                <span className="timeline__period">2003 — 2005</span>
                <p className="timeline__description">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.</p>
              </article>
            </div>
          </div>
          <div className="section">
            <h2 className="title title--h2"><img className="title-icon" src="http://netgon.net/artstyles/v-card2/assets/icons/icon-experience.svg" alt="" /> Experience</h2>
            <div className="timeline">
              {/* Item */}
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">Creative Director</h5>
                <span className="timeline__period">2015 — Present</span>
                <p className="timeline__description">Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.</p>
              </article>
              {/* Item */}
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">Art Director</h5>
                <span className="timeline__period">2013 — 2015</span>
                <p className="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </article>
              {/* Item */}
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">Web Designer</h5>
                <span className="timeline__period">2010 — 2013</span>
                <p className="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </article>
            </div>
          </div>
          {/* Skills */}
          <div className="section">
            <h2 className="title title--h2">My Skills</h2>
            <div className="box-gray">
              {/* Progress */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-text"><span>Web Design</span><span>80%</span></div>
                </div>
                <div className="progress-text"><span>Web Design</span></div>
              </div>
              {/* Progress */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-text"><span>Graphic Design</span><span>75%</span></div>
                </div>
                <div className="progress-text"><span>Graphic Design</span></div>
              </div>
              {/* Progress */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-text"><span>Photoshop</span><span>90%</span></div>
                </div>
                <div className="progress-text"><span>Photoshop</span></div>
              </div>
              {/* Progress */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-text"><span>Illustrator</span><span>50%</span></div>
                </div>
                <div className="progress-text"><span>Illustrator</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* Content End */}
      </div>
        );
    }
}

export default Resume;