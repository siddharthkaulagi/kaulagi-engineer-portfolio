
# Portfolio Backend Setup

This portfolio website includes a backend server to handle the contact form submissions. Follow these instructions to set up and deploy the backend.

## Local Development

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**
   - Copy the example environment file:
     ```bash
     cp backend/.env.example backend/.env
     ```
   - Edit `backend/.env` with your email service details:
     ```
     PORT=3001
     FRONTEND_URL=http://localhost:5173
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     RECIPIENT_EMAIL=your-email@gmail.com
     ```

   Note: For Gmail, you need to create an App Password:
   - Go to your Google Account
   - Navigate to Security > 2-Step Verification > App passwords
   - Create a new app password specifically for this application

3. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

4. **Configure Frontend**
   - Copy the frontend environment example:
     ```bash
     cp .env.example .env
     ```
   - Ensure it contains:
     ```
     VITE_BACKEND_URL=http://localhost:3001
     ```

## Production Deployment

### Backend Deployment Options

You can deploy the Node.js backend to various platforms:

1. **Vercel**
   - Create a new project and connect to your repository
   - Set the root directory to "backend"
   - Add your environment variables in the Vercel dashboard

2. **Heroku**
   - Create a new app
   - Set the buildpack to Node.js
   - Configure environment variables in the Settings tab

3. **Railway.app**
   - Create a new project from your repository
   - Specify the backend directory
   - Add environment variables

### Frontend Deployment

When deploying your frontend to production, remember to:

1. Update the VITE_BACKEND_URL environment variable to point to your deployed backend URL
2. Ensure CORS is properly configured on your backend to accept requests from your frontend domain

## Troubleshooting

- **Contact Form Not Working:** Check that your backend server is running and accessible
- **Email Not Sending:** Verify your email provider settings and credentials
- **CORS Errors:** Ensure your backend CORS settings match your frontend domain
