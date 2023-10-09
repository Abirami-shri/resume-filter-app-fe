import { GET_STACK_OPTIONS, GET_VENDOR_OPTIONS } from "./action-type";

const initialState = { requesting: false, errorResponse: {}, response: [] };

export const getStackOptionReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_STACK_OPTIONS.REQ:
      return {
        ...state,
        requesting: true,
      };
    case GET_STACK_OPTIONS.RES:
      return {
        ...state,
        response: { data: payload.data, status: payload.status },
        requesting: false,
      };
    case GET_STACK_OPTIONS.FAIL:
      return { ...state, errorResponse: payload.data, requesting: false };
    default:
      return state;
  }
};

export const getVendorOptionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VENDOR_OPTIONS.REQ:
      return {
        ...state,
        requesting: true,
      };
    case GET_VENDOR_OPTIONS.RES:
      return {
        ...state,
        response: { data: payload.data, status: payload.status },
        requesting: false,
      };
    case GET_VENDOR_OPTIONS.FAIL:
      return { ...state, errorResponse: payload.data, requesting: false };
    default:
      return state;
  }
};
