import { useState, useEffect } from "react";

const useFetch = (url) => {
  /// gestion de estados complejos

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  ///! funcion asincroncrona que se encarga ddee gestionr lac asincronia con la api

  const getFetch = async () => {
    /// empezamos a hacer una llamada a la api ----->  isLoading : true

    setState({ ...state, isLoading: true });

    /// hacemos la lllamada asincrona con async await y un try catch para capturar errores

    try {
      const resp = await fetch(url);

      /// vamos a ver si la respuesta es correcta sino lanzamos un errror

      if (!resp.ok) {
        throw new Error(`HTTP ERROR: status ${resp.status}/ ${resp}`);
      } else {
        // si la respuesta es correcta pues lo hacemos en json

        const data = await resp.json();

        // como tengo la info el isLoading para a estar a false

        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      }
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  //! ------------- retornamos los elementos que necesitamos donde se consuma la funcion

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    state: state,
  };
};

export default useFetch;
