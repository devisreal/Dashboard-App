/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { SelectField, TextInput } from "../components/CustomFormFields";
import YupPassword from "yup-password";
YupPassword(yup);

const Register = () => {

  return (
    <div className=" grid">
      <div className="grid h-screen content-center gap-2 md:content-around">
        <div className="hidden place-self-end p-5 font-mulish md:inline">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="register" className="font-semibold text-blue-600">
              Login
            </Link>
          </p>
        </div>

        <div className="mx-auto mt-20 w-11/12 px-4 xs:w-10/12 sm:mt-0 sm:px-6 md:w-7/12 md:pb-10 lg:w-5/12">
          <div className="mx-auto">
            <h1 className="font-poppins text-xl font-semibold md:text-2xl">
              Get Your Smart Fuel Wallet.
            </h1>
            <h1 className="mt-2 font-mulish text-md font-semibold text-gray-600 md:text-lg">
              It's Cashless & Cardless.
            </h1>
          </div>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              password: '',
              selectoption: ''
            }}
            validationSchema={
              yup.object().shape({
                firstName: yup
                  .string()
                  .required('Required'),
                lastName: yup
                  .string()
                  .required('Required'),
                email: yup
                  .string()
                  .email('Invalid email address')
                  .required('Required'),
                phoneNumber: yup
                  .string()
                  .required('Required'),
                password: yup.string()                  
                  .min(6, "Password must be 6 characters or more")
                  .minSymbols(0)
                  .minNumbers(1, 'Password requires at least 1 Number')
                  .minUppercase(1, 'Password requires at least 1 uppercase character')
                  .required('Required')
                ,
                selectoption: yup
                  .string()
                  .required('Required')
                  .oneOf(
                    ['option-1', 'option-2', 'option-3', 'option-3'],
                    'Invalid Option Type'
                  ),
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
            <Form className="mx-auto mt-4 mb-0 space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {/* Firstname */}
                <TextInput
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                />

                {/* Lastname */}
                <TextInput
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {/* Email Address */}
                <TextInput
                  label="Email address"
                  id="email"
                  name="email"
                  type="email"
                />

                {/* Phone Number */}
                <TextInput
                  label="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                />
              </div>

              {/* Select */}
              <SelectField name="selectoption">
                <option value="">---select type----</option>
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
                <option value="option-4">Option 4</option>
              </SelectField>

              {/* Password */}
              <TextInput
                label="Password"
                id="password"
                name="password"
                type="password"
              />

              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-poppins text-sm font-medium text-white shadow-md shadow-blue-200"
              >
                Register
              </button>


              <div className="px-4 text-center font-mulish">
                <p className="text-xs font-medium md:text-sm">
                  By registering, I agree to Carviva{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service{" "}
                  </a>
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    PrivacyPolicy
                  </a>
                  .
                </p>
              </div>

              <div className="mb-10 place-self-end pb-10 text-center font-mulish sm:pb-0 md:hidden">
                <p className="text-xs md:text-sm">
                  Already have an account?{" "}
                  <Link to="register" className="font-semibold text-blue-600">
                    Login
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

export default Register;
