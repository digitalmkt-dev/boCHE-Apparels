import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { sendInquiryEmail } from "@/lib/nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Input Sanitization
    const sanitizedName = (name || "").trim();
    const sanitizedEmail = (email || "").trim();
    const sanitizedPhone = (phone || "").trim();
    const sanitizedMessage = (message || "").trim();

    // Server-side Validation
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!sanitizedName || sanitizedName.length < 2) {
      errors.name = "Please enter your name (at least 2 characters).";
    }

    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!sanitizedPhone) {
      errors.phone = "Please enter your phone number.";
    } else {
      const cleanPhoneDigits = sanitizedPhone.replace(/\D/g, "");
      if (cleanPhoneDigits.length < 7 || cleanPhoneDigits.length > 15) {
        errors.phone = "Please enter a valid phone number.";
      }
    }

    if (!sanitizedMessage || sanitizedMessage.length < 5) {
      errors.message = "Please enter your message.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: "Form validation failed.",
          errors,
        },
        { status: 400 }
      );
    }

    const user = process.env.REDIFF_SMTP_USER || "enquiry@bocheapparels.com";
    const recipient = process.env.RECIPIENT_EMAIL || "gm@bocheapparels.com";

    // Formatted Date & Time (IST)
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Logo Attachment Setup (Lossless 32-bit PNG for universal crisp email rendering)
    const logoPngPath = path.join(process.cwd(), "public", "logo", "bocheapprels_email.png");
    const logoWebpPath = path.join(process.cwd(), "public", "logo", "bocheapprels2.webp");
    const logoPath = fs.existsSync(logoPngPath) ? logoPngPath : logoWebpPath;
    const hasLogo = fs.existsSync(logoPath);

    // Email attachments (boCHE logo only - NO group logo attached to any email)
    const attachments = [];
    if (hasLogo) {
      attachments.push({
        filename: "bocheapprels.png",
        path: logoPath,
        cid: "bochelogo",
        contentType: "image/png",
      });
    }

    // 1. Enquiry Email to GM / Admin (Only containing entered details)
    const enquiryHtmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry - boCHE Apparels</title>
        </head>
        <body style="margin:0; padding:0; background-color:#F4F4F6; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F4F6; padding:30px 10px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#FFFFFF; border-radius:16px; overflow:hidden; border:1px solid #E4E4E7; box-shadow:0 10px 25px rgba(0,0,0,0.06);">
                  
                  <!-- Header Banner -->
                  <tr>
                    <td style="background-color:#1A1A1A; padding:24px 32px; text-align:center; border-bottom:4px solid #FBE87E;">
                      ${
                        hasLogo
                          ? `<img src="cid:bochelogo" alt="boCHE Apparels Logo" width="180" style="display:block; margin:0 auto; max-width:180px; height:auto; border:0; outline:none;" />`
                          : `<h1 style="color:#FFFFFF; margin:0; font-size:22px; font-weight:900;">boCHE <span style="color:#FBE87E;">Apparels</span></h1>`
                      }
                    </td>
                  </tr>

                  <!-- Notification Bar -->
                  <tr>
                    <td style="background-color:#FAF9F5; padding:16px 32px; border-bottom:1px solid #EEEEEC;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="font-size:13px; font-weight:800; color:#1A1A1A;">
                            📩 NEW CONSULTANT ADVISING SESSION REQUEST
                          </td>
                          <td align="right" style="font-size:11px; color:#666666; font-weight:600;">
                            ${formattedDate}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Main Details Table -->
                  <tr>
                    <td style="padding:32px;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background-color:#FAFAFA; border-radius:12px; border:1px solid #EBEBEB; overflow:hidden;">
                        
                        <tr>
                          <td width="35%" style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                            Name
                          </td>
                          <td width="65%" style="padding:14px 18px; font-size:14px; font-weight:700; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                            ${sanitizedName}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                            Email Address
                          </td>
                          <td style="padding:14px 18px; font-size:14px; font-weight:600; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                            <a href="mailto:${sanitizedEmail}" style="color:#1A1A1A; text-decoration:none; font-weight:700;">${sanitizedEmail}</a>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                            Phone Number
                          </td>
                          <td style="padding:14px 18px; font-size:14px; font-weight:700; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                            <a href="tel:${sanitizedPhone}" style="color:#1A1A1A; text-decoration:none;">${sanitizedPhone}</a>
                          </td>
                        </tr>

                      </table>

                      <div style="margin-top:24px; font-size:11px; font-weight:800; color:#888888; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">
                        MESSAGE
                      </div>
                      <div style="background-color:#FAF9F5; border-left:4px solid #FBE87E; border-radius:0 8px 8px 0; border:1px solid #EBEBEB; padding:18px; font-size:14px; line-height:1.6; color:#222222;">
                        ${sanitizedMessage.replace(/\n/g, "<br>")}
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#1A1A1A; padding:20px 32px; text-align:center; color:#A1A1AA; font-size:11px;">
                      <strong style="color:#FFFFFF;">boCHE Apparels</strong> — Garment Manufacturing Solutions
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const adminMailOptions = {
      from: `"boCHE Apparels Contact Form" <${user}>`,
      to: recipient,
      replyTo: sanitizedEmail,
      subject: `New Inquiry from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nPhone: ${sanitizedPhone}\n\nMessage:\n${sanitizedMessage}`,
      html: enquiryHtmlTemplate,
      attachments,
    };

    // 2. Auto-reply Email to User (Clean Design)
    const autoReplyHtmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting boCHE Apparels</title>
        </head>
        <body style="margin:0; padding:0; background-color:#F4F4F6; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F4F6; padding:35px 15px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:540px; background-color:#FFFFFF; border-radius:16px; overflow:hidden; border:1px solid #E5E5E7; box-shadow:0 10px 30px rgba(0,0,0,0.06);">
                  
                  <!-- Dark Header Banner with Yellow Accent Strip -->
                  <tr>
                    <td style="background-color:#1A1A1A; padding:24px; text-align:center; border-bottom:4px solid #FBE87E;">
                      ${
                        hasLogo
                          ? `<img src="cid:bochelogo" alt="boCHE Apparels Logo" width="180" style="display:block; margin:0 auto; max-width:180px; height:auto; border:0; outline:none;" />`
                          : `<h1 style="color:#FFFFFF; margin:0; font-size:22px; font-weight:900;">boCHE <span style="color:#FBE87E;">Apparels</span></h1>`
                      }
                    </td>
                  </tr>

                  <!-- Main Content Area -->
                  <tr>
                    <td style="padding:44px 32px 36px; text-align:center;">
                      
                      <!-- Yellow Checkmark Badge Icon -->
                      <div style="margin-bottom:20px;">
                        <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;">
                          <tr>
                            <td align="center" width="56" height="56" style="background-color:#FBE87E; border-radius:50%; text-align:center; vertical-align:middle;">
                              <span style="font-size:24px; line-height:1; color:#1A1A1A; font-weight:900;">✓</span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Main Title -->
                      <h2 style="font-size:26px; font-weight:800; color:#1A1A1A; margin-top:0; margin-bottom:12px; letter-spacing:-0.4px;">
                        Thank you for contacting us!
                      </h2>

                      <!-- Subtitle / Message -->
                      <p style="font-size:16px; line-height:1.6; color:#555555; margin-top:0; margin-bottom:0; font-weight:400;">
                        We’ve received your enquiry.<br>
                        Our team will get back to you shortly.
                      </p>

                      <!-- Thin Horizontal Divider Line -->
                      <div style="margin:30px 0 24px; border-top:1px solid #ECECEC; width:100%;"></div>

                      <!-- Assistance Contact Section -->
                      <p style="font-size:14px; color:#666666; margin-top:0; margin-bottom:6px; font-weight:400;">
                        For assistance, contact
                      </p>
                      <p style="font-size:18px; font-weight:800; color:#1A1A1A; margin-top:0; margin-bottom:0;">
                        <a href="mailto:gm@bocheapparels.com" style="color:#1A1A1A; text-decoration:none;">gm@bocheapparels.com</a>
                      </p>

                    </td>
                  </tr>

                  <!-- Light Gray Footer -->
                  <tr>
                    <td style="background-color:#F9F9FA; padding:20px 32px; text-align:center; border-top:1px solid #ECECEC;">
                      <p style="font-size:13px; font-weight:800; color:#1A1A1A; margin-top:0; margin-bottom:4px;">
                        boCHE Apparels
                      </p>
                      <p style="font-size:13px; color:#777777; margin-top:0; margin-bottom:0;">
                        <a href="https://bocheapparels.com" style="color:#777777; text-decoration:none;">bocheapparels.com</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const userReplyMailOptions = {
      from: `"boCHE Apparels" <${user}>`,
      to: sanitizedEmail,
      subject: "Thank you for contacting boCHE Apparels",
      text: `Thank you for contacting us!\n\nWe’ve received your enquiry.\nOur team will get back to you shortly.\n\nFor assistance, contact:\ngm@bocheapparels.com\n\nboCHE Apparels\nbocheapparels.com`,
      html: autoReplyHtmlTemplate,
      attachments,
    };

    // Send Admin Email & Auto-Reply Email
    sendInquiryEmail(adminMailOptions).catch((err) => {
      console.error("Background Admin Email Error:", err);
    });

    sendInquiryEmail(userReplyMailOptions).catch((err) => {
      console.error("Background User Auto-reply Email Error:", err);
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us. Our consultants will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact API Endpoint Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process contact request.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
