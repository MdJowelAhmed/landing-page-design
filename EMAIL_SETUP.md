# Email Setup Instructions

## Configuration Steps

1. **Create a `.env.local` file** in the root directory of your project

2. **Add the following environment variables:**

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

3. **For Gmail users:**
   - Go to your Google Account settings
   - Enable 2-Step Verification (required for App Passwords)
   - Generate an App Password:
     - Go to: https://myaccount.google.com/apppasswords
     - Select "Mail" and "Other (Custom name)"
     - Enter "Next.js Contact Form" as the name
     - Copy the 16-character password
   - Use this App Password (NOT your regular Gmail password) as `EMAIL_PASSWORD`

4. **Restart your development server** after creating `.env.local`

## Testing

After setup, fill out the contact form and click "Send Message". The email will be sent to:
- **Recipient:** mdjowelahmed924@gmail.com

## Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- The email includes all form fields: name, email, phone, location, subject, and message
- Make sure your email credentials are correct before testing
