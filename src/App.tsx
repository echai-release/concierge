import { ChatWidget, ChatWidgetConfig } from "./index";

const config: ChatWidgetConfig = {
  EChaiServer: "https://backend.enterprisechai.com/chatbot",
  accessToken: 'token',
  theme: "light",
  aiMessageIconHoverText: "Ask EChai",
  aiMessageIconUrl:
    "https://backend.enterprisechai.com/chatbot/avatars/Enterprise%20Chai%20Assistant",
};

export default function App() {
  return (
    <div>
      <ChatWidget config={config} />
    </div>
  );
}
