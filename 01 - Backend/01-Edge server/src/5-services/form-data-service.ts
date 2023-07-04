import { Request } from "express";


/**
 * To pass request with files and json data to microservice, we need to wrap data with new formData obj. 
 */
function wrapToFormData(request: Request) {

  const { firstName, lastName, nickName, email, motto, password } = request.body;

  // Create a new FormData object
  const formData = new FormData();

  // Append text data to the FormData object
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("nickName", nickName);
  formData.append("email", email);
  formData.append("motto", motto);
  formData.append("password", password);

  // Check if request.files exists and request.files.images is not empty, else we won't embed it
  if (request.files && request.files.images) {
    
    // Append each file to the FormData object
    if (Array.isArray(request.files.images)) {
      for (const file of request.files.images) {
        const blob = new Blob([file.data], { type: file.mimetype });
        formData.append("images", blob, file.name);
      }
    } else {
      const file = request.files.images;
      const blob = new Blob([file.data], { type: file.mimetype });
      formData.append("images", blob, file.name);
    }
  }

  return formData;
}


export default wrapToFormData;