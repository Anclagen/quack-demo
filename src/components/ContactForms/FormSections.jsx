import { Field, ErrorMessage } from "formik";

export const PersonalDetails = () => (
  <div className="flex flex-col">
    {/* Title */}
    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="your_title" className="w-36 block py-1">
          Title
        </label>
        <Field type="text" id="your_title" name="your_title" className="w-32 p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="your_title" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    {/* First Name */}
    <div className="h-16">
      <div className="w-full flex">
        <label htmlFor="your_first_name" className="w-36 block py-1">
          First Name
        </label>
        <Field type="text" id="your_first_name" name="your_first_name" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="your_first_name" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    {/* Last Name */}
    <div className="h-16">
      <div className="w-full flex justify-center">
        <label htmlFor="your_last_name" className="w-36 block py-1">
          Last Name
        </label>
        <Field type="text" id="your_last_name" name="your_last_name" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="your_last_name" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    {/* Date of Birth */}
    <div className="h-16">
      <div className="w-full flex">
        <label htmlFor="your_date_of_birth" className="w-36 block py-1">
          Date of Birth
        </label>
        <Field type="date" id="your_date_of_birth" name="your_date_of_birth" className="w-content p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="your_date_of_birth" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    {/* Nationality */}
    <div className="h-16">
      <div className="w-full flex">
        <label htmlFor="your_nationality" className="w-36 block py-1">
          Nationality
        </label>
        <Field type="text" id="your_nationality" name="your_nationality" className="w-32  p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="your_nationality" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    {/* Gender */}
    <div className="h-16">
      <div className="w-full flex">
        <label htmlFor="your_gender" className="w-36 block py-1">
          Gender
        </label>
        <Field type="text" id="your_gender" name="your_gender" className="w-32  p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="your_gender" component="span" className="error-message ms-36 w-full text-center" />
    </div>
  </div>
);

export const ContactInformation = () => (
  <div className="flex flex-col">
    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="email" className="w-36 block py-1">
          Email
        </label>
        <Field type="text" id="email" name="email" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="email" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="mobile_number" className="w-36 block py-1">
          Mobile Number
        </label>
        <Field type="tel" id="mobile_number" name="mobile_number" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="mobile_number" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="landline_number" className="w-36 block py-1">
          Landline Number
        </label>
        <Field type="tel" id="landline_number" name="landline_number" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="landline_number" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="address_1" className="w-36 block py-1">
          Address 1
        </label>
        <Field type="text" id="address_1" name="address_1" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address_1" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="address_2" className="w-36 block py-1">
          Address 2
        </label>
        <Field type="text" id="address_2" name="address_2" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address_2" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="address_3" className="w-36 block py-1">
          Address 3
        </label>
        <Field type="text" id="address_3" name="address_3" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address_3" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="postcode" className="w-36 block py-1">
          Postcode
        </label>
        <Field type="text" id="postcode" name="postcode" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="postcode" component="span" className="error-message ms-36 w-full text-center" />
    </div>
  </div>
);

export const JobAndMiscInfo = () => (
  <div className="flex flex-col">
    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="salary_type" className="w-36 block py-1">
          Salary Type
        </label>
        <Field as="select" id="salary_type" name="salary_type" className="grow p-1 rounded bg-white text-black">
          <option value="" label="Select option" />
          <option value="Salary" label="Salary" />
          <option value="Hourly" label="Hourly" />
        </Field>
      </div>
      <ErrorMessage name="salary_type" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="salary_value" className="w-36 block py-1">
          Salary / Hourly Rate Sought
        </label>
        <Field type="number" id="salary_value" name="salary_value" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="salary_value" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="specific_role" className="w-36 block py-1">
          Specific Role
        </label>
        <Field type="text" id="specific_role" name="specific_role" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="specific_role" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="job_title_location" className="w-36 block py-1">
          Job Title & Location
        </label>
        <Field type="text" id="job_title_location" name="job_title_location" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="job_title_location" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16 flex items-center">
      <label className="w-36 block py-1">
        <Field type="checkbox" name="have_transportation" />
        Have Transportation
      </label>
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="have_disability" className="w-36 block py-1">
          Have Disability
        </label>
        <Field type="text" id="have_disability" name="have_disability" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="have_disability" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="national_insurance_number" className="w-36 block py-1">
          National Insurance Number
        </label>
        <Field type="text" id="national_insurance_number" name="national_insurance_number" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="national_insurance_number" component="span" className="error-message ms-36 w-full text-center" />
    </div>

    <div className="h-16">
      <div className="w-full flex flex-row justify-start">
        <label htmlFor="share_code" className="w-36 block py-1">
          Share Code (right to work)
        </label>
        <Field type="text" id="share_code" name="share_code" className="grow p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="share_code" component="span" className="error-message ms-36 w-full text-center" />
    </div>
  </div>
);

export const DocumentUpload = () => (
  <div className="flex flex-col">
    <label htmlFor="cv_upload">CV Upload</label>
    <Field type="file" id="cv_upload" name="cv_upload" accept=".pdf, .doc, .docx, .odt, .rtf, .txt" />
    <ErrorMessage name="cv_upload" component="div" className="error-message" />

    <label htmlFor="id_upload">ID Upload</label>
    <Field type="file" id="id_upload" name="id_upload" accept=".pdf, .jpg, .jpeg, .png" />
    <ErrorMessage name="id_upload" component="div" className="error-message" />

    <label htmlFor="proof_of_national_insurance_number">Proof of National Insurance Number</label>
    <Field type="file" id="proof_of_national_insurance_number" name="proof_of_national_insurance_number" accept=".pdf, .jpg, .jpeg, .png" />
    <ErrorMessage name="proof_of_national_insurance_number" component="div" className="error-message" />

    <label htmlFor="proof_of_address">Proof of Address</label>
    <Field type="file" id="proof_of_address" name="proof_of_address" accept=".pdf, .jpg, .jpeg, .png" />
    <ErrorMessage name="proof_of_address" component="div" className="error-message" />
  </div>
);
