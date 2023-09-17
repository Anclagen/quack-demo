import { useState } from "react";
const validateFile = (file, types, maxSizeInMB = 5) => {
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
    cv_upload: null,
    id_upload: null,
    proof_of_national_insurance_number: null,
    proof_of_address: null,
  });

  const handleFileChange = (event, types) => {
    const file = event.currentTarget.files[0];
    const inputName = event.currentTarget.name;

    if (!file || !validateFile(file, types)) {
      setErrors((prev) => ({
        ...prev,
        [inputName]: "Invalid file type or file size too large!",
      }));
      setFileUploads((prev) => ({
        ...prev,
        [inputName]: null,
      }));
      if (inputName === "cv_upload") setUploadError(true);
    } else {
      setErrors((prev) => ({
        ...prev,
        [inputName]: null,
      }));
      setFileUploads((prev) => ({
        ...prev,
        [inputName]: file,
      }));
      if (inputName === "cv_upload") setUploadError(false);
    }
  };

  //Formik not playing ball so it goes bye bye.
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="cv_upload">CV Upload</label>
        <input type="file" id="cv_upload" name="cv_upload" accept=".pdf, .doc, .docx, .odt, .rtf, .txt" onChange={(event) => handleFileChange(event, ".pdf, .doc, .docx, .odt, .rtf, .txt")} />
        {errors.cv_upload && <div className="error-message w-full text-sm">{errors.cv_upload}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="id_upload">ID Upload</label>
        <input type="file" id="id_upload" name="id_upload" accept=".pdf, .jpg, .jpeg, .png" onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")} />
        {errors.id_upload && <div className="error-message w-full text-sm">{errors.id_upload}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="proof_of_national_insurance_number">Proof of National Insurance Number</label>
        <input
          type="file"
          id="proof_of_national_insurance_number"
          name="proof_of_national_insurance_number"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")}
        />
        {errors.proof_of_national_insurance_number && <div className="error-message w-full text-sm">{errors.proof_of_national_insurance_number}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <label htmlFor="proof_of_address">Proof of Address</label>
        <input type="file" id="proof_of_address" name="proof_of_address" accept=".pdf, .jpg, .jpeg, .png" onChange={(event) => handleFileChange(event, ".pdf, .jpg, .jpeg, .png")} />
        {errors.proof_of_address && <div className="error-message w-full text-sm">{errors.proof_of_address}</div>}
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
//         <label htmlFor="cv_upload">CV Upload</label>
//         <Field type="file" id="cv_upload" name="cv_upload" accept=".pdf, .doc, .docx, .odt, .rtf, .txt" onChange={(event) => handleFileChange(event, ".pdf, .doc, .docx, .odt, .rtf, .txt")} />
//         <ErrorMessage name="cv_upload" component="div" className="error-message w-full text-sm" />

//       </div>
//       <label htmlFor="id_upload">ID Upload</label>
//       <Field
//         type="file"
//         id="id_upload"
//         name="id_upload"
//         accept=".pdf, .jpg, .jpeg, .png"
//         onChange={(event) => {
//           setFieldValue("id_upload", event.currentTarget.files[0]);
//         }}
//       />
//       <ErrorMessage name="id_upload" component="div" className="error-message w-full text-sm" />

//       <label htmlFor="proof_of_national_insurance_number">Proof of National Insurance Number</label>
//       <Field
//         type="file"
//         id="proof_of_national_insurance_number"
//         name="proof_of_national_insurance_number"
//         accept=".pdf, .jpg, .jpeg, .png"
//         onChange={(event) => {
//           setFieldValue("proof_of_national_insurance_number", event.currentTarget.files[0]);
//         }}
//       />
//       <ErrorMessage name="proof_of_national_insurance_number" component="div" className="error-message w-full  text-sm" />

//       <label htmlFor="proof_of_address">Proof of Address</label>
//       <Field
//         type="file"
//         id="proof_of_address"
//         name="proof_of_address"
//         accept=".pdf, .jpg, .jpeg, .png"
//         onChange={(event) => {
//           setFieldValue("proof_of_address", event.currentTarget.files[0]);
//         }}
//       />
//       <ErrorMessage name="proof_of_address" component="div" className="error-message w-full text-sm" />
//     </div>
//   );
// };
