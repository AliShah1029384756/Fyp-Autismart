# AutiSmart — AI-Assisted Autism Care & Assessment Platform

> **A full-stack, team-based Final Year Project developed at FAST-NUCES to support autism-care workflows through structured assessment, child management, progress tracking, caregiver guidance, AI-assisted recommendations, reporting, and therapy-oriented activities.**

### Live Demo & Case Study

**[Open AutiSmart (Frontend)](https://auti-smart-rosy.vercel.app)** · **[Portfolio Case Study](https://alishah1029384756.github.io/AliShah1029384756/projects/autismart.html)**

> **Deployment note:** The project was deployed and used for the team's FYP demonstration/presentation. Because the live environment depends on external services and credentials, some features may become unavailable over time or run with mock data. The public repository does not contain original secrets; use your own environment configuration for full reproduction.

### Source Code

**[View this repository](https://github.com/AliShah1029384756/Fyp-Autismart)**

> **Final Team FYP:** This repository represents the final project developed and presented by our FYP team. It is separate from any personal experimental AutiSmart work.

---

## Final Year Project Context

**Project:** AutiSmart — Final Year Project  
**Institution:** FAST-NUCES, Chiniot-Faisalabad Campus  
**Project period:** 2025–2026  
**Type:** Team-based Final Year Project  
**FYP-I (Semester 7):** **A+**  
**FYP-II (Semester 8):** **A-**

The system was developed collaboratively, deployed for demonstration, and presented by the team as the final-year project across FYP-I and FYP-II.

> The grades above represent the project's academic outcomes. This README intentionally does not publish transcripts, CGPA, or detailed marks.

## Team vs My Contribution

| Contributor | GitHub | Contribution |
|---|---|---|
| **Syed Muhammad Ali Naqvi** | [@AliShah1029384756](https://github.com/AliShah1029384756) | Full-Stack Development & AI Integration |
| **Shayan Ahmad** | [@shayanahmad756](https://github.com/shayanahmad756) | Core Engine & Backend Development |
| **Ahmad Kamran** | [@Ahmadkamran73](https://github.com/Ahmadkamran73) | Frontend UI & Systems Logic |

This is a **team project**. Individual ownership of every line of code is not claimed.

## Key Features (Verified)

- Role-based authentication for Caregivers, Experts, and Administrators (JWT + email OTP)
- Child profiles and caregiver management
- Structured autism assessment workflows and assessment history (six behavioural categories)
- Progress tracking, statistics, and reports
- AI-assisted quiz generation and Emotion Explorer content via the Groq API (Llama 3.3 70B)
- Rule-based therapy-game recommendations derived from assessment category scores
- Therapy-oriented activities and emotion-based exercises
- Dashboards and data visualisation
- Administrative user and assessment management

> **Medical note:** AutiSmart is an academic and assistive software project. Its assessments and AI-generated guidance are not a substitute for professional clinical diagnosis or treatment.

## Technology Stack

### Frontend
- React 19 · Vite 7 · React Router · Axios · Bootstrap · Bootstrap Icons · Chart.js

### Backend
- Node.js · Express.js · MongoDB · Mongoose · JWT Authentication · Nodemailer · Groq SDK / API

## System Architecture

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

## Project Structure

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

## Core API (summary)

### Authentication — `/api/auth`
- POST `/register`, `/verify-otp`, `/login`, `/resend-otp`
- GET `/profile` · PUT `/change-password`

### Admin — `/api/admin`
User management, role management, account verification, assessment management, platform statistics.

### Caregiver / Child — `/api/caregiver`
Child management, activities, statistics, reports, Emotion Explorer AI, game recommendations.

### Assessments — `/api/assessments`
Assessment levels, child-specific quizzes, result submission, history.

## Authentication Flow

```text
Registration → Email OTP Verification → JWT Authentication → Protected API Requests → Role-Based Authorization
```

Protected requests use: `Authorization: Bearer <JWT_TOKEN>`

## Environment Configuration

Create the required environment files locally. **Never commit real credentials, API keys, passwords, JWT secrets, or database connection strings.**

Backend:

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

## Local Installation

### Prerequisites
- Node.js 18+ (20+ recommended)
- npm 9+
- MongoDB Atlas or local MongoDB
- Gmail App Password for email functionality
- Groq API key for AI features

### Steps

```bash
git clone https://github.com/AliShah1029384756/Fyp-Autismart.git
cd Fyp-Autismart

# Backend
cd backend && npm install && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

Backend: `http://localhost:5000` · Frontend: `http://localhost:5173` · Health: `http://localhost:5000/health`

## Security Notes

- Keep secrets outside Git
- Use strong, unique JWT secrets
- Restrict CORS to trusted frontend origins
- Enable HTTPS in production
- Avoid sensitive information in logs
- Protect authentication endpoints against abuse
- Restrict MongoDB network access
- Rotate credentials immediately if ever exposed

## Limitations (Honest Scope)

- Academic team Final Year Project — not a production clinical system
- No clinical validation or regulatory clearance
- Live demo depends on external services (MongoDB, email, Groq); may run limited/mock without credentials
- Public deployment is frontend-only; full stack requires local or private backend
- AI-generated content quality depends on prompts and model behaviour; human review remains advisable

## Medical & AI Disclaimer

AutiSmart is an **academic and assistive technology project**. Its assessments, AI-generated recommendations, and screening-related features are **not** intended to replace professional medical diagnosis, clinical evaluation, or treatment.

Any diagnostic or therapeutic decision should be made with a qualified healthcare or autism-care professional.

## License

MIT License. See `LICENSE` for details.

---

**Built and presented as a Final Year Project at FAST-NUCES.**
