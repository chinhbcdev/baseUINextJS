import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
          Button: {
            colorPrimary: '#00b96b',
            algorithm: true, // Enable algorithm
          },
          Input: {
            colorPrimary: '#eb2f96',
            algorithm: true, // Enable algorithm
          }
        },
  token: {
    // Seed Token
    colorPrimary: '#f1f',
    borderRadius: 2,

    // Alias Token
    colorBgContainer: '#f6ffed',
  },
  
};

export default theme;
