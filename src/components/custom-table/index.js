import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";

export const CustomTable = ({
  column,
  details,
  clickRow,
  selectedRow,
  tableXSize,
  tableYSize,
  loader,
}) => {
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
      scroll={{
        y: tableYSize ? tableYSize : 300,
        x: tableXSize ? tableXSize : 800,
      }}
      dataSource={details}
      loading={loader && <Spin />}
    ></Table>
  );
};
