import React from 'react'

export default function Contact() {
    return (
        <section className="contact-section" id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 order-2 order-md-1">
                        <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                            <div className="section-header">
                                <h2 className="section-title">Let’s work together!</h2>
                            </div>
                            <div className="tj-contact-form">
                                <form id="contact-form">
                                    <div className="row gx-3">
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input
                                                    type="text"
                                                    name="conName"
                                                    id="conName"
                                                    placeholder="First name"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input
                                                    type="text"
                                                    name="conLName"
                                                    id="conLName"
                                                    placeholder="Last name"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input
                                                    type="email"
                                                    name="conEmail"
                                                    id="conEmail"
                                                    placeholder="Email address"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input
                                                    type="tel"
                                                    name="conPhone"
                                                    id="conPhone"
                                                    placeholder="Phone number"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <select name="conService" id="conService">
                                                    <option value="">
                                                        Choose Service
                                                    </option>
                                                    <option>Full Stack web development</option>
                                                    <option>Frontend development</option>
                                                    <option>backend development</option>
                                                    <option>Api development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <textarea
                                                    name="conMessage"
                                                    id="conMessage"
                                                    placeholder="Message"
                                                    defaultValue={
                                                        '                          </div>\n                        </div>\n                        <div className="col-12">\n                          <div className="form_btn">\n                            <button type="submit" className="btn tj-btn-primary">\n                              Send Message\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n              <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">\n                <div className="contact-info-list">\n                  <ul className="ul-reset">\n                    <li\n                      className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"\n                      data-wow-delay=".4s"\n                    >\n                      <div className="text-box">\n                        <p>Phone</p>\n                        <a href="https://wa.me/923256234131">+92 325 6234131</a>\n                      </div>\n                    </li>\n                    <li\n                      className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"\n                      data-wow-delay=".5s"\n                    >\n                      <div className="text-box">\n                        <p>Email</p>\n                        <a href="mailto:ahadali0500@gmail.com">\n                          ahadali0500@gmail.com\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        {/* CONTACT SECTION END */}\n        {/* BEGIN: Contact Form Success Modal Message */}\n        <div className="modal contact_modal" id="message_sent" tabIndex={-1}>\n          <div className="modal-dialog">\n            <div className="modal-content">\n              <div className="modal-header">\n                <span className="modal-title">\n                  <strong>Message Sent Successfully</strong>\n                </span>\n                <button\n                  type="button"\n                  className="close"\n                  data-bs-dismiss="modal"\n                  aria-label="Close"\n                >\n                  <i className="fas fa-times" />\n                </button>\n              </div>\n              <div className="modal-body">\n                <p>\n                  Thank you for contacting us. We will get back to you shortly.\n                  <br />\n                  Have a great day!\n                </p>\n              </div>\n              <div className="modal-footer">\n                <button type="button" className="btn" data-bs-dismiss="modal">\n                  Close\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        {/* END: Contact Form Success Modal Message */}\n        {/* BEGIN: Contact Form Fail Modal Message */}\n        <div className="modal contact_modal failed" id="message_fail" tabIndex={-1}>\n          <div className="modal-dialog">\n            <div className="modal-content">\n              <div className="modal-header">\n                <span className="modal-title">\n                  <strong>Error</strong>\n                </span>\n                <button\n                  type="button"\n                  className="close"\n                  data-bs-dismiss="modal"\n                  aria-label="Close"\n                >\n                  <i className="fas fa-times" />\n                </button>\n              </div>\n              <div className="modal-body">\n                <p>Oops! Something went wrong, please try again.</p>\n              </div>\n              <div className="modal-footer">\n                <button type="button" className="btn" data-bs-dismiss="modal">\n                  Close\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        {/* END: Contact Form Fail Modal Message End */}\n'
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
