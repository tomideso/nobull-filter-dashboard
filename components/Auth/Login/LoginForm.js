import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import classes from './Login.module.css'
import Link from 'next/link'


const LoginForm = ({
    touched = { email: '' },
    errors = { email: '' },
    isSubmitting
}) => {


    return (

        <div className="uk-box-shadow-small uk-padding-small uk-background-default uk-border-rounded">
            <h4 className="">Login To Your Account</h4>
            <Form className={["uk-form-stacked", classes.FormPadding].join(" ")}>

                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left" htmlFor="form-stacked-text">
                        Email Address<span className="uk-text-danger">*</span>
                    </label>

                    <div className="uk-form-controls uk-inline uk-width-1-1@m">
                        {/* <span className="uk-form-icon uk-icon" uk-icon="icon: mail"></span> */}
                        <Field
                            className={["uk-input uk-width-large@m",
                                (touched.email && errors.email) ? "uk-form-danger" : ""
                            ].join(" ")}
                            type="email"
                            name="email"
                        />
                    </div>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left" htmlFor="form-stacked-text">
                        Password<span className="uk-text-danger">*</span>
                    </label>
                    <div className="uk-inline uk-form-controls uk-width-1-1@m">
                        {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
                        <Field
                            className={["uk-input uk-width-1-1@m",
                                (touched.password && errors.password) ? "uk-form-danger" : ""
                            ].join(" ")}
                            name="password"
                            type="password"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="uk-button uk-button-primary uk-width-1-1"
                    disabled={isSubmitting}>
                    {isSubmitting ? <i className="fa fa-spinner fa-spin fa-fw"></i> : 'Login'}
                </button>

                <div className="uk-text-small uk-child-width-auto uk-margin-small uk-flex-between uk-grid-row-small" uk-grid={1}>
                    <div>
                        <div>
                            <Link href="/register"><span className="uk-text-small">New here?<a>Register Here</a></span></Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link href="/"><a className="uk-text-small">Forgot Password?</a></Link>
                        </div>
                    </div>
                </div>
            </Form>
        </div>

    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues({ email, phone, firstName, lastName, address, storeEmail, name, confirmPassword, password }) {
        return {
            email: email || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required('Password is required'),
    }),
    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {

        const { email, password } = values;

    }
})(LoginForm)



// export default LoginForm;
export default FormikLoginForm;