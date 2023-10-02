import { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import ErrorBoundary from "../ErrorBoundary";
import { validationSchema } from "./schema";
import { initialValues } from "./initialValues";

const ClientForm = () => {
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }

      const response = await fetch("https://quack-hosting.ajbarrett.tech/wp-json/contact-form-7/v1/contact-forms/14/feedback", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "mail_sent") {
        setSubmitting(false);
        resetForm();
        setFormSubmittedSuccessfully(true);
      } else {
        setFormErrors(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormErrors("There was a problem submitting the form. Please try again later.");
    }
  };

  return (
    <ErrorBoundary>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isValid, validateForm, setTouched, values }) => (
          <Form className="p-5 bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-violet-300 mx-auto transition-all duration-1000 transform">
            <div>
              <div className="">
                <div className="">
                  <div className="section-0">
                    <h3 className="text-xl text-center mb-8">Contact Details</h3>
                    <div className="flex flex-col text-start">
                      <div className="md:flex md:flex-row gap-6 w-full">
                        <div className="h-20 md:w-1/2">
                          <div className="w-full justify-start">
                            <label htmlFor="first-name" className=" block py-1">
                              First Name*
                            </label>
                            <Field type="text" id="first-name" name="first-name" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="first-name" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                        <div className="h-20 md:w-1/2">
                          <div className="w-full justify-start">
                            <label htmlFor="surname" className=" block py-1">
                              Surname*
                            </label>
                            <Field type="text" id="surname" name="surname" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="surname" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                      </div>
                      <div className="h-20">
                        <div className="w-full">
                          <label htmlFor="email" className=" block py-1">
                            Email*
                          </label>
                          <Field type="text" id="email" name="email" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="email" component="span" className="error-message w-full text-center text-sm" />
                      </div>
                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="telephone" className=" block py-1">
                            Telephone*
                          </label>
                          <Field type="tel" id="telephone" name="telephone" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="telephone" component="span" className="error-message w-full text-center text-sm" />
                      </div>
                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="company-name" className="block py-1">
                            Company Name*
                          </label>
                          <Field type="text" id="company-name" name="company-name" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="company-name" component="span" className="error-message w-full text-center text-sm" />
                      </div>

                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="address-1" className=" block py-1">
                            Address 1*
                          </label>
                          <Field type="text" id="address-1" name="address-1" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="address-1" component="span" className="error-message w-full text-center text-sm" />
                      </div>

                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="address-2" className=" block py-1">
                            Address 2
                          </label>
                          <Field type="text" id="address-2" name="address-2" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="address-2" component="span" className="error-message w-full text-center text-sm" />
                      </div>

                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="address-3" className=" block py-1">
                            Address 3
                          </label>
                          <Field type="text" id="address-3" name="address-3" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="address-3" component="span" className="error-message w-full text-center text-sm" />
                      </div>

                      <div className="md:flex md:flex-row gap-6 w-full">
                        <div className="h-20 md:w-1/2">
                          <div className="w-full justify-start">
                            <label htmlFor="city" className=" block py-1">
                              City*
                            </label>
                            <Field type="tel" id="city" name="city" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="city" component="span" className="error-message w-full text-center text-sm" />
                        </div>

                        <div className="h-20 md:w-1/2">
                          <div className="w-full justify-start">
                            <label htmlFor="post-code" className=" block py-1">
                              Postcode*
                            </label>
                            <Field type="text" id="post-code" name="post-code" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="post-code" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                      </div>
                      <div className="md:flex md:flex-row gap-6 w-full">
                        <div className="h-20 md:w-1/2">
                          <div className="w-full justify-start">
                            <label htmlFor="company-reg-no" className=" block py-1">
                              Company Registration Number
                            </label>
                            <Field type="text" id="company-reg-no" name="company-reg-no" className="w-full p-1 rounded bg-white text-black" />
                          </div>
                          <ErrorMessage name="company-reg-no" component="span" className="error-message w-full text-center text-sm" />
                        </div>

                        <div className="h-20 md:w-1/2">
                          <div className="w-full justify-start">
                            <label htmlFor="sector" className="block py-1">
                              Sector*
                            </label>
                            <Field as="select" id="sector" name="sector" className="w-full p-1 rounded bg-white text-black">
                              <option value="" label="Select Sector" />
                              <option value="Engineering" label="Engineering" />
                              <option value="Construction" label="Construction" />
                              <option value="Meat" label="Meat" />
                              <option value="Industrial" label="Industrial" />
                              <option value="Other" label="Other" />
                            </Field>
                          </div>
                          <ErrorMessage name="sector" component="span" className="error-message w-full text-center text-sm" />
                        </div>
                      </div>
                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="work-location" className=" block py-1">
                            Locations Of Work
                          </label>
                          <Field type="textarea" id="work-location" name="work-location" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="work-location" component="span" className="error-message w-full text-center text-sm" />
                      </div>

                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="skills" className=" block py-1">
                            Skills
                          </label>
                          <Field type="textarea" id="skills" name="skills" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="skills" component="span" className="error-message w-full text-center text-sm" />
                      </div>

                      <div className="h-20">
                        <div className="w-full justify-start">
                          <label htmlFor="qualifications" className=" block py-1">
                            Qualifications
                          </label>
                          <Field type="textarea" id="qualifications" name="qualifications" className="w-full p-1 rounded bg-white text-black" />
                        </div>
                        <ErrorMessage name="qualifications" component="span" className="error-message w-full text-center text-sm" />
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      {formErrors && <div className="error error-message">{formErrors}</div>}
                      <button className={`bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`} type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default ClientForm;
