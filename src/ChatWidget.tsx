import React from "react";
import ReactDOM from "react-dom/client";
import { ChatWidget, ChatWidgetConfig } from "@enterprisechai/concierge";

const config: ChatWidgetConfig = {
  accessToken: 'token', // Your token here
  theme: "light",
  aiMessageIconHoverText: "Ask EChai",
  aiMessageIconUrl:
    "https://backend.enterprisechai.com/chatbot/avatars/Enterprise%20Chai%20Assistant",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChatWidget config={config} />
    </React.StrictMode>
);