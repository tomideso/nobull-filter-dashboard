import React from 'react'
import LoginForm from './LoginForm'
import classes from './Login.module.css'



function LoginContainer() {

    return (
        <section>
            <section className="uk-section uk-height-small uk-section-primary">
            </section>
            <section className={["uk-container uk-position-relative uk-position-z-index",classes.MarginTop].join(" ")}>
                <div className="uk-grid-small uk-flex-around uk-grid">
                    <div>
                        <div>
                            <h3 className="tm-text-white">Welcome to your tele-health clinic</h3>
                            <div className="uk-margin-large-top">
                                <dl className="uk-description-list">
                                    <dt className="uk-text-primary">Appointment Booking</dt>
                                    <dd>Manage your appointment</dd>
                                    <dt className="uk-text-primary">Tele-Medicine Service</dt>
                                    <dd>Video consultation with health care provider 24x7</dd>
                                    <dt className="uk-text-primary">Patient Health Record</dt>
                                    <dd>Your patient's health record available to you</dd>
                                    <dt className="uk-text-primary">Encrypted communication</dt>
                                    <dd>Your health care data is highly secure</dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* login form column */}
                    <div className="uk-width-1-3@s">
                        <LoginForm />
                    </div>
                </div>
            </section>
            <p className="uk-container">For any help or guidance please e-mail us <a className="uk-link" href="mailto:support@onthemend.com.au">support@onthemend.com.au</a></p>
        </section>

    )
}


export default LoginContainer