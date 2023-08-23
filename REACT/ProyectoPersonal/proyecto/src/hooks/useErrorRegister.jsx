import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useErrorRegister = (res, setOk, setRes) => {
  // 200 --->

  if (res?.status == 200) {
    setOk(() => true);
    setRes(() => {
      return {};
    });
    Swal.fire({
      icon: "success",
      title: "Welcome to my Page",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // 409 ---> Usuario ya registrado

  if (res?.response?.status == 409) {
    setRes(() => {
      return {};
    });
    Swal.fire({
      icon: "error",
      title: "Oops .....",
      text: "Sorry change your mail ",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // 500 -----> interval server error

  if (res?.response?.status == 500) {
    setRes(() => {
      return {};
    });
    Swal.fire({
      icon: "error",
      title: "Oops .....",
      text: "Interval server error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export default useErrorRegister;
