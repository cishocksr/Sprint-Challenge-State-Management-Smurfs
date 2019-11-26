import axios from "axios";

export const SMURF_LOAD_START = "SMURF_LOAD_START";
export const SMURF_LOAD_SUCCESS = "SMURF_LOAD_SUCCESS";
export const SMURF_LOAD_FAILURE = "SMURF_LOAD_FAILURE";

export const smurfData = () => dispatch => {
  dispatch({ type: SMURF_LOAD_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(result =>
      dispatch({
        type: SMURF_LOAD_SUCCESS,
        payload: result.data
      })
    )
    .catch(error =>
      dispatch({
        type: SMURF_LOAD_FAILURE,
        payload: error
      })
    );
};

export const smurfSubmit = data => dispatch => {
  dispatch({ type: SMURF_LOAD_START });
  console.log(data);

  axios
    .post("http://localhost:3333/smurfs", data)
    .then(result =>
      dispatch({
        type: SMURF_LOAD_SUCCESS,
        payload: result.data
      })
    )
    .catch(error =>
      dispatch({
        type: SMURF_LOAD_FAILURE,
        payload: error
      })
    );
};
