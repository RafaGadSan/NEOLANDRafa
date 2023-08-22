import { APIUser } from "./service.config";

export const registerUser = async (formData) => {
  return APIUser.post("/users/register", formData)
    .then((res) => res)
    .catch((error) => error);
};
