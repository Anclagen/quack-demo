import FormikField from "../../../Formik/FormikField";

const PersonalDetails = () => (
  <div className="flex flex-col">
    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* First Name */}
      <div className="sm:w-1/2">
        <FormikField label="First Name*" type="text" id="first-name" />
      </div>

      {/* Last Name */}
      <div className="sm:w-1/2">
        <FormikField label="Last Name*" type="text" id="last-name" />
      </div>
    </div>

    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* Title */}
      <div className="h-20 sm:w-1/2">
        <FormikField
          label="Title*"
          type="select"
          id="title"
          width="w-40"
          options={[
            { value: "", label: "Select title" },
            { value: "Mr", label: "Mr" },
            { value: "Mrs", label: "Mrs" },
            { value: "Miss", label: "Miss" },
            { value: "Ms", label: "Ms" },
            { value: "Mx", label: "Mx" },
            { value: "Dr", label: "Dr" },
            { value: "Other", label: "Other" },
          ]}
        />
      </div>

      {/* Gender */}
      <div className="h-20 sm:w-1/2">
        <FormikField
          label="Gender*"
          type="select"
          id="gender"
          width="w-40"
          options={[
            { value: "", label: "Select gender" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Intersex", label: "Intersex" },
            { value: "Other", label: "Other" },
            { value: "Prefer not to say", label: "Prefer not to say" },
          ]}
        />
      </div>
    </div>

    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* Date of Birth */}
      <div className="h-20 sm:w-1/2">
        <FormikField label="Date of Birth*" type="date" id="date-of-birth" width="w-content" />
      </div>

      {/* Phone Number */}
      <div className="h-20 sm:w-1/2">
        <FormikField label="Phone Number*" type="tel" id="phone-number" />
      </div>
    </div>

    <div>
      {/* Email */}
      <FormikField label="Email*" type="email" id="email" />
    </div>
  </div>
);

export default PersonalDetails;
