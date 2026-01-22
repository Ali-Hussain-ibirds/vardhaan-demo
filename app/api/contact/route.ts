import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message, source } = await request.json();

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Debug: Check if environment variables are loaded
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Missing',
      EMAIL_TO_1: process.env.EMAIL_TO_1 ? 'Set' : 'Missing',
      EMAIL_TO_2: process.env.EMAIL_TO_2 ? 'Set' : 'Missing'
    });

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO_1 || !process.env.EMAIL_TO_2) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { error: 'Email configuration is missing. Please check your .env.local file.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Determine source message based on the source parameter
    let sourceMessage = '📍 This inquiry was submitted from the Gynaecologist page';
    if (source === 'meta-landing-page') {
      sourceMessage = '📍 This inquiry was submitted from the meta landing page';
    } else if (source === 'google-ads-landing-page') {
      sourceMessage = '📍 This inquiry was submitted from the google ads landing page';
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_TO_1, process.env.EMAIL_TO_2],
      subject: 'New Contact Form Submission - Vardaan Hospitals',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00897B; border-bottom: 2px solid #00897B; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #00897B;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #E0F7FA; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #00897B; font-weight: bold;">
              ${sourceMessage}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
