import React, { useEffect, useState } from "react";

const ButtonCustom = (props) => {
  const [token, setToken] = useState(() => ({
    count: 0,
    token: false,
  }));

  useEffect(
    () => {
      console.log("token", token);
    },
    /* array de dependencias */ [token]
  );

  const handle = () => {
    let customToken;
    switch (props.setCount.name) {
      case "increment":
        setToken((value) => {
          customToken = {
            ...value,
            count: localStorage.getItem("count")
              ? parseInt(localStorage.getItem("count")) + 1
              : token.count + 1,
          };
          localStorage.setItem("count", customToken.count.toString());

          if (customToken.count == 5) {
            const newTokenCustom = {
              ...customToken,
              token: true,
            };

            return newTokenCustom;
          } else {
            customToken.token = false;
            return customToken;
          }
        });

        break;

      case "decrement":
        setToken((valueDecrement) => {
          customToken = {
            ...value,
            count: localStorage.getItem("count")
              ? parseInt(localStorage.getItem("count")) - 1
              : token.count - 1,
          };
          localStorage.setItem("count", customToken.count.toString());

          if (customToken.count == 5) {
            customToken.token = true;

            return customToken;
          } else {
            customToken.token = false;
            return customToken;
          }
        });

        break;

      case "reset":
        setToken((valueDecrement) => {
          customToken = {
            ...valueDecrement,
            count: props.initialValue,
          };

          if (customToken.count == 5) {
            const newTokenCustom = {
              ...customToken,
              token: true,
            };

            return newTokenCustom;
          } else {
            customToken.token = false;
            return customToken;
          }
        });
        break;

      default:
        break;
    }

    props.setCount();
  };

  return (
    <button
      onClick={() => {
        handle();
      }}
    >
      {props.children}
    </button>
  );
};

export default ButtonCustom;
