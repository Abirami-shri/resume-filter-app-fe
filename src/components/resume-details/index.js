import React from "react";
import { CustomTable } from "../custom-table";
import candidates from "../../data/candidates.js";

export const ResumeDetails = () => {
  const column = [
    {
      dataIndex: "name",
      title: <div className="font-weight-bold">Name</div>,
      //   width: "150px",
      key: "name",
    },
    {
      dataIndex: "email",
      title: <div className="font-weight-bold">Email</div>,
      //   width: "150px",
      key: "email",
    },
    {
      dataIndex: "phone",
      title: <div className="font-weight-bold">Phone #</div>,
      //   width: "150px",
      key: "phone",
    },
    {
      dataIndex: "uploadedBy",
      title: <div className="font-weight-bold">Uploaded By</div>,
      //   width: "150px",
      key: "uploadedBy",
    },
    {
      dataIndex: "uploadedDate",
      title: <div className="font-weight-bold">Uploaded Date</div>,
      //   width: "150px",
      key: "uploadedDate",
    },
    {
      dataIndex: "vendorName",
      title: <div className="font-weight-bold">Vendor Name</div>,
      //   width: "150px",
      key: "vendorName",
    },
    {
      dataIndex: "techStack",
      title: <div className="font-weight-bold">Stack Name</div>,
      //   width: "150px",
      key: "techStack",
    },
    {
      dataIndex: "position",
      title: <div className="font-weight-bold">Position</div>,
      //   width: "150px",
      key: "position",
    },
  ];

  const details = [
    {
      id: "1",
      name: "Abirami Shri O B",
      email: "abc@gmail.com",
      phoneNumber: 9357267890,
      resumeId: "12",
      uploadedBy: "Hema",
      uploadedDate: "12 Oct, 2022",
      vendorName: "Abi",
      techStackName: "React JS + Node JS",
    },
  ];

  return (
    <div className="my-5">
      <CustomTable column={column} details={candidates}></CustomTable>
    </div>
  );
};
