import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <React.Fragment>
                {<footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/dominiclrt"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.linkedin.com/in/dominiclrt/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://github.com/dominiclrt"><i className="fa fa-github" /></a></li>
                                <li><a href="https://www.instagram.com/dominiclrt/"><i className="fa fa-instagram" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2019 Dominic Tan</li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>
                }
                <header id="home">
                    ....
            </header>
            </React.Fragment>
        );
    }
}

export default footer;