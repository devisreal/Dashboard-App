import React from "react";
import { Link } from "react-router-dom";
import {  Form, Formik } from 'formik'
import * as yup from 'yup'
import { TextInput } from "../components/CustomFormFields";

const Login = () => {

  return (
    <div className=" grid">
      <div className="grid h-screen content-center gap-2 md:content-around">
        <div className="-mt-8 hidden place-self-end px-4 font-mulish md:inline">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="register" className="font-semibold text-blue-600">
              Get started
            </Link>
          </p>
        </div>

        <div className="mx-auto  px-4 w-11/12 xs:w-10/12 md:w-7/12 lg:w-5/12 max-w-xl sm:px-6 md:pb-24 ">
          <div className="mx-auto">
            <h1 className="font-poppins text-xl font-semibold md:text-2xl">
              Carviva
            </h1>
            <h1 className="mt-3 font-mulish text-md font-semibold text-gray-600 md:text-lg">
              Sign in to your account
            </h1>
          </div>

          <Formik
            initialValues={{
              phoneNumber: '',
              password: '',
            }}
            validationSchema={
              yup.object().shape({
                phoneNumber: yup.string()
                  .required('Required'),
                password: yup.string()                                    
                  .min(6, "Password must be 6 characters or more")
                  .minSymbols(0)
                  .minNumbers(1, 'Password requires at least 1 Number')
                  .minUppercase(1, 'Password requires at least 1 uppercase character' )
                  .required('Required')
                ,
              })
            }
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true)
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className="max-w- mx-auto mt-4 mb-0 space-y-4">
              <TextInput
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
              />
              

              {/* Password */}
              <TextInput
                label="Password"
                id="password"
                name="password"
                type="password"
              />

              <div className="flex items-center justify-between">
                <Link className="font-mulish text-sm font-bold text-blue-600 hover:underline ">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="login-btn"
              >
                Login
              </button>

              <div className="px-4 text-center font-mulish md:hidden">
                <p className="text-sm md:text-md">
                  Don't have an account?{" "}
                  <Link to="register" className="font-semibold text-blue-600">
                    Get started
                  </Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
