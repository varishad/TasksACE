# 🔒 Security Fixes Implementation Guide

**Priority:** CRITICAL - Fix Immediately Before Deployment  
**Estimated Time:** 2-3 hours  
**Complexity:** Medium

## 🚨 Critical Security Issues to Fix

### 1. Remove Hardcoded Credentials (CRITICAL)

#### Current Issue
**File:** `app/api/contact/route.ts`
**Problem:** Gmail password exposed in source code

```typescript
// DANGEROUS - Currently in your code
const gmailPassword = process.env.gmail_app_password || 'qkfknsecxxrixqcp';
```

#### ✅ Step-by-Step Fix

**Step 1: Create Environment File**
```bash
# Create .env.local in project root (if not exists)
touch .env.local
```

**Step 2: Add Secure Environment Variables**
Add to `.env.local`:
```env
# Email Configuration - Replace with your actual values
GMAIL_USER=your-business-email@gmail.com
GMAIL_APP_PASSWORD=your-secure-app-password

# Analytics Configuration
NEXT_PUBLIC_GA_ID=G-YOUR-GA-ID
NEXT_PUBLIC_GSC_VERIFICATION=your-gsc-verification-code
NEXT_PUBLIC_SITE_URL=https://tasksace.com
```

**Step 3: Update API Route**
Replace the hardcoded values in `app/api/contact/route.ts`:

```typescript
// BEFORE (Line 19-20) - REMOVE THIS
const gmailUser = process.env.gmail_user || 'tasksace@gmail.com';
const gmailPassword = process.env.gmail_app_password || 'qkfknsecxxrixqcp';

// AFTER - REPLACE WITH THIS
const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_APP_PASSWORD;

// Add validation
if (!gmailUser || !gmailPassword) {
  console.error('❌ Email configuration missing');
  return NextResponse.json(
    { error: 'Email service configuration error' },
    { status: 500 }
  );
}
```

**Step 4: Update .gitignore**
Ensure `.env.local` is in your `.gitignore`:
```gitignore
# Environment files
.env.local
.env
.env.*.local
```

### 2. Fix Insecure TLS Configuration (HIGH)

#### Current Issue
**File:** `app/api/contact/route.ts`
**Problem:** Accepts invalid SSL certificates

```typescript
// INSECURE - Currently in your code
tls: {
  rejectUnauthorized: false
}
```

#### ✅ Step-by-Step Fix

Replace the insecure TLS configuration:

```typescript
// BEFORE (Lines 32-34) - REMOVE THIS
tls: {
  rejectUnauthorized: false
}

// AFTER - REPLACE WITH THIS
tls: {
  rejectUnauthorized: true,
  ciphers: 'SSLv3'
}
```

**Complete Secure Transporter Configuration:**
```typescript
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: gmailUser,
    pass: gmailPassword,
  },
  tls: {
    rejectUnauthorized: true,
    ciphers: 'SSLv3'
  }
});
```

### 3. Add Input Validation and Sanitization (HIGH)

#### Current Issue
**File:** `app/api/contact/route.ts`
**Problem:** No validation or sanitization of user inputs

#### ✅ Step-by-Step Fix

**Step 1: Install Validation Library**
```bash
npm install zod
npm install --save-dev @types/validator
npm install validator
```

**Step 2: Create Validation Schema**
Add at the top of `app/api/contact/route.ts`:

```typescript
import { z } from 'zod';
import validator from 'validator';

// Input validation schema
const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters in name'),
  
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
```

**Step 3: Update API Route with Validation**
Replace the validation section:

```typescript
// BEFORE (Lines 8-15) - REPLACE THIS
const { name, email, company, phone, service, message } = body;

// Validate required fields
if (!name || !email || !message) {
  return NextResponse.json(
    { error: 'Name, email, and message are required' },
    { status: 400 }
  );
}

// AFTER - REPLACE WITH THIS
try {
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

} catch (error) {
  if (error instanceof z.ZodError) {
    return NextResponse.json(
      { 
        error: 'Invalid input data',
        details: error.errors.map(e => e.message)
      },
      { status: 400 }
    );
  }
  
  return NextResponse.json(
    { error: 'Validation error' },
    { status: 400 }
  );
}
```

### 4. Add Rate Limiting (RECOMMENDED)

#### ✅ Implementation

**Step 1: Install Rate Limiting Package**
```bash
npm install @upstash/ratelimit @upstash/redis
```

**Step 2: Create Rate Limiter**
Create `lib/rateLimit.ts`:

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create rate limiter
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
  analytics: true,
});

// Alternative: Simple in-memory rate limiting for development
const requests = new Map<string, number[]>();

export function simpleRateLimit(ip: string, limit = 5, window = 60000): boolean {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter(time => now - time < window);
  
  if (validRequests.length >= limit) {
    return false; // Rate limit exceeded
  }
  
  validRequests.push(now);
  requests.set(ip, validRequests);
  return true;
}
```

**Step 3: Add Rate Limiting to API**
Add to the beginning of your API route:

```typescript
import { simpleRateLimit } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!simpleRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // ... rest of your code
  } catch (error) {
    // ... error handling
  }
}
```

## 🛡️ Complete Secure API Route

Here's the complete, secure version of your contact API:

```typescript
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
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters in name'),
  
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

    // Get secure environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error('❌ Email configuration missing');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }
    
    console.log('📧 Email service ready - sending contact form submission...');

    // Create secure transporter
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
      tls: {
        rejectUnauthorized: true,
        ciphers: 'SSLv3'
      }
    });

    // Email content (same as before, but with sanitized data)
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
      to: gmailUser,
      replyTo: email,
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
      return NextResponse.json(
        { 
          error: 'Invalid input data',
          details: error.errors.map(e => e.message)
        },
        { status: 400 }
      );
    }
    
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

## ✅ Security Checklist

After implementing these fixes, verify:

- [ ] No hardcoded credentials in source code
- [ ] Environment variables properly configured
- [ ] .env.local in .gitignore
- [ ] TLS configuration secure
- [ ] Input validation implemented
- [ ] Rate limiting active
- [ ] Error messages don't leak sensitive info
- [ ] All dependencies updated

## 🔄 Testing Your Security Fixes

### Test 1: Environment Variables
```bash
# Test that environment variables are working
npm run dev
# Check console for any "Email configuration missing" errors
```

### Test 2: Input Validation
Try submitting forms with:
- Empty fields
- Very long messages
- Special characters
- Invalid email formats

### Test 3: Rate Limiting
- Submit multiple contact forms rapidly
- Should get rate limit error after 5 requests

## 📝 Next Steps

1. ✅ Implement all security fixes above
2. ✅ Test thoroughly in development
3. ✅ Update deployment environment variables
4. ✅ Monitor for any issues
5. ✅ Consider additional security headers

> **⚠️ Important:** Never commit the `.env.local` file to version control. Always use environment variables for sensitive data in production. 