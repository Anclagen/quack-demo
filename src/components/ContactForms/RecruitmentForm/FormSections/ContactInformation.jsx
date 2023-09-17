import { Field, ErrorMessage } from "formik";
const ContactInformation = () => (
  <div className="flex flex-col">
    <div className="h-20">
      <div className="w-full">
        <label htmlFor="email" className=" block py-1">
          Email
        </label>
        <Field type="text" id="email" name="email" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="email" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="mobile_number" className=" block py-1">
            Mobile Number
          </label>
          <Field type="tel" id="mobile_number" name="mobile_number" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="mobile_number" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="landline_number" className=" block py-1">
            Landline Number
          </label>
          <Field type="tel" id="landline_number" name="landline_number" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="landline_number" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="address_1" className=" block py-1">
          Address 1
        </label>
        <Field type="text" id="address_1" name="address_1" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address_1" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="address_2" className=" block py-1">
          Address 2
        </label>
        <Field type="text" id="address_2" name="address_2" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address_2" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="h-20">
      <div className="w-full justify-start">
        <label htmlFor="address_3" className=" block py-1">
          Address 3
        </label>
        <Field type="text" id="address_3" name="address_3" className="w-full p-1 rounded bg-white text-black" />
      </div>
      <ErrorMessage name="address_3" component="span" className="error-message w-full text-center text-sm" />
    </div>

    <div className="md:flex md:flex-row gap-6 w-full">
      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="city" className=" block py-1">
            City
          </label>
          <Field type="tel" id="city" name="city" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="city" component="span" className="error-message w-full text-center text-sm" />
      </div>

      <div className="h-20 md:w-1/2">
        <div className="w-full justify-start">
          <label htmlFor="postcode" className=" block py-1">
            Postcode
          </label>
          <Field type="text" id="postcode" name="postcode" className="w-full p-1 rounded bg-white text-black" />
        </div>
        <ErrorMessage name="postcode" component="span" className="error-message w-full text-center text-sm" />
      </div>
    </div>
  </div>
);

export default ContactInformation;
