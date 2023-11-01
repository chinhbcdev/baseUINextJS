
import React from "react";
import { Button, ConfigProvider, Input } from "antd";

import theme from "../../theme/themeConfig";
import CustomButton from "./components/CustomButton";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Button type="primary">Button</Button>
      <Button type="primary">Button</Button>
      <Button type="primary">Button</Button>
      <Input></Input>
      <hr />
      <CustomButton>CustomButton</CustomButton>
      <CustomButton>CustomButton</CustomButton>
    </div>
  </ConfigProvider>
);

export default HomePage;
