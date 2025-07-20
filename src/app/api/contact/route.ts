import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        // Parse incoming JSON request body
        const formData: ContactFormData = await req.json();
        const { firstName, lastName, email, phone, service, message } = formData;

        // Step 1: Set up the Nodemailer transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,  // Gmail account
                pass: process.env.GMAIL_PASS,  // Gmail app password (or your Gmail password if not using 2FA)
            },
        });

        // Step 2: Set up the email options for you (Admin)
        const adminMailOptions = {
            from: process.env.GMAIL_EMAIL,   // Sender's email address
            to: process.env.GMAIL_EMAIL,     // Recipient's email address (your email)
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: `
        You have received a new message from the contact form:

        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}

        Message:
        ${message}
      `,
            html: `
        <p>You have received a new message from the contact form:</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `, // HTML format
        };

        // Step 3: Set up the email options for the user (Thank You Email)
        const userMailOptions = {
            from: process.env.GMAIL_USER,   // Sender's email address
            to: email,                      // User's email address
            subject: 'Thank You for Contacting Us!',
            text: `
        Hi ${firstName} ${lastName},

        Thank you for reaching out to us! We have received your message and will get back to you shortly.

        Best regards,
        The Team
      `,
            html: `
        <p>Hi ${firstName} ${lastName},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br />The Team</p>
      `, // HTML format
        };

        // Step 4: Send the emails
        await transporter.sendMail(adminMailOptions);  // Send to admin (you)
        await transporter.sendMail(userMailOptions);   // Send thank you email to user

        // Step 5: Store the contact form data in the database
        const storedData = await prisma.contactForm.create({
            data: {
                name: `${firstName} ${lastName}`,
                email: email,
                phone: phone,
                service: service,
                message: message,
            },
        });

        // Return success response
        return NextResponse.json({ message: 'Email sent successfully! We have received your submission.' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send email or store data!' }, { status: 500 });
    } finally {
        await prisma.$disconnect();  // Always disconnect the Prisma client
    }
}
