# concierge
EnterpriseChai Concierge is a context aware and AI powered chatbot that engages with end users, captures, qualifies, and routes inbound leads with precision — 24/7

---

## Setup & Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/echai-release/concierge.git
cd concierge
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your access token
In src/App.tsx:
```ruby
const config: ChatWidgetConfig = {
  eChaiServer: "https://backend.enterprisechai.com/chatbot",
  accessToken: 'your-token',            # Add your token here
  theme: "light",
  aiMessageIconHoverText: "Ask EChai",
  aiMessageIconUrl:
    "https://backend.enterprisechai.com/chatbot/avatars/Enterprise%20Chai%20Assistant",
};
```

### 4. View the example
```bash
npm run dev
```

Open your browser at:
```bash
http://localhost:3000/example/index.html
```

### 5. Mount Concierge to your webpage
View the example page under ``example/index.html`` and add the script to your webpage.
```ruby
<script type="module" src="../src/ChatWidget.tsx"></script> 
```