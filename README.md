# 🧩 AutiSmart — AI-Assisted Autism Care & Assessment Platform

> **A full-stack Final Year Project designed to support autism-care workflows through structured assessment, child management, progress tracking, caregiver guidance, AI-assisted recommendations, reporting, and therapy-oriented activities.**

### 🚀 Live Preview

**[Open AutiSmart](https://auti-smart.vercel.app/)**

### 📂 Source Code

**[View this repository](https://github.com/AliShah1029384756/Fyp-Autismart)**

> **Final Team FYP:** This is the final project presented by our team. It is separate from the author's personal experimental AutiSmart work.

---

## ✨ Key Features

- 🔐 Role-based authentication for **Caregivers, Experts, and Administrators**
- 👶 Child profiles and caregiver management
- 🧠 Structured autism assessment workflows and assessment history
- 📈 Progress tracking, statistics, and reports
- 🤖 AI-assisted caregiver guidance and recommendations using the Groq API
- 📧 Email OTP verification and account workflows
- 🎮 Therapy-oriented activities, games, and emotion-based exercises
- 📊 Dashboards and data visualisation
- 🛡️ Administrative user and assessment management

> **Medical note:** AutiSmart is an academic and assistive software project. Its assessments and AI-generated guidance are not a substitute for professional clinical diagnosis or treatment.

## 🛠️ Technology Stack

### Frontend

- React 19
- Vite 7
- React Router
- Axios
- Bootstrap
- Bootstrap Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Nodemailer
- Groq SDK / API

## 🏗️ System Architecture

```text
                    ┌───────────────────────────┐
                    │       AutiSmart UI        │
                    │   React + Vite + Bootstrap │
                    └─────────────┬─────────────┘
                                  │
                                  │ REST API / Axios
                                  ▼
                    ┌───────────────────────────┐
                    │      Express.js API       │
                    │        Node.js Backend     │
                    └─────────────┬─────────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
      ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
      │   MongoDB    │    │  Groq API    │    │  Nodemailer  │
      │   Database   │    │  AI Services │    │  OTP Email   │
      └──────────────┘    └──────────────┘    └──────────────┘
```

## 📁 Project Structure

```text
Fyp-Autismart/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── dataAccess/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   ├── services/
│   ├── env.js
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── services/
│       └── views/
├── docs/
└── README.md
```

## 🔌 Core API

### Authentication — `/api/auth`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/register` | Register a user |
| POST | `/verify-otp` | Verify registration OTP |
| POST | `/login` | Authenticate and receive JWT |
| POST | `/resend-otp` | Resend verification OTP |
| GET | `/profile` | Get authenticated profile |
| PUT | `/change-password` | Change password |

### Admin — `/api/admin`

User management, role management, account verification, assessment management, and platform statistics.

### Caregiver / Child — `/api/caregiver`

Child management, activities, statistics, reports, Emotion Explorer AI, and game recommendations.

### Assessments — `/api/assessments`

Assessment levels, child-specific quizzes, result submission, history, and assessment management.

## 🔐 Authentication Flow

```text
Registration
    ↓
Email OTP Verification
    ↓
JWT Authentication
    ↓
Protected API Requests
    ↓
Role-Based Authorization
```

Protected requests use:

```text
Authorization: Bearer <JWT_TOKEN>
```

## ⚙️ Environment Configuration

Create the required environment files locally. **Never commit real credentials, API keys, passwords, JWT secrets, or database connection strings.**

Backend variables include:

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
EMAIL=<your_email>
EMAIL_PASS=<your_gmail_app_password>
GROQ_API_KEY=<your_groq_api_key>
NODE_ENV=development
```

Frontend:

```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Local Installation

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+
- MongoDB Atlas or local MongoDB
- Gmail App Password for email functionality
- Groq API key for AI features

### 1. Clone

```bash
git clone https://github.com/AliShah1029384756/Fyp-Autismart.git
cd Fyp-Autismart
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

Backend normally runs at `http://localhost:5000`.

### 3. Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend normally runs at `http://localhost:5173`.

### 4. Verify

Backend health check:

```text
http://localhost:5000/health
```

## 📜 Available Scripts

### Backend

```bash
npm run dev
npm start
npm run create-admin
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## 🧪 Quick Start Checklist

- [ ] Install Node.js and npm
- [ ] Install backend dependencies
- [ ] Install frontend dependencies
- [ ] Configure MongoDB
- [ ] Configure environment variables
- [ ] Configure email credentials if required
- [ ] Configure Groq API access if required
- [ ] Start backend
- [ ] Start frontend
- [ ] Test registration and OTP verification
- [ ] Test login and role-based dashboards
- [ ] Test assessments and child management
- [ ] Test AI features

## 🛡️ Security Notes

For deployment:

- Keep secrets outside Git.
- Use strong, unique JWT secrets.
- Restrict CORS to trusted frontend origins.
- Enable HTTPS.
- Avoid sensitive information in logs.
- Protect authentication endpoints against abuse and brute-force attempts.
- Restrict MongoDB network access to trusted sources.
- Keep dependencies updated.
- Rotate credentials immediately if they are ever exposed.

## 🌐 Deployment

The project has a live frontend deployment for demonstration:

**[🚀 Launch AutiSmart](https://auti-smart.vercel.app/)**

Some features may require backend services or credentials that are not included in the public repository.

## 🎓 Project Context

**Project:** AutiSmart — Final Year Project  
**Institution:** FAST-NUCES, Chiniot-Faisalabad Campus  
**Period:** 2025–2026  
**Type:** Team-based Final Year Project

## 👥 Team

| Contributor | GitHub | Contribution |
|---|---|---|
| **Syed Muhammad Ali Naqvi** | [@AliShah1029384756](https://github.com/AliShah1029384756) | Full-Stack Development & AI Integration |
| **Shayan Ahmad** | [@shayanahmad756](https://github.com/shayanahmad756) | Core Engine & Backend Development |
| **Ahmad Kamran** | [@Ahmadkamran73](https://github.com/Ahmadkamran73) | Frontend UI & Systems Logic |

## ⚠️ Medical & AI Disclaimer

AutiSmart is an **academic and assistive technology project**. Its assessments, AI-generated recommendations, and screening-related features are not intended to replace professional medical diagnosis, clinical evaluation, or treatment.

Any diagnostic or therapeutic decision should be made with a qualified healthcare or autism-care professional.

## 📄 License

This project is distributed under the **MIT License**. See `LICENSE` for details.

---

## ⭐ If You Find This Project Useful

Consider giving the repository a ⭐ on GitHub.

**Built as a Final Year Project at FAST-NUCES.**
