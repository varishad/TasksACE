import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import validator from 'validator';
import { simpleRateLimit } from '@/lib/rateLimit';

// Input validation schema
const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z\s'.-]+$/, 'Invalid characters in name'),
  
  email: z.string()
    .email('Invalid email format')
    .max(255, 'Email too long'),
  
  company: z.string()
    .max(100, 'Company name too long')
    .optional(),
  
  phone: z.string()
    .max(20, 'Phone number too long')
    .optional(),
  
  service: z.string()
    .max(100, 'Service name too long')
    .optional(),
  
  message: z.string()
    .min(10, 'Message too short')
    .max(2000, 'Message too long')
});

// Sanitization function
function sanitizeInput(text: string): string {
  return validator.escape(text.trim());
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!simpleRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate input data
    const validatedData = contactSchema.parse(body);
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: sanitizeInput(validatedData.email),
      company: validatedData.company ? sanitizeInput(validatedData.company) : '',
      phone: validatedData.phone ? sanitizeInput(validatedData.phone) : '',
      service: validatedData.service ? sanitizeInput(validatedData.service) : '',
      message: sanitizeInput(validatedData.message)
    };

    const { name, email, company, phone, service, message } = sanitizedData;

    // Get secure environment variables with fallback for debugging
    const gmailUser = process.env.GMAIL_USER || 'tasksace@gmail.com';
    const gmailPassword = process.env.GMAIL_APP_PASSWORD || 'qkfknsecxxrixqcp';

    console.log('📧 Environment check - USER:', !!process.env.GMAIL_USER, 'PASSWORD:', !!process.env.GMAIL_APP_PASSWORD);

    if (!gmailUser || !gmailPassword) {
      console.error('❌ Email configuration missing');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }
    
    console.log('📧 Email service ready - sending contact form submission...');

    // Create transporter using Gmail SMTP with explicit configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ff5e00; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Contact Details:</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">
                <a href="mailto:${email}" style="color: #ff5e00; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${company ? `
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Company:</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${company}</td>
            </tr>
            ` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">
                <a href="tel:${phone}" style="color: #ff5e00; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ` : ''}
            ${service ? `
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Service:</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${service}</td>
            </tr>
            ` : ''}
          </table>

          <h3 style="color: #333; margin: 20px 0 10px 0;">Project Details:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ff5e00;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #e8f5e8; border-radius: 5px; text-align: center;">
            <p style="margin: 0; color: #2d5a3d; font-weight: bold;">Quick Actions:</p>
            <div style="margin-top: 10px;">
              <a href="mailto:${email}?subject=Re: Your TasksACE Inquiry" 
                 style="display: inline-block; background-color: #ff5e00; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                Reply via Email
              </a>
              ${phone ? `
              <a href="https://wa.me/${phone.replace(/\D/g, '')}" 
                 style="display: inline-block; background-color: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                WhatsApp
              </a>
              ` : ''}
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This email was sent from your TasksACE website contact form</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"TasksACE Contact Form" <${gmailUser}>`,
      to: gmailUser, // Send to your Gmail
      replyTo: email, // Allow direct reply to customer
      subject: `New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: htmlContent,
    });

    console.log(`✅ Email sent successfully to ${gmailUser}`);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Validation Error:', error.errors);
      return NextResponse.json(
        { 
          error: 'Invalid input data',
          details: error.errors.map(e => e.message)
        },
        { status: 400 }
      );
    }
    
    console.error('❌ Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 