import { Field, ErrorMessage } from "formik";

const PersonalDetails = () => (
  <div className="flex flex-col">
    <div className="md:flex md:flex-row gap-6 w-full">
      {/* First Name */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="your_first_name" className=" block py-1">
            First Name
          </label>
          <Field type="text" id="your_first_name" name="your_first_name" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="your_first_name" component="span" className="error-message w-full text-center text-sm" />
      </div>

      {/* Last Name */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="your_last_name" className=" block py-1">
            Last Name
          </label>
          <Field type="text" id="your_last_name" name="your_last_name" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="your_last_name" component="span" className="error-message w-full text-center text-sm " />
      </div>
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      {/* Title */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="your_title" className=" block py-1">
            Title
          </label>
          <Field type="text" id="your_title" name="your_title" className="w-32 p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="your_title" component="span" className="error-message w-full text-center text-sm" />
      </div>

      {/* Date of Birth */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="your_date_of_birth" className=" block py-1">
            Date of Birth
          </label>
          <Field type="date" id="your_date_of_birth" name="your_date_of_birth" className="w-content p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="your_date_of_birth" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      {/* Nationality */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="your_nationality" className=" block py-1">
            Nationality
          </label>
          <Field type="text" id="your_nationality" name="your_nationality" className="w-32  p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="your_nationality" component="span" className="error-message w-full text-center text-sm" />
      </div>

      {/* Gender */}
      <div className="h-20 md:w-1/2">
        <div className="w-full">
          <label htmlFor="your_gender" className=" block py-1">
            Gender
          </label>
          <Field type="text" id="your_gender" name="your_gender" className="w-32  p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="your_gender" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>
  </div>
);

export default PersonalDetails;
