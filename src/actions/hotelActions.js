import config from "../config/config.json";

/*
* Original code from https://daveceddia.com/where-fetch-data-redux/
*/
export function fetchHotels() {

  return dispatch => {
    dispatch(fetchHotelsBegin());
    return fetch(config.apiEndpoint)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchHotelsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchHotelsFailure(error)));
  };

}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_HOTELS_BEGIN = "FETCH_HOTELS_BEGIN";
export const FETCH_HOTELS_SUCCESS = "FETCH_HOTELS_SUCCESS";
export const FETCH_HOTELS_FAILURE = "FETCH_HOTELS_FAILURE";

export const fetchHotelsBegin = () => ({
  type: FETCH_HOTELS_BEGIN
});

export const fetchHotelsSuccess = hotels => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: { hotels }
});

export const fetchHotelsFailure = error => ({
  type: FETCH_HOTELS_FAILURE,
  payload: { error }
});