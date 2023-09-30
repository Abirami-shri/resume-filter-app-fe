import { Card } from "antd";
import React from "react";
import { CustomTable } from "../custom-table";

export const CustomCard = React.memo(() => {
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
      ];
  return (
    <Card title="Position with count of job offerings">
      <CustomTable></CustomTable>
    </Card>
  );
});
