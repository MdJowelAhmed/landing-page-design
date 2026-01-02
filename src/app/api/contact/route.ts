import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, location, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Create transporter
        // For Gmail, you need to use an App Password: https://support.google.com/accounts/answer/185833
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "mdjowelahmed924@gmail.com", // Recipient email
            subject: subject || `Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #388E96; border-bottom: 2px solid #388E96; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <p><strong style="color: #333;">Name:</strong> <span style="color: #666;">${name}</span></p>
                        <p><strong style="color: #333;">Email:</strong> <span style="color: #666;">${email}</span></p>
                        ${phone ? `<p><strong style="color: #333;">Phone:</strong> <span style="color: #666;">${phone}</span></p>` : ''}
                        ${location ? `<p><strong style="color: #333;">Location:</strong> <span style="color: #666;">${location}</span></p>` : ''}
                        ${subject ? `<p><strong style="color: #333;">Subject:</strong> <span style="color: #666;">${subject}</span></p>` : ''}
                    </div>
                    <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border-left: 4px solid #388E96;">
                        <p><strong style="color: #333;">Message:</strong></p>
                        <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
                        <p>This email was sent from the contact form on your website.</p>
                    </div>
                </div>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${location ? `Location: ${location}` : ''}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}
            `.trim(),
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        return NextResponse.json(
            { error: "Failed to send email", details: errorMessage },
            { status: 500 }
        );
    }
}
