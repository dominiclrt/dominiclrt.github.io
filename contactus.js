import React, { Component } from 'react';

class contactus extends Component {
    render() {
        return (
            <React.Fragment>
                {<section id="contact">
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns">
                            {/* form */}
                            <form action method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input type="text" defaultValue size={35} id="contactName" name="contactName" placeholder="Name" value="" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" placeholder="Email" value="" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" placeholder="Subject" value="" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" placeholder="Message Body" defaultValue={""} />
                                    </div>
                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img alt src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form> {/* Form End */}
                            {/* contact-warning */}
                            <div id="message-warning"> Error boy</div>
                            {/* contact-success */}
                            <div id="message-success">
                                <i className="fa fa-check" />Your message was sent, thank you!<br />
                            </div>
                        </div>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Phone number</h4>
                                <p className="address">
                                    Dominic Tan<br />
                                    Burnaby, BC<br />
                                    <span>(778)322-4077</span>
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>
                }
                <header id="home">
                    ....
            </header>
            </React.Fragment>);
    }
}

export default contactus;