import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../index.css';
import Navigation from '../components/Navigation';

// Define the initial values and validation
const SignIn: React.FC = () => {
  const initialValues = {
    userEmail: '',
    userPassword: ''
  };

  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};
    if (!values.userEmail) {
      errors.userEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.userEmail)) {
      errors.userEmail = 'Invalid email address';
    }
    if (!values.userPassword) {
      errors.userPassword = 'Password is required';
    } else if (values.userPassword.length < 6) {
      errors.userPassword = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission
    console.log('Form Data:', values);
  };

  return (
    <><>
    <Navigation/>
      </><div className="signin-container">
              <div className="signin-form-wrapper">
                  <h1 className="signin-header">Sign In</h1>
                  <Formik
                      initialValues={initialValues}
                      validate={validate}
                      onSubmit={handleSubmit}
                  >
                      <Form className="signin-form">
                          <div className="form-field">
                              <label htmlFor="userEmail">Email</label>
                              <Field
                                  type="email"
                                  id="userEmail"
                                  name="userEmail"
                                  placeholder="Enter your email"
                                  className="input-field" />
                              <ErrorMessage name="userEmail" component="div" className="error-text" />
                          </div>
                          <div className="form-field mt-3">
                              <label htmlFor="userPassword">Password</label>
                              <Field
                                  type="password"
                                  id="userPassword"
                                  name="userPassword"
                                  placeholder="Enter your password"
                                  className="input-field" />
                              <ErrorMessage name="userPassword" component="div" className="error-text" />
                          </div>
                          <button type="submit" className="submit-button mt-4">
                              Sign In
                          </button>
                      </Form>
                  </Formik>
              </div>
          </div></>
  );
};

export default SignIn;
