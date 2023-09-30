import React from "react";
import { Table } from "antd";

export const CustomTable = ({ column, details }) => {
  console.log("custom table", column, details);
  return (
    <Table
      bordered
      rowKey={"id"}
      size="small"
      pagination={{ pageSizeOptions: ["10", "15", "30", "40", "50"] }}
      columns={column}
      scroll={{ y: 300, x: 800 }}
      dataSource={details}
    ></Table>
  );
};
