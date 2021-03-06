import React, { Component } from 'react';

class resume extends Component {
    render() {
        return (
            <React.Fragment>
                {<section id="resume">
                    {/* Education
              ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>British Columbia Institute of Technology</h3>
                                    <p className="info">Computer Systems Technology - Web and Mobile <span>•</span> <em className="date">September 2016</em></p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
              ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>DMG Blockchain Solutions</h3>
                                    <p className="info">Junior Developer <span>•</span> <em className="date">April 2019 - June 2019</em></p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>SCL Fitness</h3>
                                    <p className="info">Junior Developer <span>•</span> <em className="date">January 2018 - May 2018</em></p>
                                    <p>
                                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                        </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
              ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt.
                    </p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand react" /><em>React</em></li>
                                    <li><span className="bar-expand java" /><em>Java</em></li>
                                    <li><span className="bar-expand node" /><em>NodeJS</em></li>
                                    <li><span className="bar-expand swift" /><em>Swift</em></li>
                                    <li><span className="bar-expand office" /><em>Microsoft Office</em></li>
                                    <li><span className="bar-expand adobe" /><em>Adobe Creative Cloud</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
                }
                <header id="home">
                    ....
            </header>
            </React.Fragment>
        );
    }
}

export default resume;