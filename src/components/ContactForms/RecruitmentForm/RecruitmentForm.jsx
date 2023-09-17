import { useState, useEffect } from "react";
import DocumentUpload from "./FormSections/DocumentUpload";
import JobAndMiscInfo from "./FormSections/JobAndMisc";
import ContactInformation from "./FormSections/ContactInformation";
import PersonalDetails from "./FormSections/PersonalDetails";
import { initialState } from "./contactData";
import { Form, Formik } from "formik";
import { personalValidationSchema, contactValidationSchema, jobAndMiscValidationSchema, documentUploadValidationSchema } from "./constactSchema";
import ContactImageOne from "../../../assets/forms/undraw_Opened_re_i38e.png";
import ContactImageTwo from "../../../assets/forms/undraw_My_location_re_r52x.png";
import ContactImageThree from "../../../assets/forms/undraw_Hiring_re_yk5n.png";
import ContactImageFour from "../../../assets/forms/undraw_Add_files_re_v09g.png";
import ErrorBoundary from "./ErrorBoundary";

const RecruitmentForm = () => {
  const [activeSection, setActiveSection] = useState(0);
  const validationSchema = [personalValidationSchema, contactValidationSchema, jobAndMiscValidationSchema, documentUploadValidationSchema];

  // Manually managing file uploads as Formik isn't playing nice
  const [fileUploads, setFileUploads] = useState({ cv_upload: null, id_upload: null, proof_of_national_insurance_number: null, proof_of_address: null });
  // Error states
  const [uploadError, setUploadError] = useState(true);

  useEffect(() => {
    const section = document.querySelector(`.section-${activeSection}`);
    const input = section.querySelector("input");
    if (input) {
      input.focus();
    }
    console.log(activeSection);
  }, [activeSection]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    // 'values' contains the form data
    console.log(values);
    setSubmitting(false);
    setActiveSection(4);
  };

  if (activeSection === 4) {
    return (
      <div className="success-container">
        <h3>Submission Successful!</h3>
        <p>Thank you for submitting your details. We will get back to you soon!</p>
      </div>
    );
  }

  const sectionFields = {
    0: ["your_title", "your_first_name", "your_last_name", "your_date_of_birth", "your_nationality", "your_gender"],
    1: ["email", "mobile_number", "landline_number", "address_1", "address_2", "address_3", "city", "postcode"],
    2: ["salary_type", "salary_value", "specific_role", "job_title_location", "have_transportation", "have_disability", "national_insurance_number", "share_code"],
    3: [],
  };

  return (
    <ErrorBoundary>
      <Formik initialValues={initialState} validationSchema={validationSchema[activeSection]} onSubmit={handleSubmit}>
        {({ isValid, validateForm, setTouched, values }) => (
          <Form className="p-5 bg-zinc-300 text-black w-full max-w-lg rounded-xl shadow-xl transition-all duration-300 shadow-violet-300">
            <div>
              <div className="">
                <div className="">
                  <div className="section-0" style={{ display: activeSection === 0 ? "block" : "none" }}>
                    <h3 className="text-xl text-center mb-8">Personal Details</h3>
                    <PersonalDetails />
                  </div>
                  <div className="section-1" style={{ display: activeSection === 1 ? "block" : "none" }}>
                    <h3 className="text-xl text-center mb-8">Contact Information</h3>
                    <ContactInformation />
                  </div>
                  <div className="section-2" style={{ display: activeSection === 2 ? "block" : "none" }}>
                    <h3 className="text-xl text-center mb-8">Job & Miscellaneous Information</h3>
                    <JobAndMiscInfo />
                  </div>
                  <div className="section-3" style={{ display: activeSection === 3 ? "block" : "none" }}>
                    <h3 className="text-xl text-center mb-8">Document Upload</h3>
                    <DocumentUpload fileUploads={fileUploads} setFileUploads={setFileUploads} setUploadErrors={setUploadError} />
                    <button type="button" onClick={() => console.log(values)}>
                      check
                    </button>
                  </div>
                  <div className="flex flex-row my-4 h-12">
                    <img src={ContactImageOne} alt="Contact Image One" className="w-9 md:w-12" />
                    <div className={`${activeSection > 0 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageTwo} alt="Contact Image One" className={`${activeSection > 0 ? "" : "opacity-50"} w-9 md:w-12`} />
                    <div className={`${activeSection > 1 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageThree} alt="Contact Image One" className={`${activeSection > 1 ? "" : "opacity-50"} w-9 md:w-12`} />
                    <div className={`${activeSection > 2 ? "bg-violet-900" : "bg-white"} grow h-1 my-auto`}></div>
                    <img src={ContactImageFour} alt="Contact Image One" className={`${activeSection > 2 ? "" : "opacity-50"} w-9 md:w-12`} />
                  </div>
                  <div className="flex mt-8">
                    <button
                      type="button"
                      onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
                      className={`${(activeSection === 0 && "hidden") || ""} bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        const currentSectionFields = sectionFields[activeSection];
                        const touchedFields = {};
                        currentSectionFields.forEach((key) => {
                          touchedFields[key] = true;
                        });
                        setTouched(touchedFields);

                        await validateForm();
                        if (isValid || activeSection === 3) {
                          setActiveSection((prev) => Math.min(3, prev + 1));
                        }
                      }}
                      className={`${(activeSection === 3 && "hidden") || ""} ms-auto bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded `}
                    >
                      Next
                    </button>
                  </div>
                  {activeSection === 3 && (
                    <div className="text-center mt-5">
                      <button className={`${uploadError ? "opacity-50" : ""} bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded`} disabled={uploadError} type="submit">
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ErrorBoundary>
  );
};

export default RecruitmentForm;

// Personal Details
// Title: Free Text Input
// First Name: Free Text Input
// Last Name: Free Text Input
// Date of Birth: Date Input
// Ethnicity: Free Text Input / Drop down
// Gender: Free Text Input

// Contact Information
// Email: Free Text Input
// Mobile Number: Free Number Input
// Landline Number: Free Number Input
// Address 1: Free Text Input
// Address 2: Free Text Input
// Address 3: Free Text Input
// Postcode: Free Text Input

// Job Preferences
// Salary / Hourly Rate Sought: Free Text Input (could have drop down for salary/hourly and number input for value)
// Specific Role: Free Text Input
// Job Title & Location: Free Text Input

// Miscellaneous Information
// Have Transportation: Check Box
// Have Disability: Free Text Input
// National Insurance Number: Free Text Input
// Share Code(right to work): Free Text Input

// Document Upload
// CV upload: Upload Input
// ID upload: Upload Input
// Proof of National Insurance Number: Upload Input
// Proof of address: Upload Input
