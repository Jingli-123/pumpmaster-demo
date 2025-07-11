# PumpMaster Demo

A demo of farm pump location

## Features
- ** Role-based Authentication** (Farmer/Admin)
- Desktop UI with Tailwind CSS
- Dockerized deployment

## Quick Start


### Installation

1. **Clone repository**
```bash
git clone https://github.com/Jingli-123/pumpmaster-demo.git
cd pumpmaster-demo
```
2. **Environment Setup**
Create `.env` file in the root directory.
Edit `.env` with your credentials:
```env
# dummy token
VITE_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
```

3. **Install dependencies**
```bash
npm install
````

4. **Start the application locally**
```bash
npm run dev
```

This will:
- Launch demo frontend app on port 5173

Access the application at: http://localhost:5173

5. **Start the application with docker (option)**
```bash
docker build -t pumpmaster-demo .
```
This will:
- Start build demo frontend app on docker

```bash
docker run -d -p 3000:80 pumpmaster-demo
```
This will:
- Launch demo frontend app on port 3000

Access the application at: http://localhost:3000

