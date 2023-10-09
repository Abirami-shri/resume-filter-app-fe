import React, { useEffect } from "react";
import { Layout } from "antd";
import { UploadFiles } from "../../components/input-form";

import Logo from "../../assets/images/presidio.png";
import { useDispatch } from "react-redux";
import {
  getStackOptions,
  getVendorOptions,
} from "../../services/get-options/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const { Header, Content, Footer } = Layout;

export const Dashboard = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStackOptions());
    dispatch(getVendorOptions());
  }, []);

  return (
    <Layout>
      <Header className="position-fixed w-100 d-flex justify-content-between align-items-center">
        <img src={Logo} alt="logo" className={"my-3"} />
        <div className="">DASHBOARD</div>
        <div>
          <FontAwesomeIcon icon={faUserCircle} /> sudha@gmail.com
        </div>
      </Header>
      <Content className="p-5">
        <div className="px-4">
          <UploadFiles />
        </div>
      </Content>
      <Footer className="position-fixed bottom-0 w-100">
        &#169; Presidio 2023
      </Footer>
    </Layout>
  );
});
