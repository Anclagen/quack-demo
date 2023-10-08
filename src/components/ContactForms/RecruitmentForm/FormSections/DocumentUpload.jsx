import { useState } from "react";
const validateFile = (file, types, maxSizeInMB = 4) => {
  // Convert simplified file extensions to full MIME types
  const extensionToMime = {
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".rtf": "application/rtf",
    ".txt": "text/plain",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
  };

  const validTypes = types.split(", ").map((type) => extensionToMime[type.trim()] || type.trim());
  const validSize = file.size <= maxSizeInMB * 1024 * 1024; // Convert MB to Bytes

  return validTypes.includes(file.type) && validSize;
};

const DocumentUpload = ({ fileUploads, setFileUploads, setUploadError }) => {
  // Manage local errors for files
  const [errors, setErrors] = useState({
    "cv-upload": null,
    "id-upload": null,
    "proof-of-national-insurance-number": null,
    "proof-of-address": null,
  });

  const handleFileChange = (event, types) => {
    const file = event.currentTarget.files[0];
    const inputName = event.currentTarget.name;
    console.log(file);

    let isValid = file && validateFile(file, types);

    setFileUploads((prev) => ({
      ...prev,
      [inputName]: isValid ? file : null,
    }));
    setErrors((prev) => ({
      ...prev,
      [inputName]: isValid ? null : "Invalid file type or file size too large!",
    }));

    // After setting the current file validation status, let's evaluate the overall upload error status
    updateUploadErrorStatus(inputName, isValid);
  };

  const updateUploadErrorStatus = (changedInputName, isValid) => {
    if (changedInputName === "cv-upload" || changedInputName === "id-upload") {
      if (!isValid) {
        // If either cv-upload or id-upload is invalid, set uploadError to true
        setUploadError(true);
      } else {
        // Check the validity of the other required input that didn't trigger the change
        const otherRequiredInput = changedInputName === "cv-upload" ? "id-upload" : "cv-upload";
        const otherFile = fileUploads[otherRequiredInput];

        // If the other required input is valid or not present, set uploadError to false
        if (!otherFile || (otherFile && validateFile(otherFile, ".pdf, .doc, .docx, .odt, .rtf, .txt"))) {
          setUploadError(false);
        }
      }
    } else {
      // For non-required uploads, we only set the error to false if both cv-upload and id-upload are valid or present
      const cvFile = fileUploads["cv-upload"];
      const idFile = fileUploads["id-upload"];
      if (cvFile && validateFile(cvFile, ".pdf, .doc, .docx, .odt, .rtf, .txt") && idFile && validateFile(idFile, ".pdf, .jpg, .jpeg, .png")) {
        setUploadError(false);
      }
    }
  };

  const clearFileInput = (inputName) => {
    document.getElementById(inputName).value = ""; // Clear the input
    setFileUploads((prev) => ({
      ...prev,
      [inputName]: null, // Clear the file from the state
    }));
    setErrors((prev) => ({
      ...prev,
      [inputName]: null, // Clear any errors related to this file input
    }));
  };

  //Formik not playing ball so it goes bye bye.
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="cv-upload">CV Upload*</label>
        <input type="file" id="cv-upload" name="cv-upload" accept=".pdf, .doc, .docx, .odt, .rtf, .txt" onChange={(event) => handleFileChange(event, ".pdf, .doc, .docx, .odt, .rtf, .txt")} />
        <button type="button" onClick={() => clearFileInput("cv-upload")}>
          Clear
        </button>
        {errors["cv-upload"] && <div className="error-message w-full text-sm">{errors["cv-upload"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="id-upload">ID Upload*</label>
        <input type="file" id="id-upload" name="id-upload" accept=".pdf, .jpg, .jpeg, .png" onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")} />
        {errors["id-upload"] && <div className="error-message w-full text-sm">{errors["id-upload"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="proof-of-national-insurance-number">Proof of National Insurance Number</label>
        <input
          type="file"
          id="proof-of-national-insurance-number"
          name="proof-of-national-insurance-number"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")}
        />
        {errors["proof-of-national-insurance-number"] && <div className="error-message w-full text-sm">{errors["proof-of-national-insurance-number"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="proof-of-address">Proof of Address</label>
        <input type="file" id="proof-of-address" name="proof-of-address" accept=".pdf, .jpg, .jpeg, .png" onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")} />
        {errors["proof-of-address"] && <div className="error-message w-full text-sm">{errors["proof-of-address"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="additional-information">Additional Information</label>
        <input type="file" id="additional-information" name="additional-information" accept=".pdf, .jpg, .jpeg, .png" onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")} />
        {errors["additional-information"] && <div className="error-message w-full text-sm">{errors["additional-information"]}</div>}
      </div>
    </div>
  );
};

export default DocumentUpload;
// const DocumentUpload = ({ fileUploads, setFileUploads, setUploadError }) => {
//   const handleFileChange = (event, types) => {
//     const file = event.currentTarget.files[0];
//     if (!validateFile(file, types)) {
//       setErrors((prev) => ({
//         ...prev,
//         [event.currentTarget.name]: "Invalid file type or file size too large!",
//       }));
//       setFieldValue(event.currentTarget.name, null);
//     } else {
//       setFieldValue(event.currentTarget.name, file);
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col gap-1 mb-1">
//         <label htmlFor="cv-upload">CV Upload</label>
//         <Field type="file" id="cv-upload" name="cv-upload" accept=".pdf, .doc, .docx, .odt, .rtf, .txt" onChange={(event) => handleFileChange(event, ".pdf, .doc, .docx, .odt, .rtf, .txt")} />
//         <ErrorMessage name="cv-upload" component="div" className="error-message w-full text-sm" />

//       </div>
//       <label htmlFor="id-upload">ID Upload</label>
//       <Field
//         type="file"
//         id="id-upload"
//         name="id-upload"
//         accept=".pdf, .jpg, .jpeg, .png"
//         onChange={(event) => {
//           setFieldValue("id-upload", event.currentTarget.files[0]);
//         }}
//       />
//       <ErrorMessage name="id-upload" component="div" className="error-message w-full text-sm" />

//       <label htmlFor="proof-of-national-insurance-number">Proof of National Insurance Number</label>
//       <Field
//         type="file"
//         id="proof-of-national-insurance-number"
//         name="proof-of-national-insurance-number"
//         accept=".pdf, .jpg, .jpeg, .png"
//         onChange={(event) => {
//           setFieldValue("proof-of-national-insurance-number", event.currentTarget.files[0]);
//         }}
//       />
//       <ErrorMessage name="proof-of-national-insurance-number" component="div" className="error-message w-full  text-sm" />

//       <label htmlFor="proof-of-address">Proof of Address</label>
//       <Field
//         type="file"
//         id="proof-of-address"
//         name="proof-of-address"
//         accept=".pdf, .jpg, .jpeg, .png"
//         onChange={(event) => {
//           setFieldValue("proof-of-address", event.currentTarget.files[0]);
//         }}
//       />
//       <ErrorMessage name="proof-of-address" component="div" className="error-message w-full text-sm" />
//     </div>
//   );
// };
