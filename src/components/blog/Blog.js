import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Blog extends Component {

    constructor(props) {
      super(props);
      this.state = {
        loading : true,
        arrNews : null
      }
    }

    async componentDidMount() {
      const url = "https://3amdspa.com/app/index.aspx?cmd=home2";
      const response = await fetch(url);
      const data = await response.json();

       this.setState({
         arrNews : data.news,
         loading: false
       })
      console.log(data.news);
    }
    

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
            <h1 className="title title--h1 title__separate">Blog</h1>
          </div>
          {/* News */}
          <div className="news-grid section">
            {/* Post */}
            { this.state.loading ? (<div>Loading ....</div>) : (

                Object.keys(this.state.arrNews).map((item, i) =>
                  (
                    <article className="news-item box" key={i}>
                      <div className="news-item__image-wrap overlay overlay--45">
                        <div className="news-item__date">16<span>Sep</span></div>
                        <a className="news-item__link" href="single-post.html" />
                        <img className="cover lazyload" src={this.state.arrNews[item].RawThumb} alt="" />
                      </div>
                      <div className="news-item__caption">
                        <h3 className="title title--h3">
                          {this.state.arrNews[item].Title}
                        </h3>
                        <p>{ ReactHtmlParser(this.state.arrNews[item].Desc) }</p>
                      </div>
                    </article>
                  ))

            )} 
            {/* Post */}
            
          </div>
        </div>
        {/* Content End */}
      </div>
        );
    }
}

export default Blog;