# 🚀 SmartHire ATS

SmartHire ATS is a full-stack **Applicant Tracking System (ATS)** built using the MERN stack. It helps recruiters manage job postings, candidates, and applications while allowing job seekers to create accounts, browse available jobs, and submit applications.

The project demonstrates full-stack web development using React, Node.js, Express.js, MongoDB, authentication, REST APIs, and cloud deployment.

---

## 🌐 Live Application

### Frontend – Vercel
👉 **Live Application:**  
https://smart-hire-ats.vercel.app/

### Backend – Render
👉 **Backend API:**  
https://smart-hire-ats-quin.onrender.com

### Source Code – GitHub
👉 **GitHub Repository:**  
https://github.com/khushisaini12704-art/Smart-Hire-ATS

---

# 📖 Project Overview

SmartHire ATS is designed to simplify the recruitment process.

The application provides separate functionality for candidates and recruiters.

Recruiters can manage job opportunities and applicants, while candidates can search for jobs and manage their applications.

The frontend communicates with a REST API hosted on Render, while application data is stored securely using MongoDB Atlas.

---

# ✨ Features

## 👤 User Features

- User registration
- Secure user login
- JWT-based authentication
- User profile management
- Browse available jobs
- View job details
- Apply for jobs
- View application status

## 💼 Recruiter Features

- Recruiter account support
- Create job postings
- Manage job postings
- View applicants
- Review candidate applications
- Manage recruitment activities

## 🔐 Security Features

- Password hashing using bcrypt
- JWT authentication
- Protected API routes
- Environment variables for sensitive information
- CORS configuration
- Secure MongoDB Atlas database connection

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

## Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- bcryptjs

## Database

- MongoDB
- MongoDB Atlas
- Mongoose

## Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas
- **Version Control:** Git & GitHub

---

# 📁 Folder Structure

```text
Smart-Hire-ATS/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── .gitignore
├── README.md
├── package.json
├── render.yaml
└── vercel.json
```

---

# ⚙️ Installation Steps

Follow these steps to run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/khushisaini12704-art/Smart-Hire-ATS.git
```

Move into the project:

```bash
cd Smart-Hire-ATS
```

---

## 2. Backend Setup

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder.

Add the required environment variables.

Start the backend:

```bash
npm start
```

The backend will run locally on:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Open another terminal and move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173
```

For the deployed frontend, Vercel uses:

```env
VITE_API_URL=https://smart-hire-ats-quin.onrender.com
```

> ⚠️ Never upload your real `.env` file, MongoDB password, or JWT secret to GitHub.

---

# 🔌 API Documentation

Base API URL:

```text
https://smart-hire-ats-quin.onrender.com
```

## Authentication APIs

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

## Job APIs

```text
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
PUT    /api/jobs/:id
DELETE /api/jobs/:id
```

## Application APIs

```text
POST /api/applications
GET  /api/applications
GET  /api/applications/:id
```

> API endpoints may vary depending on the routes configured in the backend.

---

# 🚀 Deployment

The application is deployed using cloud hosting services.

## Frontend

Hosted on **Vercel**

```text
https://smart-hire-ats.vercel.app/
```

## Backend

Hosted on **Render**

```text
https://smart-hire-ats-quin.onrender.com
```

## Database

Hosted using **MongoDB Atlas**

---

# 📸 Screenshots

## Home Page

<img width="500" height="400" alt="Screenshot 2026-08-09 111336" src="https://github.com/user-attachments/assets/a417942c-19c0-4173-af3e-b680f1248d00" />


## Applicant Page

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/365c29c4-30a5-4361-9175-2fbaf4451d3c" />

## Dashboard

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/92a4e040-f545-4b50-98e2-5301bd9d910d" />


## Jobs Page

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/2913b39b-d6fc-42d7-ad62-ece4e3176b61" />


## Recruiter Dashboard

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/543ffff6-7e71-4d99-adb6-c03e35c5685b" />


---

# 🧪 Testing

The application was tested for:

- User registration
- User login
- Authentication
- Job browsing
- Job creation
- Job applications
- Recruiter functionality
- Frontend/backend communication
- MongoDB database connectivity

---

# 📦 Deployment Architecture

```text
User
  │
  ▼
Frontend
Vercel
  │
  ▼
Backend REST API
Render
  │
  ▼
Database
MongoDB Atlas
```

---

# 📤 Submission

The following links are provided for project submission:

### 🌐 Live Application URL – Vercel 

https://smart-hire-ats.vercel.app/

### ⚙️ Backend API URL – Render

https://smart-hire-ats-quin.onrender.com

### 💻 GitHub Repository

https://github.com/khushisaini12704-art/Smart-Hire-ATS

---

# 👩‍💻 Author

**Khushi Saini**

B.Tech CSE Student

Summer Internship: SmartHire ATS – MERN Stack Project

---

## ⭐ Project Status

✅ Frontend Developed  
✅ Backend Developed  
✅ MongoDB Atlas Connected  
✅ Backend Deployed on Render  
✅ Frontend Deployed on Vercel  
✅ GitHub Repository Created 

📚 Learning Resources

Special thanks to Mr. Hitesh for sharing helpful learning resources during my internship from Skill Flow Learn.
Notes: https://github.com/HiteshCode-Projects/SkillFlowJune⁠


⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
It helps others discover the project and motivates future improvements.
