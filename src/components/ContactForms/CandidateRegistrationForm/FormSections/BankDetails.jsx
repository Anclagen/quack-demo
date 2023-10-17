import FormikField from "../../../Formik/FormikField";

const BankDetails = () => (
  <div className="flex flex-col">
    <h3 className="font-semibold text-lg text-center mb-3">Bank Details</h3>
    <div className="sm:flex sm:flex-row gap-6 w-full">
      <div className="sm:w-1/2">
        <FormikField label="Sort code*" type="num" id="sort-code" width="w-40" />
      </div>
      <div className="sm:w-1/2">
        <FormikField label="Account Number*" type="num" id="account-number" />
      </div>
    </div>
    <div>
      <FormikField label="Account Holders Name*" type="text" id="account-holder-name" />
    </div>
    <div>
      <FormikField label="Bank Branch*" type="text" id="bank-branch" />
    </div>
  </div>
);

export default BankDetails;
