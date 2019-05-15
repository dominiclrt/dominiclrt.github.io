import React, { Component } from 'react';

class header extends Component {
  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        {<header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}</h1>
              <h3>I'm a <span>{resumeData.role}</span> who recently graduated from <span>{resumeData.school}'s</span> <span>{resumeData.diploma}</span> program.
              <a className="smoothscroll" href="#about">Start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.facebook.com/dominiclrt"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/dominiclrt/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/dominiclrt"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.instagram.com/dominiclrt/"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>}
        <header id="home">
          ....
            </header>
      </React.Fragment>
    );
  }
}

export default header;