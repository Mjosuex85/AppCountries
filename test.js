export function getAllInfo(date) {
  if (!date) {
    const fechaActual = new Date();

    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const fechaFormateada = "track_" + año + padZero(mes);

    function padZero(numero) {
      return numero < 10 ? "0" + numero : numero;
    }
    date = fechaFormateada;
  }


  return function (dispatch) {
    axios
      .get(`${DATA_URL}?trackDate=${date}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_ALL_INFO,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
