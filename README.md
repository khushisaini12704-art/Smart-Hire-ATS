# SmartHire – Applicant Tracking System

SmartHire is a production-ready MERN applicant tracking system for recruiters. It includes JWT authentication, recruiter-only protected routes, job and applicant management, a hiring dashboard, PDF resume uploads, debounced search, filters, sorting, pagination, CSV export, optional email notifications, a recruiter profile, responsive design, and dark mode.

## Technology

- Frontend: React 19, TypeScript, Vite, React Router, Axios, CSS Grid/Flexbox
- Backend: Node.js, Express, MongoDB/Mongoose, MVC architecture
- Security: JWT, bcrypt, Helmet, CORS, rate limiting, validation and centralized errors
- Deployment: Vercel frontend, Render backend, MongoDB Atlas database

## Project structure

```text
smarthire/
├── backend/
│   ├── config/ controllers/ middleware/ models/ routes/ utils/
│   ├── uploads/
│   ├── .env.example
│   └── server.js
├── frontend/
│   ├── src/api components context hooks pages types/
│   └── .env.example
├── render.yaml
└── vercel.json
```

## Run locally

Requirements: Node.js 20+, npm, and MongoDB (local or Atlas).

```bash
git clone <your-repository-url>
cd smarthire
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
npm install
npm run install:all
npm run dev
```

Open `http://localhost:5173`. The API runs at `http://localhost:5000`.

Set `MONGO_URI` and a long random `JWT_SECRET` in `backend/.env`. Passwords require at least eight characters, uppercase, lowercase, and a number. Resume uploads accept PDF only, up to 5 MB.

## Main API routes

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register recruiter |
| POST | `/api/auth/login` | Login recruiter |
| GET/PUT | `/api/auth/me`, `/api/auth/profile` | Read/update profile |
| GET/POST | `/api/jobs` | Search/list/create jobs |
| GET/PUT/DELETE | `/api/jobs/:id` | Manage one job |
| GET/POST | `/api/applicants` | Search/list/add applicants |
| PUT/DELETE | `/api/applicants/:id` | Update status/details or delete |
| GET | `/api/applicants/export/csv` | Export filtered applicants |
| GET | `/api/dashboard` | Recruitment analytics |

All routes except register, login, and health require `Authorization: Bearer <token>`.

## Optional email

Add SMTP values to `backend/.env`. When configured, an applicant receives a status-change email. If SMTP is blank, the application continues normally without email.

## Deploy

### MongoDB Atlas

1. Create a cluster, database user, and network access rule.
2. Copy the connection URI into Render as `MONGO_URI`.

### Render backend

1. Create a Web Service from the repository or use `render.yaml`.
2. Root directory: `backend`; build: `npm ci`; start: `npm start`.
3. Add `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`, and optional SMTP variables.
4. Persistent resume storage should use an object-storage service for long-term production use; Render's local filesystem is ephemeral.

### Vercel frontend

1. Import the repository. The root `vercel.json` builds `frontend`.
2. Add `VITE_API_URL=https://your-render-service.onrender.com/api`.
3. Put the Vercel site URL in Render's `CLIENT_URL`, then redeploy.

## Professional Git workflow

```bash
git checkout -b feature/authentication
git add .
git commit -m "feat: add secure recruiter authentication"
git push -u origin feature/authentication
```

Create a pull request, review it, merge into `main`, and repeat with focused branches such as `feature/job-management`, `feature/applicant-pipeline`, and `feature/dashboard`.

## Verification

```bash
npm run build
npm --prefix frontend run lint
```

Never commit `.env`, uploaded resumes, database credentials, or JWT secrets.
