import React, { useContext, useEffect, useState } from "react";
import { Table } from "antd";
import { MyContext } from "../input-form";

export const CustomTable = ({ column, details, clickRow, selectedRow }) => {
  var [value, setValue] = useState("");

  const positionContext = useContext(MyContext);

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
      scroll={{ y: 300, x: 800 }}
      dataSource={details}
    ></Table>
  );
};
