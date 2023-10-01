import React, { useEffect, useState } from "react";
import { CustomTable } from "../custom-table";
import candidates from "../../data/candidates.js";

export const ResumeDetails = ({ filteredValue }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const filteredDetails = candidates.filter((item) =>
      item.position.toLowerCase().includes(filteredValue.toLowerCase())
    );
    setDetails(filteredDetails);
  }, [filteredValue]);
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

  return (
    <div className="my-5">
      <CustomTable
        column={column}
        details={details.length > 0 ? details : candidates}
      ></CustomTable>
    </div>
  );
};
