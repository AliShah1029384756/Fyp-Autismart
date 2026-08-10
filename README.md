# 🧩 AutiSmart — AI-Powered Autism Support & Diagnostic Platform

> **A multimodal AI web ecosystem designed for early screening, continuous monitoring, and diagnostic assistance for Autism Spectrum Disorder (ASD).**

---

### 🛡️ Tech Stack & Status

* **Core Backend:** Node.js (v18.x) & Express.js
* **Database:** MongoDB Atlas Cluster
* **AI Engine:** Groq API Acceleration
* **Vision Models:** Vision Transformer (ViT) Architecture
* **License:** MIT License

---

## 📌 Executive Overview

**AutiSmart** bridges the gap between clinical healthcare diagnostics and daily behavioral management.

By combining **Vision Transformers (ViT)** for preliminary visual behavioral analysis and **Groq-accelerated LLMs** for instant caregiver guidance, AutiSmart provides a complete, multi-tenant digital hub for parents, doctors, and specialists.

---

## ✨ Core System Capabilities

### 🧠 Multimodal Diagnostic Screening
Integrates computer vision models to analyze visual cues and behavioral patterns alongside clinical questionnaires.

### ⚡ Groq-Powered AI Assistant
Ultra-fast natural language query handling providing real-time behavioral intervention tips and sensory advice.

### 📊 Dynamic Progress Analytics
Longitudinal tracking of milestone achievements, diagnostic history, and patient assessments over time.

### 🛡️ Role-Based Security (RBAC)
Granular access control separation between **Administrators**, **Medical Specialists**, and **Caregivers/Parents**.

---

## 🏗️ System Architecture

```text
[ Caregiver / Doctor / Specialist ]
                 │
                 ▼
      [ AutiSmart Web UI ]
    (EJS / HTML5 / CSS3 / JS)
                 │
                 ▼
      [ Express.js API Node ]
         │               │
         ▼               ▼
  [ MongoDB Atlas ]   [ AI & Inference Services ]
  (Users & Reports)   (Groq API & Vision Models)

🔌 Core API EndpointsCategoryEndpointMethodDescriptionAuth/api/auth/registerPOSTRegister 
a new accountAuth/api/auth/loginPOSTAuthenticate & get JWT 
tokenDiagnostic/api/diagnostic/assessPOSTSubmit screening 
responsesDiagnostic/api/diagnostic/analyze-imagePOSTVision Transformer 
analysisAssistant/api/assistant/chatPOSTGroq AI real-time guidance

📁 Directory Structure
FYP-autismart/
├── config/       # DB connection & third-party API clients
├── controllers/  # Core request & diagnostic logic
├── middleware/   # Authentication & error handling
├── models/       # Mongoose schemas (User, Patient, Report)
├── public/       # Static CSS, JS, and media assets
├── routes/       # Express route handlers
├── services/     # Groq API & ML inference integration
├── views/        # Frontend EJS UI templates
├── .env.example  # Sample environment variables
├── package.json  # Project metadata & dependencies
└── server.js     # Main bootstrap entry point

⚙️ Environment Configuration
Create a .env file in the root directory:
# Server Config
PORT=5000
NODE_ENV=development

# Database Config
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/autismart_db

# Auth & Security
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret_key

# Third-Party AI Services
GROQ_API_KEY=your_groq_api_key

🚀 Quickstart Installation
1. Clone & Setup
Bash
git clone [https://github.com/AliShah1029384756/Fyp-Autismart.git]
(https://github.com/AliShah1029384756/Fyp-Autismart.git)
cd Fyp-Autismart
2. Install Dependencies
Bash
npm install
3. Run Server
Bash
# Development Mode
npm run dev

# Production Mode
npm start
Access the application at http://localhost:5000

👥 Authors & Project Contributors
Developed as a Final Year Engineering Project 
(FYP) in fulfillment of the BS Computer Science degree requirements at FAST-NUCES.
ContributorGitHub ProfileCore Contribution
Syed Muhammad Ali Naqvi	@AliShah1029384756	Full-Stack & AI Integration
Shayan Ahmad	@shayanahmad756	Core Engine & Backend Developer
Ahmad Kamran	@Ahmadkamran73	Frontend UI & Systems Logic

📄 License
Distributed under the MIT License.
