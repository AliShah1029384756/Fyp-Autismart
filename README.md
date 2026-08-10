# 🧩 AutiSmart — AI-Powered Autism Support Platform

> **A full-stack, AI-powered web platform designed to support autism care workflows through screening, assessment, progress tracking, caregiver guidance, and therapy-oriented activities.**

### 🔗 Live Demo

**[🚀 Visit AutiSmart](https://auti-smart.vercel.app/)**

AutiSmart is a Final Year Project developed to bridge the gap between **autism care, digital assessment, caregiver support, and AI-powered assistance**.

The platform provides role-based access for **Caregivers, Experts, and Administrators**, allowing users to manage children, conduct assessments, track progress, generate reports, and access personalized activities and AI-assisted recommendations.

---

## ✨ Key Features

### 🔐 Role-Based Authentication

* Caregiver, Expert, and Admin roles
* JWT-based authentication
* Email OTP verification during registration
* Protected routes and role-based authorization
* Password change functionality
* Secure user session management

### 👶 Child Management

Caregivers can:

* Add and manage children
* Maintain child profiles
* Track developmental information
* View child-specific assessments and activities
* Monitor progress over time

### 🧠 Autism Assessments

* Assessment management and storage
* Multiple assessment levels
* Child-specific quiz generation
* Assessment result submission
* Assessment history
* Progress tracking
* Personalized recommendations based on results

### 🤖 AI-Powered Features

AutiSmart integrates AI capabilities to provide:

* AI-powered caregiver guidance
* Personalized recommendations
* Emotion Explorer assistance
* Game/activity recommendations
* AI-generated assessment/quiz support
* Natural-language assistance through the Groq API

> **Note:** AI-generated information is intended to provide supportive guidance and should not be considered a substitute for professional medical diagnosis or clinical advice.

### 🎮 Therapy-Oriented Activities & Games

The platform includes interactive activities designed to support child engagement and learning, including:

* Educational games
* Emotion-based activities
* Interactive exercises
* Personalized activity recommendations

### 📊 Reports & Progress Tracking

* Child activity statistics
* Assessment history
* Progress reports
* Developmental tracking
* Caregiver-facing insights

### 🛡️ Admin Dashboard

Administrators can manage:

* Users
* User roles
* Account verification
* Assessments
* Assessment availability/status
* Platform statistics

---

# 🏗️ System Architecture

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

---

# 🛠️ Tech Stack

## Frontend

* React 19
* Vite 7
* React Router
* Axios
* Bootstrap
* Bootstrap Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Nodemailer
* Groq SDK

## AI

* Groq API
* AI-powered recommendations
* AI-assisted quiz generation
* Natural-language caregiver assistance
* Emotion-related assistance

---

# 📁 Project Structure

```text
FYP-autismart/
│
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
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── services/
│       └── views/
│
├── README.md
└── package files
```

---

# 🔌 Core API Routes

## Authentication

Base URL:

```text
/api/auth
```

| Method | Endpoint           | Description                       |
| ------ | ------------------ | --------------------------------- |
| POST   | `/register`        | Register a new user               |
| POST   | `/verify-otp`      | Verify registration OTP           |
| POST   | `/login`           | Authenticate user and receive JWT |
| POST   | `/resend-otp`      | Resend verification OTP           |
| GET    | `/profile`         | Get authenticated user profile    |
| PUT    | `/change-password` | Change account password           |

---

## Admin

Base URL:

```text
/api/admin
```

Admin-only functionality includes:

* User management
* User role management
* Account verification
* Assessment management
* Assessment CRUD operations
* Assessment status toggling
* Platform statistics

---

## Caregiver / Child

Base URL:

```text
/api/caregiver
```

Protected functionality includes:

* Child CRUD operations
* Child activities
* Child statistics
* Reports
* Emotion Explorer AI
* Game recommendations

---

## Assessments

Base URL:

```text
/api/assessments
```

Features include:

* Global assessments
* Assessment levels
* Child-specific quiz generation
* Quiz retrieval
* Result submission
* Assessment history

---

# 🔐 Authentication Flow

```text
User Registration
       │
       ▼
OTP Sent via Email
       │
       ▼
OTP Verification
       │
       ▼
JWT Token Generated
       │
       ▼
Token Stored by Frontend
       │
       ▼
Protected API Requests
       │
       ▼
Role-Based Authorization
```

The frontend sends the JWT token with protected requests:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

# ⚙️ Environment Configuration

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGO_URI=<your_mongodb_connection_string>

JWT_SECRET=<your_jwt_secret>

EMAIL=<your_gmail_address>
EMAIL_PASS=<your_gmail_app_password>

GROQ_API_KEY=<your_groq_api_key>

NODE_ENV=development
```

### Environment Variables

| Variable       | Purpose                       |
| -------------- | ----------------------------- |
| `PORT`         | Backend server port           |
| `MONGO_URI`    | MongoDB connection string     |
| `JWT_SECRET`   | JWT signing secret            |
| `EMAIL`        | Gmail account used for emails |
| `EMAIL_PASS`   | Gmail App Password            |
| `GROQ_API_KEY` | Groq API authentication       |
| `NODE_ENV`     | Application environment       |

> ⚠️ **Never commit real API keys, passwords, JWT secrets, or `.env` files to Git.**

---

# 🚀 Installation

## Prerequisites

Make sure the following are installed:

* Node.js 18+
* npm 9+
* MongoDB Atlas or local MongoDB
* Gmail App Password for email functionality
* Groq API key for AI features

Node.js 20+ is recommended.

---

## 1. Clone the Repository

```bash
git clone https://github.com/AliShah1029384756/Fyp-Autismart.git
cd Fyp-Autismart
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# ▶️ Running the Project

Open **two terminals** from the project root.

## Terminal 1 — Backend

```bash
cd backend
npm run dev
```

Backend will normally run at:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/health
```

---

## Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Frontend will normally run at:

```text
http://localhost:5173
```

If port `5173` is unavailable, Vite may automatically use another port such as:

```text
http://localhost:5174
```

---

# 🌐 Frontend API Configuration

The frontend uses the following environment variable:

```env
VITE_API_URL=http://localhost:5000/api
```

Create:

```text
frontend/.env
```

and add:

```env
VITE_API_URL=http://localhost:5000/api
```

If `VITE_API_URL` is not provided, the application defaults to:

```text
http://localhost:5000/api
```

---

# 📜 Available Scripts

## Backend

From the `backend` directory:

```bash
npm run dev
```

Starts the backend using Nodemon.

```bash
npm start
```

Starts the backend using Node.js.

```bash
npm run create-admin
```

Creates the default/admin user using the project's admin creation script.

---

## Frontend

From the `frontend` directory:

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs the frontend linter.

---

# 🧪 Quick Start Checklist

Before using the application, make sure:

* [ ] Node.js is installed
* [ ] Backend dependencies are installed
* [ ] Frontend dependencies are installed
* [ ] MongoDB is configured
* [ ] `backend/.env` is configured
* [ ] `VITE_API_URL` is configured if required
* [ ] Gmail App Password is configured
* [ ] Groq API key is configured
* [ ] Backend is running on port `5000`
* [ ] Frontend is running on Vite
* [ ] Registration works
* [ ] OTP verification works
* [ ] Login works
* [ ] Role-based dashboards work
* [ ] Assessments can be accessed
* [ ] Child management works
* [ ] AI features are configured

---

# 🔧 Troubleshooting

## CORS / Login / Registration Issues

Make sure the backend CORS configuration allows your frontend origin.

Common local origins:

```text
http://localhost:5173
http://127.0.0.1:5173
http://localhost:5174
http://127.0.0.1:5174
```

---

## OTP Email Not Sending

Check:

1. `EMAIL` is correct.
2. `EMAIL_PASS` contains a Gmail App Password.
3. Gmail SMTP access is configured correctly.
4. Backend logs for email configuration warnings.

> Use a **Gmail App Password**, not your normal Gmail password.

---

## MongoDB Connection Error

Check:

* MongoDB connection string
* Database username/password
* MongoDB Atlas network access
* IP allowlist
* Internet connection
* Database cluster status

For development/testing, MongoDB Atlas may require your current IP to be added to the network access list.

---

## Login Shows Invalid Credentials

Check that:

* Email is correct
* Password is correct
* Account has been verified
* `isVerified` is set correctly
* Backend is connected to the correct MongoDB database

For admin access, you can also use:

```bash
npm run create-admin
```

---

## Frontend Cannot Connect to Backend

Verify:

```text
Backend → http://localhost:5000
Frontend → http://localhost:5173
API → http://localhost:5000/api
```

Also check the browser's **Network** tab and backend terminal logs.

---

# 🛡️ Security Recommendations

For production deployment:

* Never commit `.env` files.
* Use strong, unique JWT secrets.
* Rotate compromised credentials immediately.
* Restrict CORS to trusted frontend domains.
* Enable HTTPS.
* Use secure reverse proxy configuration.
* Add authentication rate limiting.
* Add brute-force protection.
* Enforce strong password policies.
* Avoid exposing sensitive information in logs.
* Consider implementing refresh tokens.
* Keep dependencies updated.
* Properly secure MongoDB network access.

---

# ⚠️ Medical & AI Disclaimer

AutiSmart is an **academic and assistive technology project** developed to support autism-related care workflows.

The platform's assessments, AI-generated recommendations, activities, and screening-related features are **not intended to replace professional medical diagnosis, clinical evaluation, or treatment**.

Any diagnostic or therapeutic decision should be made in consultation with a qualified healthcare or autism-care professional.

---

# 👥 Authors & Contributors

Developed as a **Final Year Project (FYP)** in fulfillment of the requirements for a **BS Computer Science degree at FAST-NUCES**.

| Contributor                 | GitHub               | Contribution                            |
| --------------------------- | -------------------- | --------------------------------------- |
| **Syed Muhammad Ali Naqvi** | `@AliShah1029384756` | Full-Stack Development & AI Integration |
| **Shayan Ahmad**            | `@shayanahmad756`    | Core Engine & Backend Development       |
| **Ahmad Kamran**            | `@Ahmadkamran73`     | Frontend UI & Systems Logic             |

---

# 📄 License

This project is distributed under the **MIT License**.

See the `LICENSE` file for more information.

---

# 🌟 Project Vision

AutiSmart aims to make autism-care workflows more accessible by bringing together:

```text
       🧠 Assessment
            │
            ▼
      🤖 AI Assistance
            │
            ▼
       👶 Child Care
            │
            ▼
      📊 Progress Tracking
            │
            ▼
       🎮 Activities
            │
            ▼
       👨‍👩‍👧 Caregiver Support
```

The long-term vision is to develop a reliable, accessible, and intelligent digital ecosystem that helps caregivers and professionals make better-informed decisions while supporting children with autism through personalized and engaging experiences.

---

## ⭐ If You Find This Project Useful

If you find AutiSmart interesting or useful, consider giving the repository a ⭐ on GitHub.

**Built with ❤️ as a Final Year Project at FAST-NUCES.**
