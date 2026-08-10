# AutiSmart Backend

Backend API for AutiSmart, built with Node.js, Express, and MongoDB.

## Stack

- Node.js (ES Modules)
- Express 5
- MongoDB + Mongoose
- JWT authentication
- Nodemailer (OTP email)
- Groq SDK (AI-assisted features)

---

## Folder Overview

```text
backend/
├─ config/               # Email/SMS and integration config
├─ controllers/          # Route handlers
├─ dataAccess/           # Data access abstraction layer
├─ middleware/           # Auth, role, and error middleware
├─ models/               # Mongoose schemas
├─ routes/               # API route modules
├─ scripts/              # Utility scripts (e.g. create admin, seed)
├─ services/             # Business logic services
├─ env.js                # dotenv loader
├─ server.js             # App/bootstrap entry
└─ package.json
```

---

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=<mongodb_connection_string>
JWT_SECRET=<strong_secret>
EMAIL=<gmail_address>
EMAIL_PASS=<gmail_app_password>
GROQ_API_KEY=<groq_key>
NODE_ENV=development
```

### Required by feature

- Core app: `PORT`, `MONGO_URI`, `JWT_SECRET`
- OTP/Email: `EMAIL`, `EMAIL_PASS`
- AI recommendation/scenario generation: `GROQ_API_KEY`

---

## Setup

```bash
cd backend
npm install
```

---

## Run

### Development
```bash
cd backend
npm run dev
```

### Production-style
```bash
cd backend
npm start
```

Server defaults to `http://localhost:5000`.
Health endpoint: `GET /health`

---

## Scripts

- `npm run dev` — Start with nodemon
- `npm start` — Start with node
- `npm run create-admin` — Create default admin account script

---

## API Overview

Base URL: `http://localhost:5000/api`

### 1) Auth Routes (`/api/auth`)

- `POST /register`
- `POST /verify-otp`
- `POST /login`
- `POST /resend-otp`
- `GET /profile` *(protected)*
- `PUT /change-password` *(protected)*

#### Example: Register

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "StrongPass123",
  "role": "caregiver"
}
```

#### Example: Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@autismart.com",
  "password": "Admin@123"
}
```

Expected success shape:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "<jwt>",
    "user": {
      "id": "...",
      "name": "...",
      "email": "...",
      "role": "admin"
    }
  }
}
```

### 2) Admin Routes (`/api/admin`) *(admin only)*

- `GET /stats`
- `POST /users`
- `GET /users`
- `GET /users/:id`
- `PUT /users/:id`
- `PUT /users/:id/role`
- `PUT /users/:id/toggle-verification`
- `DELETE /users/:id`
- `GET /assessments`
- `POST /assessments`
- `PUT /assessments/:id`
- `PUT /assessments/:id/toggle-status`
- `DELETE /assessments/:id`

### 3) Caregiver/Child Routes (`/api/caregiver`) *(protected)*

- `GET /all-children`
- `POST /children`
- `GET /children`
- `GET /children/:id`
- `PUT /children/:id`
- `DELETE /children/:id`
- `GET /children/:id/stats`
- `GET /children/:id/activities`
- `POST /children/:id/activities`
- `GET /children/:id/report`
- `POST /children/:id/emotion-scenarios`
- `POST /children/:id/emotion-feedback`
- `GET /children/:id/recommendations`

### 4) Assessment Routes (`/api/assessments`) *(protected)*

- `GET /` (active assessments grouped by level)
- `GET /admin/all` *(admin)*
- `GET /child/:childId/quiz`
- `POST /child/:childId/generate` *(admin)*
- `POST /results`
- `GET /child/:childId/results`
- `GET /:level`

#### Example: Submit Assessment Result

```http
POST /api/assessments/results
Authorization: Bearer <jwt>
Content-Type: application/json

{
  "childId": "<child_id>",
  "totalScore": 18,
  "totalQuestions": 30,
  "assessmentLevel": "intermediate",
  "categoryScores": {
    "social": 6,
    "communication": 7,
    "behavioral": 5
  },
  "answers": []
}
```

---

## Auth and Security Notes

- Protected routes require `Authorization: Bearer <token>` header.
- JWT secret must be strong and private.
- Never commit `.env` to source control.
- Rotate credentials immediately if exposed.

---

## Common Issues

### 1) Mongo connection fails
- Check `MONGO_URI` credentials and Atlas IP whitelist.
- Confirm internet/DNS connectivity.

### 2) Login fails with valid credentials
- Ensure account is verified (`isVerified=true`).
- Confirm frontend sends to correct base URL (`/api`).

### 3) OTP email not delivered
- Confirm `EMAIL` + `EMAIL_PASS` are valid.
- Use Gmail App Password, not account password.

### 4) CORS blocked from frontend
- Verify backend CORS allows your dev origin (`5173`/`5174`).

---

## Quick Verification Commands

```bash
# Health check
curl http://localhost:5000/health

# Login test
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@autismart.com","password":"Admin@123"}'
```

---

## Related Docs

- Project root docs: `../README.md`
- Frontend docs: `../frontend/README.md`
