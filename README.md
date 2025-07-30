# Dev Dashboard 🛠️ – A Simple React Toolkit (WIP)

This is a beginner-friendly ReactJS project that serves as a learning playground for React concepts such as state management, routing, props drilling, custom hooks, and REST API integration. Built as part of an assignment.

## 🌟 Features

- 🔍 **GitHub User Search** – Fetch and display user data via GitHub REST API
- 🖥️ **Screen Width Tracker** – Custom React Hook to show real-time window size
- 📄 **Text Input Mirror** – An interactive input field that reflects typed content in real-time using useState.
- ➕ **Addition App** – Number addition using controlled components
- 🧭 **React Router** – Multi-page navigation with dynamic URL params
- 📦 **Props Drilling** – State passed through nested components
- 🔐 **REST API with Token** – Axios integration with backend-authenticated endpoints
- 🔁 **GitHub Actions** – Manual and scheduled CI triggers
- ⚙️ **Backend API** – FastAPI-powered backend with token-based endpoints

## 🛠️ Tech Stack

- **Frontend:** ReactJS, React Router, Axios, Bootstrap
- **Backend:** FastAPI
- **CI/CD:** GitHub Actions
- **Tools:** VS Code, Git, Python, Node.js

## 🖥️ Run the Backend (FastAPI) & Run the Frontend (ReactJS)

```bash
##Backend 
python -m venv venv
venv\Scripts\activate    # On Windows
source venv/bin/activate   # On Mac/Linux

pip install -r requirements.txt
uvicorn main:app --reload

##Frontend 
cd frontend
npm install
npm start
