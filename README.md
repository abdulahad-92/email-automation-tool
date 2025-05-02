A MERN-based PWA with n8n and DeepSeek AI to automate email tasks for businesses.

## Progress

- Basic MERN setup with Vite/React UI and Node.js backend.
- n8n workflow with DeepSeek API for email classification.

## Setup

1.  Clone: `git clone https://github.com/your-username/email-automation-tool.git`
2.  Backend: `cd server && npm install && node index.js`
3.  Frontend: `cd client && npm install && npm run dev`
4.  n8n: `docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8n`
