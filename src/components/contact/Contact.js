import React, { Component } from 'react';

class Contact extends Component {
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
                <h1 className="title title--h1 title__separate">Contact</h1>
              </div>
              {/* Contact */}
              <div className="map section" id="map" />
              <h2 className="title title--h2">Contact Form</h2>
              <form id="contact-form" className="contact-form" data-toggle="validator">
                <div className="row">
                  <div className="form-group col-12 col-md-6">
                    <i className="font-icon icon-user" />
                    <input type="text" className="input input__icon form-control" id="nameContact" name="nameContact" placeholder="Full name" required="required" autoComplete="on" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')" />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <i className="font-icon icon-at" />
                    <input type="email" className="input input__icon form-control" id="emailContact" name="emailContact" placeholder="Email address" required="required" autoComplete="on" oninvalid="setCustomValidity('Email is incorrect')" onkeyup="setCustomValidity('')" />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-12 col-md-12">
                    <textarea className="textarea form-control" id="messageContact" name="messageContact" placeholder="Your Message" rows={4} required="required" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')" defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                    <div id="validator-contact" className="hidden" />
                  </div>
                  <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                    <button type="submit" className="btn"><i className="font-icon icon-send" /> Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* Content End */}
          </div>
    
        );
    }
}

export default Contact;