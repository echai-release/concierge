import React, { useEffect } from "react";

export interface ChatWidgetConfig {
  EChaiServer: string;
  accessToken?: string;
  theme?: "light" | "dark";
  aiMessageIconHoverText?: string;
  aiMessageIconUrl?: string;
  botName?: string;
  botAvatarUrl?: string;
  button?: {
    imageUrl?: string;
    className?: string;
  };
}

declare global {
  interface Window {
    mountEChaiWidget?: (config: ChatWidgetConfig) => void;
  }
}

const SCRIPT_SRC = "https://backend.enterprisechai.com/chatbot/public/build/copilot/index.js";

const ChatWidget: React.FC<{ config: ChatWidgetConfig }> = ({ config }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "widget-loader";
    script.src = SCRIPT_SRC;
    script.defer = true;

    script.onload = () => {
      if (window.mountEChaiWidget) {
        window.mountEChaiWidget(config);
      }
    };

    document.body.appendChild(script);
  }, [config]);

  return null;
};

export default ChatWidget;
