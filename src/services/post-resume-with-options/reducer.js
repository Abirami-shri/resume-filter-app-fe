import { POST_RESUME_WITH_OPTIONS } from "./action-type";
const initialState = { requesting: false, errorResponse: {}, response: [] };

export const postResumeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_RESUME_WITH_OPTIONS.REQ:
      return {
        ...state,
        requesting: true,
      };
    case POST_RESUME_WITH_OPTIONS.RES:
      return {
        ...state,
        response: { data: payload.data, status: payload.status },
        requesting: false,
      };
    case POST_RESUME_WITH_OPTIONS.FAIL:
      return { ...state, errorResponse: payload.data, requesting: false };
    default:
      return state;
  }
};
