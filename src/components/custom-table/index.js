import React from "react";
import { Table } from "antd";

export const CustomTable = ({ column, details, clickRow }) => {
  console.log("custom table", column, details);
  return (
    <Table
      bordered
      rowKey={"id"}
      size="small"
      pagination={{ pageSizeOptions: ["10", "15", "30", "40", "50"] }}
      columns={column}
      onRow={(row) =>
        clickRow && {
          onClick: () => {
            console.log("row", row);
          },
        }
      }
      scroll={{ y: 300, x: 800 }}
      dataSource={details}
    ></Table>
  );
};
