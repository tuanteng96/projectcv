import React, { Component } from 'react';

class Portfolio extends Component {
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
            <h1 className="title title--h1 title__separate">Portfolio</h1>
          </div>
          {/* Filter */}
          <div className="select section">
            <span className="placeholder">Select category</span>
            <ul className="filter">
              <li className="filter__item">Category</li>
              <li className="filter__item active" data-filter="*"><a className="filter__link active" href="#filter">All</a></li>
              <li className="filter__item" data-filter=".category-concept"><a className="filter__link" href="#filter">Concept</a></li>
              <li className="filter__item" data-filter=".category-design"><a className="filter__link" href="#filter">Design</a></li>
              <li className="filter__item" data-filter=".category-life"><a className="filter__link" href="#filter">Life</a></li>
            </ul>
            <input type="hidden" name="changemetoo" />
          </div>
          {/* Content */}
          <div className="gallery-grid js-grid js-filter-container">
            <div className="gutter-sizer" />
            {/* Item 1 */}
            <figure className="gallery-grid__item category-concept">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_01.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Half Avocado</h4>
                <span className="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>
            {/* Item 2 */}
            <figure className="gallery-grid__item category-concept">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_02.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Pink Flamingo</h4>
                <span className="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>
            {/* Item 3 */}
            <figure className="gallery-grid__item category-design">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_03.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Abstract</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>
            {/* Item 4 */}
            <figure className="gallery-grid__item category-design">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_04.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Abstract #2</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>
            {/* Item 5 */}
            <figure className="gallery-grid__item category-design">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_05.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Abstract #3</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>
            {/* Item 6 */}
            <figure className="gallery-grid__item category-life">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_06.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Golden Gate</h4>
                <span className="gallery-grid__category">Life</span>
              </figcaption>
            </figure>
            {/* Item 7 */}
            <figure className="gallery-grid__item category-concept">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_07.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Peach</h4>
                <span className="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>
            {/* Item 8 */}
            <figure className="gallery-grid__item category-design">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_08.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Abstract #4</h4>
                <span className="gallery-grid__category">Design</span>
              </figcaption>
            </figure>
            {/* Item 9 */}
            <figure className="gallery-grid__item category-life">
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover lazyload" src="http://netgon.net/artstyles/v-card2/assets/img/image_09.jpg" data-zoom alt="" />
              </div>
              <figcaption className="gallery-grid__caption">
                <h4 className="title title--h4 gallery-grid__title">Hedgehog</h4>
                <span className="gallery-grid__category">Life</span>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* Content End */}
      </div>
        );
    }
}

export default Portfolio;