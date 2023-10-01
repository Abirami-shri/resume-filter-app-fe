import React, { useEffect, useState } from "react";
import { Table } from "antd";

export const CustomTable = ({ column, details, clickRow, selectedRow, tableSize }) => {
  var [value, setValue] = useState("");

  useEffect(() => {
    if (clickRow && selectedRow) {
      selectedRow(value);
    }
  }, [value]);

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
            setValue(row.opening);
          },
        }
      }
      scroll={{ y: 300, x: tableSize ? tableSize : 800 }}
      dataSource={details}
    ></Table>
  );
};
