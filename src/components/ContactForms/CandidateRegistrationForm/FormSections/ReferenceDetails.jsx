import FormikField from "../../../Formik/FormikField";

const ReferenceDetails = () => (
  <div className="flex flex-col">
    {/* Company/Agency Name */}
    <div className="">
      <FormikField label="Company/Agency Name*" type="text" id="ref-company-name" />
    </div>
    <div className="sm:flex sm:flex-row gap-6 w-full">
      {/* Date from */}
      <div className="h-20 sm:w-1/2">
        <FormikField label="Employed From*" type="date" id="ref-employed-from" width="w-content" />
      </div>

      {/* date to */}
      <div className="h-20 sm:w-1/2">
        <FormikField label="Employer To*" type="date" id="ref-employed-to" width="w-content" />
      </div>
    </div>

    {/* Reason to leave */}
    <div className="">
      <FormikField label="Reason For Leaving*" type="text" id="ref-reason-leaving" />
    </div>

    <div>
      {/* Ref Name */}
      <FormikField label="Reference Name*" type="text" id="ref-name" />
    </div>
    <div>
      {/* Phone */}
      <FormikField label="Reference Phone Number*" type="tel" id="ref-phone-number" />
    </div>

    <div>
      {/* Email */}
      <FormikField label="Reference Email*" type="email" id="ref-email" />
    </div>
  </div>
);

export default ReferenceDetails;
