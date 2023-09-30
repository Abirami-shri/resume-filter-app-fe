import API_CALL from "..";
import { GET_STACK_OPTIONS, GET_VENDOR_OPTIONS } from "./action-type";

export const getStackOptions = () => {
  return API_CALL("get", "api/common/techStacks", null, GET_STACK_OPTIONS);
};

export const getVendorOptions = () => {
  return API_CALL("get", "api/common/vendors", null, GET_VENDOR_OPTIONS);
};
