import { useState } from "react";
import { ChangePassword, FormProfile } from "../components";
import { useAuth } from "../context/authContext";
import "./Profile.css";
import { useDeleteUser } from "../hooks";

export const Profile = () => {
  const [changeRender, setChangeRender] = useState(true);
  const { setUser } = useAuth();
  // vamos a tener tres funcionalidades

  //! 1) -------------------> cambio de contraseña con el token

  //! 2) -------------------> cambio de datos del usuario

  //! 3) -------------------> borrado del usuario

  return (
    <>
      <div className="containerNavProfile">
        <img
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125399/pngwing.com_npd5sa.png"
          alt="go to ChangePassword"
          className="iconNav"
          onClick={() => setChangeRender(false)}
        />
        <img
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125391/Change_User_icon-icons.com_55946_lypx2c.png"
          alt="go to change data profile"
          className="iconNav iconChangeProfile"
          onClick={() => setChangeRender(true)}
        />
        <img
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686140226/eliminar_user_rmwoeg.png"
          alt="user delete button"
          className="iconNav iconDeleteUser"
          // customhook que hace la peticion al servicio de delete User y setea el usuario a null en el contexto
          onClick={() => useDeleteUser(setUser)}
        />
      </div>
      <div className="fluidContainerProfile">
        {changeRender ? <FormProfile /> : <ChangePassword />}
      </div>
    </>
  );
};
