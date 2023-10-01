import React, { useEffect, useState } from "react";
import { Bar } from "@ant-design/charts";
import { SelectForm } from "../select-form";

const ChartComponent = ({ value }) => {
  const [selectPosition, setSelectPosition] = useState(value);

  useEffect(() => {
    setSelectPosition(value);
  }, [value]);
  // Data for the bar chart
  const data = [
    {
      vendorName: "Vendor A",
      count: 40,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor B",
      count: 50,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor C",
      count: 20,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor D",
      count: 10,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor E",
      count: 35,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor F",
      count: 40,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor G",
      count: 50,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor H",
      count: 20,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor I",
      count: 10,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor J",
      count: 35,
      position: "Software Engineer",
    },
    {
      vendorName: "Vendor A",
      count: 35,
      position: "Data Engineer",
    },
    {
      vendorName: "Vendor B",
      count: 20,
      position: "Data Engineer",
    },
    {
      vendorName: "Vendor C",
      count: 20,
      position: "Data Engineer",
    },
    {
      vendorName: "Vendor D",
      count: 10,
      position: "Data Engineer",
    },
    {
      vendorName: "Vendor E",
      count: 5,
      position: "Data Engineer",
    },
    {
      vendorName: "Vendor A",
      count: 15,
      position: "Lead Engineer",
    },
    {
      vendorName: "Vendor B",
      count: 57,
      position: "Lead Engineer",
    },
    {
      vendorName: "Vendor C",
      count: 27,
      position: "Lead Engineer",
    },
    {
      vendorName: "Vendor D",
      count: 49,
      position: "Lead Engineer",
    },
    {
      vendorName: "Vendor E",
      count: 38,
      position: "Lead Engineer",
    },
    {
      vendorName: "Vendor A",
      count: 78,
      position: "Senior Engineer",
    },
    {
      vendorName: "Vendor B",
      count: 52,
      position: "Senior Engineer",
    },
    {
      vendorName: "Vendor C",
      count: 80,
      position: "Senior Engineer",
    },
    {
      vendorName: "Vendor D",
      count: 38,
      position: "Senior Engineer",
    },
    {
      vendorName: "Vendor E",
      count: 60,
      position: "Lead Engineer",
    },
  ];

  // Configuration options for the bar chart
  const config = {
    data:
      selectPosition.length > 0
        ? data.filter((item) =>
            item.position.toLowerCase().includes(selectPosition.toLowerCase())
          )
        : data,
    xField: "count",
    yField: "vendorName",
    yAxis: {
      // label: {
      //   formatter: (v) => `${v} units`,
      // },
    },
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: false,
      },
    },
    label: {
      position: "middle",
      style: {
        fill: "#fff",
      },
    },
  };

  return (
    <div>
      <Bar height={200} width={500} {...config} />
    </div>
  );
};

export default ChartComponent;
