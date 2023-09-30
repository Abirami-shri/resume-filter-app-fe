import React, { useEffect, useState } from "react";
import { Col, Row, Button, notification, Form, Select } from "antd";
import { SelectForm } from "../select-form";
import FileUpload from "../file-upload";
import { useDispatch, useSelector } from "react-redux";
import { getStackOptions } from "../../services/get-options/action";
import { ResumeDetails } from "../resume-details";
import { CustomCard } from "../custom-card";

export const UploadFiles = React.memo(() => {
  const formRef = React.useRef(null);
  const { stackOptionRes, vendorOptionRes } = useSelector(
    ({ getStackOptionReducer, getVendorOptionReducer }) => ({
      stackOptionRes: getStackOptionReducer.response.data,
      vendorOptionRes: getVendorOptionReducer.response.data,
    })
  );

  const [getDetails, setDetails] = useState({
    resumeFile: [],
    techStack: "",
    vendor: "",
  });
  const [options, setOptions] = useState({ stack: [], vendor: [] });
  const [show, setShow] = useState(false);

  const handleSelectOptions = (item) => {
    return item.map((value) => ({ value: value.id, label: value.name }));
  };

  useEffect(() => {
    if (stackOptionRes !== undefined)
      setOptions((prev) => ({
        ...prev,
        stack: handleSelectOptions(stackOptionRes),
      }));
    if (vendorOptionRes !== undefined) {
      setOptions((prev) => ({
        ...prev,
        vendor: handleSelectOptions(vendorOptionRes),
      }));
    }
  }, [stackOptionRes, vendorOptionRes]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.error({
      message: `Error`,
      description: "Hello",
      placement: "topRight",
      className: "bg-danger",
      onClose: () => {
        setDetails({ resumeFile: [], techStack: "", vendor: "" });
        setShow(true);
      },
    });
  };

  const onSubmit = (details) => {
    console.log("submit", details);
    openNotification();
  };

  return (
    <div className="mt-5">
      <CustomCard />
      <Form ref={formRef} onFinish={onSubmit} initialValues={getDetails}>
        <Row className="d-flex justify-content-between mt-5" gutter={16}>
          {contextHolder}
          <Col span={6}>
            <FileUpload
              file={getDetails.resumeFile}
              storeFile={(value) => {
                console.log("type of", value);
                setDetails((prev) => ({ ...prev, resumeFile: value }));
              }}
              show={true}
            />
          </Col>
          <Col span={6}>
            <SelectForm
              setSelect={(value) => {
                setDetails((prev) => ({ ...prev, techStack: value }));
              }}
              name={"techStack"}
              placeholder={"Select Stack"}
              options={options.stack}
              value={
                getDetails.techStack.length > 0 ? getDetails.techStack : []
              }
            />
          </Col>
          <Col span={6}>
            <SelectForm
              setSelect={(value) => {
                setDetails((prev) => ({ ...prev, vendor: value }));
              }}
              name={"vendor"}
              placeholder={"Select Vendor"}
              options={options.vendor}
              value={getDetails.vendor.length > 0 ? getDetails.vendor : []}
            />
          </Col>
          <Col className="d-flex justify-content-end" span={6}>
            <Button
              // onClick={(value) => {
              //   openNotification();
              //   setDetails({ resumeFile: [], techStack: "", vendor: "" });
              // }}
              htmlType="submit"
              disabled={
                getDetails.resumeFile.length === 0 ||
                getDetails.techStack.length === 0 ||
                getDetails.vendor.length === 0
              }
              type="primary"
            >
              Apply
            </Button>
          </Col>
        </Row>
      </Form>

      {show && <ResumeDetails />}
    </div>
  );
});
