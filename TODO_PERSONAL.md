# Personal TODO - AutiSmart (Project-Specific Master Plan)

Owner: Me (personal execution tracker)
Scope: Full-stack stability, security, quality, and deployment readiness for current AutiSmart codebase
Status Date: 2026-03-14

---

## 1) Current Baseline (Do Not Skip)

### Environment / Runtime Baseline
- [ ] Confirm backend runs on port 5000
- [ ] Confirm frontend runs on 5173 or 5174
- [ ] Confirm MongoDB connection stable for 24h dev usage
- [ ] Confirm OTP email sends successfully from current Gmail app password
- [ ] Confirm Groq key is available and AI routes do not throw key-missing errors

### Baseline Functional Smoke Test
- [ ] Health endpoint: GET /health returns success true
- [ ] Auth login endpoint works from API client
- [ ] Frontend login works with admin@autismart.com / Admin@123
- [ ] Verify role redirect paths:
  - [ ] admin -> /admin
  - [ ] caregiver -> /caregiver-dashboard
  - [ ] expert -> /expert-dashboard

Acceptance Criteria:
- [ ] No blocker in login/register/OTP flow
- [ ] No CORS failure from 5173 and 5174

---

## 2) P0 - Authentication & Access Control Hardening

Target Files (primary):
- backend/server.js
- backend/routes/authRoutes.js
- backend/controllers/authController.js
- backend/services/auth.service.js
- backend/middleware/auth.middleware.js
- frontend/src/components/Auth/Login.jsx
- frontend/src/api/http.js

### 2.1 Auth Flow Validation
- [ ] Register caregiver and expert accounts from frontend
- [ ] Verify OTP for both accounts
- [ ] Validate re-login with verified users
- [ ] Validate unverified user login returns expected message
- [ ] Validate incorrect password returns Invalid credentials

### 2.2 CORS + Session Behavior
- [ ] Keep local allowlist for:
  - [ ] http://localhost:5173
  - [ ] http://127.0.0.1:5173
  - [ ] http://localhost:5174
  - [ ] http://127.0.0.1:5174
- [ ] Confirm access-control-allow-origin set correctly per origin
- [ ] Confirm 401 interceptor clears token/user and redirects to /login

### 2.3 Security Enhancements (Auth)
- [ ] Add rate limiting middleware on:
  - [ ] POST /api/auth/register
  - [ ] POST /api/auth/login
  - [ ] POST /api/auth/verify-otp
  - [ ] POST /api/auth/resend-otp
- [ ] Add brute-force lock or delay policy for repeated login failures
- [ ] Ensure JWT secret length policy is documented

Acceptance Criteria:
- [ ] Auth endpoints resist basic abuse patterns
- [ ] No accidental auth bypass through missing middleware

---

## 3) P0 - Request Validation & Error Consistency

