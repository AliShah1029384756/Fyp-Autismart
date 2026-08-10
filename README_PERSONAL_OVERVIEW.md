# AutiSmart

AutiSmart is a full-stack web platform designed to support autism care workflows with role-based access, child management, assessments, reports, and therapy-oriented activities/games.

## Local Repo Status Note (2026-03-25)

- Local branch `main` is ahead of `origin/main` by 6 commits.
- Extra work is not documentation-only; it includes backend and frontend code updates.
- Documentation/planning files can be ignored when reviewing functional code status:
  - `README_PERSONAL_OVERVIEW.md`
  - `TODO_PERSONAL.md`
  - `backend/README_PERSONAL_BACKEND.md`
- There is also one local uncommitted code change in `backend/server.js`.

## Tech Stack

### Frontend
- React 19
- Vite 7
- React Router
- Axios
- Bootstrap + Bootstrap Icons

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Nodemailer (OTP email verification)
- Groq SDK (AI-powered features)

---

## Repository Structure

```text
FYP-autismart/
├─ backend/
│  ├─ config/
│  ├─ controllers/
│  ├─ dataAccess/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  ├─ scripts/
│  ├─ services/
│  ├─ env.js
│  └─ server.js
├─ frontend/
│  ├─ public/
│  └─ src/
│     ├─ api/
│     ├─ components/
│     ├─ context/
│     ├─ pages/
│     ├─ services/
│     └─ views/
└─ README.md
```

---

## Features

- Role-based authentication (`caregiver`, `expert`, `admin`)
- Email OTP verification during registration
- Login with JWT token flow
- Child management and tracking
- Assessment management and result storage
- Personalized quiz/recommendation support
- Admin panel for users and assessments
- Multiple game/activity pages for child engagement

---

## Prerequisites

- Node.js 18+ (recommended 20+)
- npm 9+
- MongoDB Atlas connection string (or local MongoDB)
- Gmail app password for OTP email (if email features are enabled)

---

## Environment Variables (Backend)

Create or update `backend/.env`:

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
EMAIL=<your_gmail_address>
EMAIL_PASS=<your_gmail_app_password>
GROQ_API_KEY=<your_groq_api_key>
NODE_ENV=development
```

### Notes
- Do **not** commit real secrets to git.
- `EMAIL` + `EMAIL_PASS` are required for OTP and password reset emails.
- `GROQ_API_KEY` is required for AI-backed generation/recommendation features.

---

## Installation

Install dependencies in both apps:

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

## Running the Project (Development)

Open two terminals from project root.

### Terminal 1: Backend
```bash
cd backend
npm run dev
```

Backend default URL:
- `http://localhost:5000`
- Health check: `http://localhost:5000/health`

### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```

Frontend default URL:
- Usually `http://localhost:5173` (Vite may switch to another available port like `5174`)

---

## API Base URL Configuration (Frontend)

Frontend uses:
- `VITE_API_URL` if set
- Otherwise defaults to `http://localhost:5000/api`

To customize, create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Core Backend Routes

### Auth (`/api/auth`)
- `POST /register`
- `POST /verify-otp`
- `POST /login`
- `POST /resend-otp`
- `GET /profile` (protected)
- `PUT /change-password` (protected)

### Admin (`/api/admin`) *(admin only)*
- User management (`/users`, `/users/:id`, role and verification updates)
- Assessment management (`/assessments`, toggle status, CRUD)
- `GET /stats`

### Caregiver/Child (`/api/caregiver`) *(protected)*
- Child CRUD (`/children`)
- Activities, stats, reports
- Emotion Explorer AI routes
- Game recommendations

### Assessments (`/api/assessments`) *(protected)*
- Global assessments by level
- Child quiz generation/retrieval
- Assessment result submission/history

---

## Authentication Flow

1. User registers with role and credentials.
2. Backend sends OTP email.
3. User verifies OTP.
4. Backend returns JWT token.
5. Frontend stores token/user in `localStorage`.
6. Protected requests include `Authorization: Bearer <token>`.

---

## Scripts

### Backend (`backend/package.json`)
- `npm run dev` — start with nodemon
- `npm start` — start with node
- `npm run create-admin` — create default admin user script

### Frontend (`frontend/package.json`)
- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — lint code

---

## Common Troubleshooting

### 1) Login/Register CORS issues
- Ensure backend CORS allowlist contains your frontend origin.
- Supported local origins should include:
  - `http://localhost:5173`
  - `http://127.0.0.1:5173`
  - `http://localhost:5174`
  - `http://127.0.0.1:5174`

### 2) OTP email not sending
- Verify `EMAIL` and `EMAIL_PASS` in `backend/.env`.
- Use a Gmail App Password (not your normal account password).
- Check backend logs for `verifyEmailConfig` warnings.

### 3) MongoDB connection failure
- Confirm Atlas credentials and URI.
- Ensure IP whitelist allows your current IP (or `0.0.0.0/0` for testing).
- Check network/firewall and DNS.

### 4) Invalid credentials on login
- Make sure account is verified (`isVerified=true`).
- Confirm email/password exactly match registered values.
- Try creating/using admin via `npm run create-admin`.

### 5) Frontend cannot reach API
- Confirm backend is running on expected port.
- Confirm `VITE_API_URL` points to `/api` base.
- Check browser network tab and backend terminal logs.

---

## Production Notes

- Set strong, unique production secrets for `JWT_SECRET` and API keys.
- Restrict CORS origins to trusted domains only.
- Remove debug logs that may expose sensitive information.
- Use HTTPS and secure reverse proxy (Nginx/Caddy/etc.).
- Configure process manager (PM2/systemd) and log monitoring.

---

## Security Recommendations

- Never commit `.env` files.
- Rotate leaked credentials immediately.
- Enforce strong password policy and rate-limit auth endpoints.
- Consider adding refresh tokens and brute-force protection.

---

## Quick Start Checklist

- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] `backend/.env` configured
- [ ] Backend running on port 5000
- [ ] Frontend running on Vite port (5173/5174)
- [ ] Registration + OTP + login tested
- [ ] Role-based dashboards verified

---

## Maintainers

AutiSmart project team.

If you want, this README can also be expanded with:
- endpoint request/response examples,
- screenshots,
- deployment steps (Docker/Render/Vercel),
- CI/CD workflow setup.
