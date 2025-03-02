# Job Posting Platform (MERN Stack)

A full-stack web application where candidates can log in using LinkedIn, create profiles, and companies can browse available candidates.

## Features
- **LinkedIn Authentication**: Candidates can log in using their LinkedIn accounts.
- **Candidate Profile Management**: Candidates can create and update their profiles with additional details (e.g., skills, experience, location, preferred job roles).
- **Company Page**: Companies can browse and filter available candidates based on skills and experience.

## Technologies
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: LinkedIn OAuth 2.0

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

---

## Setup Instructions

1. Clone the Repository
git clone https://github.com/yourusername/job-eased.git
cd job-platform

2. Set Up the Backend
Navigate to the backend folder:
cd backend

Install dependencies:
npm install

Create a .env file in the backend folder and add the following environment variables:

MONGO_URI=mongodb://localhost:27017/jobplatform
PORT=5000
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
CALLBACK_URL=http://localhost:5000/auth/linkedin/callback
SESSION_SECRET=your_session_secret

Start the backend server:
node server.js

3. Set Up the Frontend
Navigate to the frontend folder:
cd ../frontend

Install dependencies:
npm install

Start the frontend development server:
npm start

Open the app in your browser:
http://localhost:3000
