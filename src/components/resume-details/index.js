import React from "react";
import { Card, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { CustomTable } from "../custom-table";

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
      dataIndex: "phoneNumber",
      title: <div className="font-weight-bold">Phone Number</div>,
      //   width: "150px",
      key: "phoneNumber",
    },
    // {
    //   dataIndex: "resumeId",
    //   title: <div className="font-weight-bold">Resume ID</div>,
    //   //   width: "150px",
    //   key: "resumeId",
    // },
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
      dataIndex: "techStackName",
      title: <div className="font-weight-bold">Stack Name</div>,
      //   width: "150px",
      key: "techStackName",
    },
    // {
    //   dataIndex: "action",
    //   title: <div className="font-weight-bold">Action</div>,
    //   render: (_, record) => {
    //     return (
    //       <div className="d-flex justify-content-evenly">
    //         <FontAwesomeIcon icon={faDownload} />
    //         <FontAwesomeIcon icon={faEye} />
    //       </div>
    //     );
    //   },
    //   key: "action",
    // },
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
      <CustomTable column={column} details={details}></CustomTable>
    </div>
  );
};
