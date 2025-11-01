# 🧩 Pipeline Parser

A lightweight full-stack application built to **analyze directed graphs (pipelines)** — counting nodes and edges, and verifying whether the structure forms a **Directed Acyclic Graph (DAG)**.  
The project consists of a **React-based frontend** and a **FastAPI backend**.

---

## 🚀 Features
- Visual pipeline builder (frontend)
- Backend API for parsing and analyzing pipeline data
- Returns:
  - Number of nodes
  - Number of edges
  - Whether the graph is a DAG (Directed Acyclic Graph)
- FastAPI backend with CORS support
- Modular and easy to extend for new processing logic

---

## 🛠️ Tech Stack
**Frontend:** React, JavaScript, HTML, CSS  
**Backend:** Python, FastAPI  
**Other Tools:** Uvicorn, Axios, CORS Middleware

---

## ⚙️ Setup & Run Instructions

### 🔹 1. Clone the repository
```bash
git clone https://github.com/Shivanshom/Pipeline-Parser.git
cd Pipeline-Parser
```
🔹 2. Run the Backend

Navigate to the backend folder:
```bash
cd backend
```

Make sure FastAPI and Uvicorn are installed:
```bash
pip install fastapi uvicorn
```

Run the server:
```bash
uvicorn main:app --reload
```
🔹 3. Run the Frontend

Open another terminal and navigate to the frontend:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Update the backend endpoint inside submit.js:
```bash
const API_URL = "http://localhost:8000/pipelines/parse";
```

Start the development server:
```bash
npm start
Visit http://localhost:3000 to use the app.
```
🧠 API Overview
POST /pipelines/parse
Parses pipeline data and returns graph details.
Request Body:
```json

{
  "nodes": [
    { "id": "1", "type": "Start", "data": {}, "position": {} },
    { "id": "2", "type": "Process", "data": {}, "position": {} }
  ],
  "edges": [
    { "id": "e1", "source": "1", "target": "2" }
  ]
}
```
Response:
```json

{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```
📂 Project Structure
Pipeline-Parser/
│
├── backend/
│   ├── main.py          # FastAPI backend logic
│   └── requirements.txt # Optional dependencies list
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   └── submit.js    # API call to backend
│   └── package.json
│
└── README.md

✨ Author

Shivansh Srivastava
📧 roskom16122002@gmail.com

💼 GitHub: [Shivanshom](https://github.com/Shivanshom)