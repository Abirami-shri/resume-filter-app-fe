import React, { useState, useContext } from "react";
import { Card, Row, Col } from "antd";
import { SelectForm } from "../select-form";
import { CustomTable } from "../custom-table";
import ChartComponent from "../custom-chart";
import { MyContext } from "../input-form";

export const CustomCard = React.memo(() => {
  const [selectPosition, setSelectPosition] = useState("Software Engineer");

  const positionContext = useContext(MyContext);
  // Data for the bar chart
  const options = [
    { label: "Software Engineer", value: 1 },
    { label: "Senior Engineer", value: 2 },
    { label: "Data Engineer", value: 3 },
    { label: "Lead Engineer", value: 4 },
  ];

  const positionColumn = [
    {
      dataIndex: "opening",
      title: <div className="font-weight-bold">Opening Position</div>,
      //   width: "150px",
      key: "opening",
    },
    {
      dataIndex: "count",
      title: <div className="font-weight-bold">#</div>,
      //   width: "150px",
      key: "count",
    },
  ];

  const interviewColumn = [
    {
      dataIndex: "candidateName",
      title: <div className="font-weight-bold">Candidate Name</div>,
      key: "candidateName",
    },
    {
      dataIndex: "scheduledDate",
      title: <div className="font-weight-bold">Scheduled Date</div>,
      key: "scheduledDate",
    },
    {
      dataIndex: "scheduledTime",
      title: <div className="font-weight-bold">Scheduled Time</div>,
      key: "scheduledTime",
    },
  ];

  const interviewDetails = [
    {
      id: "1",
      candidateName: "Hemavarthini V",
      scheduledDate: "8th October, 2023",
      scheduledTime: "15:00 PM",
    },
    {
      id: "2",
      candidateName: "Vaishnavi KR",
      scheduledDate: "10th October, 2023",
      scheduledTime: "17:00 PM",
    },
    {
      id: "3",
      candidateName: "Mahasri Swetha KR",
      scheduledDate: "11th October, 2023",
      scheduledTime: "10:00 AM",
    },
    {
      id: "4",
      candidateName: "Prem Kumar M",
      scheduledDate: "12th October, 2023",
      scheduledTime: "16:00 PM",
    },
  ];

  const positionDetails = [
    {
      id: "1",
      opening: "Senior Engineer",
      count: 20,
    },
    {
      id: "2",
      opening: "Data Engineer",
      count: 10,
    },
    {
      id: "3",
      opening: "Software Engineer",
      count: 20,
    },
    {
      id: "4",
      opening: "Lead Engineer",
      count: 5,
    },
  ];
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card size="small" title="Position with count of job offerings">
            <CustomTable
              column={positionColumn}
              details={positionDetails}
              clickRow={true}
              selectedRow={(value) => {
                positionContext.setSelect(value);
              }}
              tableSize={{x:300}}
            ></CustomTable>
          </Card>
        </Col>
        <Col span={8}>
          <Card size="small" title="Interview in progress">
            <CustomTable
              column={interviewColumn}
              details={interviewDetails}
              // tableSize={{x:700}}
            ></CustomTable>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="chart"
            extra={
              <SelectForm
                options={options}
                setSelect={(value) => setSelectPosition(value)}
                placeholder={"Select Position"}
                position={true}
                value={
                  selectPosition.length > 0
                    ? [
                        {
                          label: selectPosition,
                          value: options.filter(
                            (item) =>
                              item.label.toLowerCase ===
                              selectPosition.toLowerCase
                          ).value,
                        },
                      ]
                    : []
                }
              />
            }
          >
            <ChartComponent value={selectPosition} />
          </Card>
        </Col>
      </Row>
      {/* <Row gutter={16}>
        <Col span={24}>
          <Card
            title="chart"
            extra={
              <SelectForm
                options={options}
                setSelect={(value) => setSelectPosition(value)}
                placeholder={"Select Position"}
                position={true}
                value={
                  selectPosition.length > 0
                    ? [
                        {
                          label: selectPosition,
                          value: options.filter(
                            (item) =>
                              item.label.toLowerCase ===
                              selectPosition.toLowerCase
                          ).value,
                        },
                      ]
                    : []
                }
              />
            }
          >
            <ChartComponent value={selectPosition} />
          </Card>
        </Col>
      </Row> */}
    </div>
  );
});
