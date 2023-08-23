import { APIUser } from "./service.config";

//me hace el post con la baseurl de service
export const registerUser = async (formData) => {
  return APIUser.post("/users/register", formData)
    .then((res) => res)
    .catch((error) => error);
};
