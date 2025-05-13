
# Portfolio Backend

This is a simple backend server for handling contact form submissions from your portfolio website.

## Setup

1. Install dependencies:
   ```
   cd backend
   npm install
   ```

2. Create a `.env` file:
   Copy the `.env.example` file to `.env` and fill in your details:
   ```
   cp .env.example .env
   ```

3. Edit the `.env` file with your own email credentials:
   - For Gmail, you'll need to create an App Password (not your regular password)
   - Go to your Google Account > Security > 2-Step Verification > App passwords

4. Start the server:
   ```
   npm run dev
   ```

## Production Deployment

For production, you can deploy this backend to:
- Heroku
- Vercel
- Railway
- Render
- Any Node.js hosting service

Make sure to set the environment variables in your hosting provider's dashboard.
