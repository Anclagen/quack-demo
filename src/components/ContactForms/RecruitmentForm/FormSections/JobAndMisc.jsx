import { Field, ErrorMessage } from "formik";
const JobAndMiscInfo = () => (
  <div className="flex flex-col">
    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="salary_type" className=" block py-1">
            Salary Type
          </label>
          <Field as="select" id="salary_type" name="salary_type" className="w-full p-1 rounded bg-white text-black">
            <option value="" label="Select option" />
            <option value="Salary" label="Salary" />
            <option value="Hourly" label="Hourly" />
          </Field>
        </div>
        <ErrorMessage name="salary_type" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="salary_value" className=" block py-1">
            Salary / Hourly Rate Sought
          </label>
          <Field type="number" id="salary_value" name="salary_value" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="salary_value" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="specific_role" className=" block py-1">
          Sought After Role(s)
        </label>
        <Field type="text" id="specific_role" name="specific_role" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="specific_role" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="job_title_location" className=" block py-1">
          Current Job Title & Location
        </label>
        <Field type="text" id="job_title_location" name="job_title_location" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="job_title_location" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="have_disability" className=" block py-1">
          Do You Have Any Disabilities?
        </label>
        <Field type="text" id="have_disability" name="have_disability" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="have_disability" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="national_insurance_number" className=" block py-1">
            National Insurance Number
          </label>
          <Field type="text" id="national_insurance_number" name="national_insurance_number" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="national_insurance_number" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="share_code" className=" block py-1">
            Share Code (right to work)
          </label>
          <Field type="text" id="share_code" name="share_code" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="share_code" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="h-20 flex items-center">
      <label className=" block py-1">
        Do You Have Transportation
        <Field type="checkbox" name="have_transportation" className="ms-6 p-1 form-checkbox h-5 w-5" />
      </label>
    </div>
  </div>
);

export default JobAndMiscInfo;
