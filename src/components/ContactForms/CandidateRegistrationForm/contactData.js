export const initialState = {
  // Personal Details
  title: "",
  first_name: "",
  last_name: "",
  date_of_birth: "",
  gender: "",
  email: "",
  "phone-number": "",
  //Address Details
  "address-1": "",
  "address-2": "",
  "address-3": "",
  city: "",
  postcode: "",
  yearsAtAddress: "no",
  "previous-address-1": "",
  "previous-address-2": "",
  "previous-address-3": "",
  "previous-city": "",
  "previous-postcode": "",
  // Availability Details
  shifts: [],
  days: [],
  "available-from": "",
  // Emergency Contact Details
  "emergency-name": "",
  "emergency-relationship": "",
  "emergency-phone-number": "",
  // Bank Details
  "account-holder-name": "",
  "account-number": "",
  "sort-code": "",
  "bank-branch": "",
  // Reference Details
  "ref-company-name": "",
  "ref-employed-from": "",
  "ref-employed-to": "",
  "ref-name": "",
  "ref-phone-number": "",
  "ref-email": "",
  // Other Details
  "no-convictions": false,
  disabilities: "no",
  "disabilities-info": "",
  medication: "no",
  "medication-info": "",
  "reasonable-adjustments": "no",
  "reasonable-adjustments-info": "",
};

export const uploadInitialState = {
  "proof-of-address": null,
  "proof-passport": null,
  "proof-birth-certificate": null,
  "proof-visa": null,
  "proof-ni-number": null,
  "proof-share-code": null,
  "proof-student-term-time": null,
};

// indefinate leave
// Passport
// Birth certificate
// Visa
// Proof of address
// National Insurance Number
// Share code
// Student Term time/confirmation of attendance
