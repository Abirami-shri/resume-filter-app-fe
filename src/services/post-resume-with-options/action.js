import { POST_RESUME_WITH_OPTIONS } from "./action-type";
import API_CALL from "..";

export const postResume = (payload) => {
  console.log("payload", payload);
  return API_CALL(
    "post",
    "api/resume/uploadzipfile",
    payload,
    POST_RESUME_WITH_OPTIONS,
    "file"
  );
};
