import * as Yup from "yup";

export const personalValidationSchema = Yup.object().shape({
  your_title: Yup.string().required("Title is required"),
  your_first_name: Yup.string().required("First name is required").max(50, "First name cannot exceed 50 characters"),
  your_last_name: Yup.string().required("Last name is required").max(50, "Last name cannot exceed 50 characters"),
  your_date_of_birth: Yup.date().required("Date of birth is required").max(new Date(), "You cannot have a birthdate in the future"),
  your_nationality: Yup.string().required("Nationality is required").max(50, "Nationality cannot exceed 50 characters"),
  your_gender: Yup.string().required("Gender is required").oneOf(["Male", "Female", "Non-Binary", "Other"], "Please select a valid gender option"),
});

export const contactValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  mobile_number: Yup.string()
    .required("Mobile number is required")
    .matches(/^[\d\s+()-]+$/, "Invalid mobile number format"),
  landline_number: Yup.string().matches(/^[\d\s+()-]+$/, "Invalid landline number format"),
  address_1: Yup.string().required("Address 1 is required"),
  address_2: Yup.string(),
  address_3: Yup.string(),
  city: Yup.string().required("City is required"),
  postcode: Yup.string().required("Postcode is required"),
});

export const jobAndMiscValidationSchema = Yup.object().shape({
  salary_type: Yup.string().required("Required").oneOf(["Salary", "Hourly"], "Select either Salary or Hourly"),
  salary_value: Yup.number().required("Required").positive().integer(),
  specific_role: Yup.string().required("Required"),
  job_title_location: Yup.string().required("Required"),
  have_transportation: Yup.bool(),
  have_disability: Yup.string(),
  national_insurance_number: Yup.string().required("Required"),
  share_code: Yup.string().required("Required"),
});

const cvFileValidation = Yup.mixed()
  .test("fileSize", `File too large. Max size is 5MB`, (value) => {
    console.log(value);
    return value && value.size <= 5000000;
  })
  .test("fileType", "Unsupported Format", (value) => {
    const SUPPORTED_FORMATS = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.oasis.opendocument.text",
      "application/rtf",
      "text/plain",
    ];
    return value && SUPPORTED_FORMATS.includes(value.type);
  });

// Helper function to validate the file size and type for images and documents
const imageAndDocumentFileValidation = Yup.mixed()
  .test("fileSize", "File too large. Max size is 5MB", (value) => {
    return value && value.size <= 5000000;
  })
  .test("fileType", "Unsupported Format. Upload PDFs or images only", (value) => {
    const SUPPORTED_FORMATS = ["application/pdf", "image/jpg", "image/jpeg", "image/png"];
    return value && SUPPORTED_FORMATS.includes(value.type);
  });

export const documentUploadValidationSchema = Yup.object().shape({
  something: cvFileValidation.required("Required"),
  cv_upload: cvFileValidation.required("Required"),
  id_upload: imageAndDocumentFileValidation.required("Required"),
  proof_of_national_insurance_number: imageAndDocumentFileValidation,
  proof_of_address: imageAndDocumentFileValidation,
});
