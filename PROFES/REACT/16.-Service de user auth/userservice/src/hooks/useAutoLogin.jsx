import { Navigate } from "react-router-dom";
import { autologinUser } from "../service/API_user/user.service";

export const useAutoLogin = async (allUser, userLogin) => {
  try {
    const { password, email } = allUser?.data?.user;
    const customFormData = {
      email,
      password,
    };

    const sendData = await autologinUser(customFormData);

    if (sendData?.status == 200) {
      const { name, email, image, check } = sendData?.data?.user;
      const userCustom = {
        token: sendData.data.token,
        user: name,
        email,
        image,
        check,
        _id: sendData.data.user._id,
      };

      const stringUser = JSON.stringify(userCustom);
      userLogin(stringUser);
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.log(error);
  }
};
