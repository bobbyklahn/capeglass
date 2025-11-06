import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract all form fields
    const data = {
      // Contact Info
      companyName: formData.get('companyName') as string,
      contactName: formData.get('contactName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || 'Not provided',
      location: formData.get('location') as string,

      // Specifications
      labelSize: formData.get('labelSize') as string,
      labelShape: formData.get('labelShape') as string,
      quantity: formData.get('quantity') as string,
      material: formData.get('material') as string,
      finish: formData.get('finish') as string,
      adhesive: formData.get('adhesive') as string || 'Permanent',

      // Additional Info
      designStatus: formData.get('designStatus') as string,
      timeline: formData.get('timeline') as string,
      additionalNotes: formData.get('additionalNotes') as string || '',
      referralSource: formData.get('referralSource') as string || 'Not provided',

      // File/Link
      cloudLink: formData.get('cloudLink') as string || '',
    }

    // Validate required fields
    if (!data.companyName || !data.contactName || !data.email || !data.location) {
      return NextResponse.json(
        { error: 'Missing required contact information' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Handle file attachments
    const files = formData.getAll('designFiles') as File[]
    const attachments = []

    for (const file of files) {
      if (file && file.size > 0) {
        // Check file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
          return NextResponse.json(
            { error: `File ${file.name} exceeds 10MB limit` },
            { status: 400 }
          )
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        attachments.push({
          filename: file.name,
          content: buffer
        })
      }
    }

    // Build email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: #6B0F1A; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .section { margin-bottom: 25px; }
            .section-title {
              color: #6B0F1A;
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
              border-bottom: 2px solid #6B0F1A;
              padding-bottom: 5px;
            }
            .field { margin: 8px 0; }
            .field-label { font-weight: bold; color: #555; }
            .field-value { color: #333; }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Wine Label Quote Request</h1>
          </div>

          <div class="content">
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="field">
                <span class="field-label">Company/Winery:</span>
                <span class="field-value">${data.companyName}</span>
              </div>
              <div class="field">
                <span class="field-label">Contact Name:</span>
                <span class="field-value">${data.contactName}</span>
              </div>
              <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value">${data.email}</span>
              </div>
              <div class="field">
                <span class="field-label">Phone:</span>
                <span class="field-value">${data.phone}</span>
              </div>
              <div class="field">
                <span class="field-label">Location:</span>
                <span class="field-value">${data.location}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Label Specifications</div>
              <div class="field">
                <span class="field-label">Size:</span>
                <span class="field-value">${data.labelSize}</span>
              </div>
              <div class="field">
                <span class="field-label">Shape:</span>
                <span class="field-value">${data.labelShape}</span>
              </div>
              <div class="field">
                <span class="field-label">Quantity:</span>
                <span class="field-value">${data.quantity} labels</span>
              </div>
              <div class="field">
                <span class="field-label">Material:</span>
                <span class="field-value">${data.material}</span>
              </div>
              <div class="field">
                <span class="field-label">Finish:</span>
                <span class="field-value">${data.finish}</span>
              </div>
              <div class="field">
                <span class="field-label">Adhesive:</span>
                <span class="field-value">${data.adhesive}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Additional Details</div>
              <div class="field">
                <span class="field-label">Design Status:</span>
                <span class="field-value">${data.designStatus}</span>
              </div>
              <div class="field">
                <span class="field-label">Timeline:</span>
                <span class="field-value">${data.timeline}</span>
              </div>
              ${data.additionalNotes ? `
              <div class="field">
                <span class="field-label">Additional Notes:</span><br/>
                <span class="field-value">${data.additionalNotes.replace(/\n/g, '<br/>')}</span>
              </div>
              ` : ''}
            </div>

            ${data.cloudLink ? `
            <div class="section">
              <div class="section-title">Design Files</div>
              <div class="field">
                <span class="field-label">Cloud Storage Link:</span><br/>
                <a href="${data.cloudLink}" target="_blank">${data.cloudLink}</a>
              </div>
            </div>
            ` : ''}

            ${attachments.length > 0 ? `
            <div class="section">
              <div class="section-title">Attached Files</div>
              <div class="field">
                ${attachments.map(a => a.filename).join(', ')}
              </div>
            </div>
            ` : ''}

            <div class="footer">
              <p>Referral Source: ${data.referralSource}</p>
              <p>Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Adelaide' })}</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to business
    const emailResponse = await resend.emails.send({
      from: 'Cape Glass Label Quotes <noreply@capeglass.com.au>',
      to: ['bobby@capeglass.com.au', 'bobbyleo@me.com'],
      replyTo: data.email,
      subject: `🍷 New Label Quote: ${data.companyName} - ${data.quantity} labels`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined
    })

    console.log('Business email sent:', emailResponse)

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'Cape Glass <noreply@capeglass.com.au>',
      to: [data.email],
      subject: 'Quote Request Received - Cape Glass Label Printing',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .header { background: #6B0F1A; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; max-width: 600px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Thank You for Your Quote Request</h1>
            </div>
            <div class="content">
              <p>Hi ${data.contactName},</p>

              <p>We've received your wine label printing quote request for <strong>${data.companyName}</strong>.</p>

              <p><strong>Your Request Summary:</strong></p>
              <ul>
                <li>Quantity: ${data.quantity} labels</li>
                <li>Size: ${data.labelSize}</li>
                <li>Material: ${data.material}</li>
                <li>Finish: ${data.finish}</li>
              </ul>

              <p>Our team will review your specifications and design files, and we'll send you a detailed quote within <strong>1 business day</strong>.</p>

              <p>If you have any urgent questions, feel free to reply to this email or call us.</p>

              <p>Best regards,<br/>
              <strong>The Cape Glass Team</strong><br/>
              capeglass.com.au</p>
            </div>
          </body>
        </html>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully'
    })

  } catch (error) {
    console.error('Server error:', error)

    return NextResponse.json(
      { error: 'Internal server error. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
