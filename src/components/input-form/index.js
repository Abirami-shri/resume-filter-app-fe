import React, { createContext, useContext, useEffect, useState } from "react";
import { Col, Row, notification, Form } from "antd";
import { SelectForm } from "../select-form";
import FileUpload from "../file-upload";
import { useDispatch, useSelector } from "react-redux";
import { ResumeDetails } from "../resume-details";
import { CustomCard } from "../custom-card";
import { postResume } from "../../services/post-resume-with-options/action";

export const MyContext = createContext();

export const UploadFiles = React.memo(() => {
  const dispatch = useDispatch();
  const formRef = React.useRef(null);
  const { stackOptionRes, vendorOptionRes, getResponseForResume } = useSelector(
    ({ getStackOptionReducer, getVendorOptionReducer, postResumeReducer }) => ({
      stackOptionRes: getStackOptionReducer.response.data,
      vendorOptionRes: getVendorOptionReducer.response.data,
      getResponseForResume: postResumeReducer.response.data,
    })
  );

  const [loader, setLoader] = useState(false);
  const [getDetails, setDetails] = useState({
    position: "",
    resumeFile: [],
    techStack: "",
    vendor: "",
  });

  const positionOptions = [
    {
      value: 1,
      label: "Senior Engineer",
    },
    {
      value: 2,
      label: "Data Engineer",
    },
    {
      value: 3,
      label: "Software Engineer",
    },
    {
      value: 4,
      label: "Lead Engineer",
    },
  ];
  const [options, setOptions] = useState({ stack: [], vendor: [] });
  const [show, setShow] = useState(false);

  const handleSelectOptions = (item) => {
    return item.map((value) => ({ value: value.id, label: value.name }));
  };

  const dispatchinResumeDetails = (details) => {
    setLoader(true);
    dispatch(postResume(details));
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

  useEffect(() => {
    if (
      getResponseForResume !== undefined &&
      getDetails.position.length > 0 &&
      getDetails.techStack.length > 0 &&
      getDetails.vendor.length > 0
    )
      openNotification();
    else if (
      getDetails.position.length > 0 &&
      getDetails.techStack.length > 0 &&
      getDetails.vendor.length > 0
    ) {
      setDetails((prev) => ({
        ...prev,
        resumeFile: [],
        techStack: "",
        vendor: "",
      }));
      setLoader(false);
      setShow(true);
    }
  }, [getResponseForResume]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    setShow(false);
    api.error({
      message: `Found Duplicate Resumes`,
      description: `${getDetails.resumeFile[0]?.name.replace(
        ".zip",
        ".pdf"
      )} is already existed with same stack and position and it's uploaded by Vendor 1`,
      placement: "topRight",
      className: "bg-danger",
      onClose: () => {
        setDetails((prev) => ({
          ...prev,
          resumeFile: [],
          techStack: "",
          vendor: "",
        }));
        setLoader(false);
        setShow(true);
      },
    });
  };

  const onSubmit = () => {
    const detail = {
      ZipFile: getDetails.resumeFile[0],
      TechStackId: getDetails.techStack,
      VendorId: getDetails.vendor,
    };
    dispatchinResumeDetails(detail);
  };

  const selectedPositionRow = (value) => {
    setDetails((prev) => ({ ...prev, position: value }));
  };

  useEffect(() => {
    if (getDetails.techStack.length > 0 && getDetails.vendor.length > 0)
      onSubmit();
    else if (getDetails.position.length > 0) setShow(true);
  }, [getDetails]);

  return (
    <div className="mt-5">
      <MyContext.Provider
        value={{ setSelect: selectedPositionRow, ref: formRef }}
        className="mt-5"
      >
        <CustomCard />
        <Form
          id="form"
          ref={formRef}
          onFinish={onSubmit}
          initialValues={getDetails}
        >
          <Row className="mt-5" gutter={16}>
            <Col span={6}>
              <SelectForm
                setSelect={(value) => {
                  setDetails((prev) => ({ ...prev, position: value }));
                }}
                name={"position"}
                placeholder={"Select Position"}
                options={positionOptions}
                position={true}
                value={
                  getDetails.position === undefined ||
                  getDetails.position.length > 0
                    ? getDetails.position
                    : []
                }
              ></SelectForm>
            </Col>

            <Col span={6}>
              <FileUpload
                file={getDetails.resumeFile}
                storeFile={(value) => {
                  setDetails((prev) => ({ ...prev, resumeFile: value }));
                }}
                disabled={getDetails.position.length > 0 ? false : true}
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
                disabled={getDetails.resumeFile.length > 0 ? false : true}
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
                onSubmit={true}
                disabled={
                  getDetails.techStack !== undefined &&
                  getDetails.techStack.length > 0
                    ? false
                    : true
                }
              />
            </Col>
          </Row>
        </Form>
        {contextHolder}

        {show && (
          <ResumeDetails loader={loader} filteredValue={getDetails.position} />
        )}
      </MyContext.Provider>
    </div>
  );
});