Target Files:
- backend/controllers/*.js
- backend/middleware/error.middleware.js
- backend/services/*.js

### 3.1 Input Validation
- [ ] Add schema validation library (Joi or Zod)
- [ ] Validate payloads for:
  - [ ] auth register/login/verify-otp/resend-otp/change-password
  - [ ] child create/update
  - [ ] assessment result submit
  - [ ] admin user create/update role

### 3.2 Error Shape Standardization
- [ ] Define single API error format
- [ ] Ensure all controllers return same success/error envelope
- [ ] Map common error categories:
  - [ ] validation_error
  - [ ] authentication_error
  - [ ] authorization_error
  - [ ] conflict_error
  - [ ] not_found_error
  - [ ] server_error

Acceptance Criteria:
- [ ] Frontend can always parse error messages consistently
- [ ] No raw stack trace leaked in production mode

---

## 4) P0 - Assessment + Child Workflow Reliability

Target Files:
- backend/routes/assessmentRoutes.js
- backend/routes/childRoutes.js
- backend/services/assessmentResult.service.js
- backend/services/childQuiz.service.js
- backend/services/recommendation.service.js
- frontend/src/pages/Assessment.jsx
- frontend/src/pages/ChildReports.jsx

### 4.1 Assessment Flow E2E
- [ ] Fetch active assessments (grouped)
- [ ] Submit assessment results for existing child
- [ ] Confirm result record persisted
- [ ] Confirm child stats update after submission
- [ ] Confirm child history retrieval works

### 4.2 Quiz/Recommendation
- [ ] Admin generate child quiz route works
- [ ] Child quiz retrieval for caregiver/admin works
- [ ] Recommendation endpoint returns stable response shape
- [ ] Handle missing Groq key gracefully (503 with clear message)

Acceptance Criteria:
- [ ] No 500 errors in normal user path
- [ ] Permission checks enforced (caregiver cannot access unrelated child)

---

## 5) P1 - Admin Panel Integrity

Target Files:
- backend/routes/adminRoutes.js
- backend/controllers/adminController.js
- frontend/src/pages/AdminUsers.jsx
- frontend/src/pages/AssessmentManagement.jsx

### 5.1 User Management
- [ ] List users with role and verification status
- [ ] Create user (admin action)
- [ ] Update role
- [ ] Toggle verification
- [ ] Delete user

### 5.2 Assessment Management
- [ ] Create assessment
- [ ] Edit assessment
- [ ] Toggle active/inactive status
- [ ] Delete assessment
- [ ] Confirm changes reflected in public assessment fetch

Acceptance Criteria:
- [ ] All admin actions require admin token
- [ ] UI feedback is clear for success/failure state

---

## 6) P1 - Codebase Cleanup (Duplication + Naming)

Known Cleanup Targets:
- [ ] backend/services/auth.service.js vs backend/services/authService.js
- [ ] backend/services/child.service.js vs backend/services/childService.js
- [ ] backend/services/user.service.js vs backend/services/userService.js
- [ ] frontend service duplicates if still present

### Cleanup Strategy
- [ ] Identify actually imported file in runtime paths
- [ ] Deprecate duplicates safely
- [ ] Remove dead files only after grep usage check
- [ ] Ensure no route/controller import breaks

Acceptance Criteria:
- [ ] Single source of truth per service domain
- [ ] No ambiguous file naming left in active code paths

---

## 7) P1 - Testing Layer (Minimum Viable Test Coverage)

### Backend Integration Tests
- [ ] Setup test runner (Jest/Vitest + Supertest)
- [ ] Auth tests:
  - [ ] register
  - [ ] verify-otp
  - [ ] login
  - [ ] profile with token
- [ ] Child tests:
  - [ ] add child
  - [ ] get children
- [ ] Assessment tests:
  - [ ] get assessments
  - [ ] submit result

### Frontend Smoke Tests
- [ ] Login page submit success
- [ ] Protected route redirect when logged out
- [ ] Redirect to login after forced 401

Acceptance Criteria:
- [ ] Auth and critical workflows protected by automated checks

---

## 8) P2 - Documentation for Personal Use

- [ ] Keep personal docs updated only in personal files:
  - [ ] README_PERSONAL_OVERVIEW.md
  - [ ] backend/README_PERSONAL_BACKEND.md
  - [ ] frontend/README_PERSONAL_FRONTEND.md
  - [ ] TODO_PERSONAL.md
- [ ] Add personal API examples for testing collection (Postman/Bruno)
- [ ] Add local onboarding notes for quick machine setup

Acceptance Criteria:
- [ ] I can reinstall and run project in <20 minutes on fresh machine

---

## 9) P2 - Performance & UX Improvements

### Backend
- [ ] Add pagination/filter support to heavy list endpoints
- [ ] Add query timing logs for slow requests
- [ ] Investigate duplicate schema index warnings and resolve root cause

### Frontend
- [ ] Add loading skeletons on dashboard-heavy screens
- [ ] Improve error toasts/messages with actionable text
- [ ] Add retry button for failed network calls on key pages

Acceptance Criteria:
- [ ] Better UX under slow or unstable network
- [ ] No noisy warnings in normal runtime logs

---

## 10) P3 - Deployment Readiness

### Infrastructure Decisions
- [ ] Select backend host (Render/Railway/VM)
- [ ] Select frontend host (Vercel/Netlify)
- [ ] Decide domain/subdomain mapping

### Production Config
- [ ] Restrict CORS to production frontend domain only
- [ ] Set NODE_ENV=production
- [ ] Ensure production secrets are managed securely
- [ ] Configure process manager/restart policy
- [ ] Define backup and restore process for MongoDB

### Release Checklist
- [ ] Production health check passes
- [ ] Login/register/OTP verified in production
- [ ] Admin dashboard basic operations verified
- [ ] Error logging/monitoring active

Acceptance Criteria:
- [ ] Production environment stable for pilot users

---

## 11) Weekly Execution Plan (Personal)

### Week 1 - Stability + Security
- [ ] Complete Sections 2, 3, and 4

### Week 2 - Admin + Cleanup + Tests
- [ ] Complete Sections 5, 6, and 7

### Week 3 - Docs + Performance + Deployment Prep
- [ ] Complete Sections 8, 9, and 10

---

## 12) Daily Personal Log

- [ ] YYYY-MM-DD: Completed
- [ ] YYYY-MM-DD: Blockers
- [ ] YYYY-MM-DD: Next action

---

## 13) Personal Quick Commands

Backend dev:
- npm run dev (inside backend)

Frontend dev:
- npm run dev (inside frontend)

Manual API health check:
- GET http://localhost:5000/health

