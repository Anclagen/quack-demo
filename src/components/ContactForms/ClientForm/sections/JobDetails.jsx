import { Field, ErrorMessage } from "formik";

const JobDetails = () => {
  return (
    <>
      <h3 className="text-xl text-center mb-8">Job Details</h3>
      <div className="md:flex md:flex-row gap-6 w-full">
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
            Location(s) of Work*
          </label>
          <Field type="text" id="work-location" name="work-location" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="work-location" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20">
        <div className="w-full justify-start">
          <label htmlFor="skills" className=" block py-1">
            Skills
          </label>
          <Field type="text" id="skills" name="skills" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="skills" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20">
        <div className="w-full justify-start">
          <label htmlFor="qualifications" className=" block py-1">
            Qualifications
          </label>
          <Field type="text" id="qualifications" name="qualifications" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="qualifications" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </>
  );
};

export default JobDetails;
