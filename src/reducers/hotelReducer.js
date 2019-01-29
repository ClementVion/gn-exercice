import { FETCH_HOTELS_BEGIN, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE } from '../actions/hotelActions';

const initialState = {
  hotels: [],
  loading: false,
  error: null
};

export default function hotelReducer(state = initialState, action) {

  switch(action.type) {

    case FETCH_HOTELS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: action.payload.hotels
      }

    case FETCH_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        hotels: []
      }

    default:
      return state;

  }

}