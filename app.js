import React from "react";

import { Dashboard } from "./src/pages/dashboard/dashboard";

import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd";
import "./src/assets/styles/style.css";
import "./src/assets/styles/overwritestyle.css";

const App = React.memo(() => {
  return (
    <>
      <Dashboard />
    </>
  );
});

export default App;
