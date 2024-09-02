import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import '../index.css';
import Navigation from '../components/Navigation';
import { CoustumerType } from '../types/CostumerType';

// Define the initial values and validation
const SignIn: React.FC = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const initialValues: Partial<CoustumerType> = {
    email: '',
    password: '',
  };

  const validate = (values: Partial<CoustumerType>) => {
    const errors: Partial<Partial<CoustumerType>> = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = (values: Partial<CoustumerType>, { resetForm }: { resetForm: () => void }) => {
    console.log('Form Values:', values);
    console.log('Form Errors:', validate(values));
    resetForm();  // Reset the form after submission if needed
  };

  return (
    <><>
    <Navigation/>
      </>    <div className="signin-container">
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
                name="email"
                placeholder="Enter your email"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error-text" />
            </div>
            <div className="form-field mt-3">
              <label htmlFor="userPassword">Password</label>
              <div className="password-wrapper">
                <Field
                  type={visiblePassword ? 'text' : 'password'}
                  id="userPassword"
                  name="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password-visibility"
                >
                  {visiblePassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="error-text" />
            </div>
            <button type="submit" className="submit-button mt-4">
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
</>
  );
};

export default SignIn;
