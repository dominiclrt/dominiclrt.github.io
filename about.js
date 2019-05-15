import React, { Component } from 'react';

class about extends Component {
    render() {
        return (
            <React.Fragment>
                {<section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>Recent graduate of BCIT’s Computer Systems Technology program. I specialized
                            in Web & Mobile development. Goal-driven, dedicated, and open to learning are
                            all things I would describe myself as. I am a team player, lively, and approachable
                            individual currently looking for opportunities to grow and contribute to IT companies.
                </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Dominic Tan</span><br />
                                        <span>Burnaby, BC
                      </span><br />
                                        <span>(778)322-4077</span><br />
                                        <span>dominiclrt@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-eye" />View Resume</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
                }
                <header id="home">
                    ....
            </header>
            </React.Fragment>
        );
    }
}

export default about;