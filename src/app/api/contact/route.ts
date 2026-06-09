import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, company, serviceType, quantity, timeline, message } = body
    
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e4d3a; border-bottom: 2px solid #1e4d3a; padding-bottom: 10px;">
          New Contact Form Submission - Cape Glass
        </h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #334155; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569; width: 30%;">Full Name:</td>
              <td style="padding: 10px; color: #334155;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 10px; color: #334155;">${email}</td>
            </tr>
            ${phone ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 10px; color: #334155;">${phone}</td>
            </tr>` : ''}
            ${company ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569;">Company/Winery:</td>
              <td style="padding: 10px; color: #334155;">${company}</td>
            </tr>` : ''}
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #334155; margin-bottom: 15px;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${serviceType ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569; width: 30%;">Service Interest:</td>
              <td style="padding: 10px; color: #334155;">${serviceType}</td>
            </tr>` : ''}
            ${quantity ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569;">Estimated Quantity:</td>
              <td style="padding: 10px; color: #334155;">${quantity}</td>
            </tr>` : ''}
            ${timeline ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #475569;">Required Timeline:</td>
              <td style="padding: 10px; color: #334155;">${timeline}</td>
            </tr>` : ''}
          </table>
        </div>

        ${message ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #334155; margin-bottom: 15px;">Message</h3>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #1e4d3a;">
            <p style="margin: 0; color: #334155; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>` : ''}

        <div style="margin-top: 30px; padding: 15px; background: #fee2e2; border-radius: 8px; border-left: 4px solid #dc2626;">
          <p style="margin: 0; color: #991b1b; font-weight: bold;">⏰ 48-Hour Response Commitment</p>
          <p style="margin: 5px 0 0 0; color: #7f1d1d; font-size: 14px;">This inquiry requires a response within 48 hours as per Cape Glass service standards.</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #f0fdf4; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #166534; font-size: 12px;">
            This email was sent from the Cape Glass website contact form.<br>
            Submitted on: ${new Date().toLocaleString('en-AU', { 
              timeZone: 'Australia/Adelaide',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} (Adelaide time)
          </p>
        </div>
      </div>
    `

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Cape Glass Website <noreply@capeglass.com.au>',
      to: ['jose.zzh@outlook.com.au'],
      subject: `New Contact Form Submission - ${name} (${company || 'Individual'})`,
      html: emailHtml,
      replyTo: email
    })

    console.log('Email sent successfully:', emailResponse)

    return NextResponse.json(
      { 
        message: 'Thank you for your inquiry! We will respond within 48 hours.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly at jose.zzh@outlook.com.au',
        success: false 
      },
      { status: 500 }
    )
  }
}