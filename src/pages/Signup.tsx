import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navigation from '../components/Navigation';


const SignUp = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (values.name.length > 50) {
      errors.name = 'Name must be at most 50 characters';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords must match';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
  };

  return (
    <><>
    <Navigation/>
      </><div className="signup">
              <div className="container">
                  <h1 className="signup-title">Sign Up</h1>
                  <Formik
                      initialValues={initialValues}
                      validate={validate}
                      onSubmit={handleSubmit}
                  >
                      <Form className="signup-form">
                          <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <Field
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Enter your name"
                                  className="form-control" />
                              <ErrorMessage name="name" component="div" className="error-message" />
                          </div>
                          <div className="form-group mt-3">
                              <label htmlFor="email">Email</label>
                              <Field
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Enter your email"
                                  className="form-control" />
                              <ErrorMessage name="email" component="div" className="error-message" />
                          </div>
                          <div className="form-group mt-3">
                              <label htmlFor="password">Password</label>
                              <Field
                                  type="password"
                                  id="password"
                                  name="password"
                                  placeholder="Enter your password"
                                  className="form-control" />
                              <ErrorMessage name="password" component="div" className="error-message" />
                          </div>
                          <div className="form-group mt-3">
                              <label htmlFor="confirmPassword">Confirm Password</label>
                              <Field
                                  type="password"
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  placeholder="Confirm your password"
                                  className="form-control" />
                              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                          </div>
                          <button type="submit" className="signup-button mt-4">
                              Sign Up
                          </button>
                      </Form>
                  </Formik>
              </div>
          </div></>
  );
};

export default SignUp;
