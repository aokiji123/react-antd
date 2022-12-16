import React from "react";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2123bf",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
