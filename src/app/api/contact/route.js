import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { sendInquiryEmail } from "@/lib/nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      enquiryType,
      productCategory,
      productTypes,
      productType,
      estimatedQuantity,
      exactQuantity,
      category,
      message,
    } = body;

    // Input Sanitization
    const sanitizedName = (name || "").trim();
    const sanitizedEmail = (email || "").trim();
    const sanitizedPhone = (phone || "").trim();
    const sanitizedCompany = (company || "").trim();
    const sanitizedEnquiryType = (enquiryType || category || "").trim();
    const sanitizedProductCategory = (productCategory || "").trim();
    const sanitizedEstimatedQuantity = (estimatedQuantity || "").trim();
    const sanitizedExactQuantity = (exactQuantity || "").toString().trim();
    const sanitizedMessage = (message || "").trim();

    const rawProductType = productTypes || productType || "";
    const formattedProductTypes = Array.isArray(rawProductType)
      ? rawProductType.join(", ")
      : String(rawProductType || "").trim();

    // Server-side Validation
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!sanitizedName || sanitizedName.length < 2) {
      errors.name = "Name must be at least 2 characters long.";
    }

    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      errors.email = "A valid email address is required.";
    }

    if (sanitizedPhone) {
      const phoneNumberObj = parsePhoneNumberFromString(sanitizedPhone);
      if (!phoneNumberObj || !phoneNumberObj.isValid()) {
        errors.phone = "Please provide a valid international phone number.";
      }
    }

    if (!sanitizedEnquiryType) {
      errors.enquiryType = "Please select an enquiry type.";
    }

    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: "Form validation failed. Please check the highlighted fields.",
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

    // Logo Attachment Setup
    const logoPath = path.join(process.cwd(), "public", "logo", "bocheapprels.png");
    const groupLogoPath = path.join(process.cwd(), "public", "logo", "group-logo.webp");
    const hasLogo = fs.existsSync(logoPath);
    const hasGroupLogo = fs.existsSync(groupLogoPath);

    // Formatted HTML Email Body
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Buyer Enquiry - boCHE Apparels</title>
        </head>
        <body style="margin:0; padding:0; background-color:#F4F4F6; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing:antialiased;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F4F6; padding:30px 10px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:620px; background-color:#FFFFFF; border-radius:16px; overflow:hidden; border:1px solid #E4E4E7; box-shadow:0 10px 25px rgba(0,0,0,0.06);">
                  
                  <!-- Header Banner with Official Logo -->
                  <tr>
                    <td style="background-color:#1A1A1A; padding:24px 32px; text-align:center; border-bottom:4px solid #FBE87E;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center">
                            ${
                              hasLogo
                                ? `<img src="cid:bochelogo" alt="boCHE Apparels Logo" width="220" style="display:block; margin:0 auto; max-width:220px; height:auto; border:0;" />`
                                : `<h1 style="color:#FFFFFF; margin:0; font-size:22px; font-weight:900; letter-spacing:2px;">boCHE <span style="color:#FBE87E;">Apparels</span></h1>`
                            }
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Enquiry Notification Bar -->
                  <tr>
                    <td style="background-color:#FAF9F5; padding:16px 32px; border-bottom:1px solid #EEEEEC;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="font-size:13px; font-weight:800; color:#1A1A1A; letter-spacing:0.5px;">
                            📩 NEW BUYER ENQUIRY: ${sanitizedEnquiryType.toUpperCase()}
                          </td>
                          <td align="right" style="font-size:11px; color:#666666; font-weight:600;">
                            ${formattedDate}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Main Content Area -->
                  <tr>
                    <td style="padding:32px;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        
                        <!-- Section Label -->
                        <tr>
                          <td style="padding-bottom:14px;">
                            <span style="font-size:11px; font-weight:800; color:#888888; letter-spacing:1.5px; text-transform:uppercase;">
                              BUYER & COMPANY DETAILS
                            </span>
                          </td>
                        </tr>

                        <!-- Properly Aligned 2-Column Data Table -->
                        <tr>
                          <td style="padding-bottom:28px;">
                            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background-color:#FAFAFA; border-radius:12px; border:1px solid #EBEBEB; overflow:hidden;">
                              
                              <!-- Buyer Name -->
                              <tr>
                                <td width="38%" style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Buyer Name
                                </td>
                                <td width="62%" style="padding:14px 18px; font-size:14px; font-weight:700; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  ${sanitizedName}
                                </td>
                              </tr>

                              <!-- Email Address -->
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Email Address
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:600; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  <a href="mailto:${sanitizedEmail}" style="color:#1A1A1A; text-decoration:none; font-weight:700; border-bottom:1px dotted #1A1A1A;">${sanitizedEmail}</a>
                                </td>
                              </tr>

                              <!-- Phone Number -->
                              ${
                                sanitizedPhone
                                  ? `
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Phone / WhatsApp
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:700; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  <a href="tel:${sanitizedPhone}" style="color:#1A1A1A; text-decoration:none;">${sanitizedPhone}</a>
                                </td>
                              </tr>
                              `
                                  : ""
                              }

                              <!-- Company / Label -->
                              ${
                                sanitizedCompany
                                  ? `
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Company / Label
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:600; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  ${sanitizedCompany}
                                </td>
                              </tr>
                              `
                                  : ""
                              }

                              <!-- Enquiry Type -->
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Enquiry Type
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:700; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  <span style="display:inline-block; background-color:#FBE87E; color:#1A1A1A; padding:4px 12px; border-radius:6px; font-size:12px; font-weight:800;">
                                    ${sanitizedEnquiryType}
                                  </span>
                                </td>
                              </tr>

                              <!-- Product Category (Conditional) -->
                              ${
                                sanitizedProductCategory
                                  ? `
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Product Category
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:600; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  ${sanitizedProductCategory}
                                </td>
                              </tr>
                              `
                                  : ""
                              }

                              <!-- Product Type(s) (Conditional) -->
                              ${
                                formattedProductTypes
                                  ? `
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Product Types
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:600; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  ${formattedProductTypes}
                                </td>
                              </tr>
                              `
                                  : ""
                              }

                              <!-- Estimated Order Quantity (Conditional) -->
                              ${
                                sanitizedEstimatedQuantity
                                  ? `
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #EBEBEB; background-color:#F5F5F3;">
                                  Estimated Quantity
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:600; color:#1A1A1A; border-bottom:1px solid #EBEBEB;">
                                  ${sanitizedEstimatedQuantity}
                                </td>
                              </tr>
                              `
                                  : ""
                              }

                              <!-- Exact Quantity (Conditional) -->
                              ${
                                sanitizedExactQuantity
                                  ? `
                              <tr>
                                <td style="padding:14px 18px; font-size:12px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.5px; background-color:#F5F5F3;">
                                  Exact Target Quantity
                                </td>
                                <td style="padding:14px 18px; font-size:14px; font-weight:700; color:#1A1A1A;">
                                  ${sanitizedExactQuantity} Pcs
                                </td>
                              </tr>
                              `
                                  : ""
                              }

                            </table>
                          </td>
                        </tr>

                        <!-- Inquiry Specs Section -->
                        <tr>
                          <td style="padding-bottom:14px;">
                            <span style="font-size:11px; font-weight:800; color:#888888; letter-spacing:1.5px; text-transform:uppercase;">
                              MANUFACTURING SPECIFICATIONS & MESSAGE
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding-bottom:28px;">
                            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#FAF9F5; border-left:4px solid #FBE87E; border-radius:0 10px 10px 0; border-top:1px solid #EBEBEB; border-right:1px solid #EBEBEB; border-bottom:1px solid #EBEBEB;">
                              <tr>
                                <td style="padding:20px; font-size:14px; line-height:1.65; color:#222222; font-weight:400; word-break:break-word;">
                                  ${sanitizedMessage.replace(/\n/g, "<br>")}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Merchandising Action Buttons -->
                        <tr>
                          <td align="center" style="padding-bottom:12px;">
                            <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="center" style="border-radius:30px; background-color:#1A1A1A; padding:0;">
                                  <a href="mailto:${sanitizedEmail}?subject=RE:%20boCHE%20Apparels%20Inquiry%20-%20${encodeURIComponent(sanitizedName)}" target="_blank" style="display:inline-block; padding:12px 28px; color:#FBE87E; font-size:12px; font-weight:800; text-decoration:none; letter-spacing:1px; text-transform:uppercase; border-radius:30px;">
                                    ✉️ REPLY TO BUYER NOW
                                  </a>
                                </td>
                                ${
                                  sanitizedPhone
                                    ? `
                                <td width="12"></td>
                                <td align="center" style="border-radius:30px; background-color:#FBE87E; padding:0;">
                                  <a href="tel:${sanitizedPhone}" style="display:inline-block; padding:12px 22px; color:#1A1A1A; font-size:12px; font-weight:800; text-decoration:none; letter-spacing:1px; text-transform:uppercase; border-radius:30px;">
                                    📞 CALL BUYER
                                  </a>
                                </td>
                                `
                                    : ""
                                }
                              </tr>
                            </table>
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                  <!-- Enterprise Footer -->
                  <tr>
                    <td style="background-color:#1A1A1A; padding:28px 32px; text-align:center; color:#A1A1AA; font-size:11px; line-height:1.6; border-top:1px solid #333333;">
                      ${
                        hasGroupLogo
                          ? `<div style="padding-bottom:12px;"><img src="cid:grouplogo" alt="Boby Chemmanur International Group Emblem" width="90" style="display:block; margin:0 auto; max-width:90px; height:auto; border:0;" /></div>`
                          : ""
                      }
                      <span style="color:#888888; font-size:9px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; display:block; margin-bottom:6px;">A VENTURE OF BOBY CHEMMANUR INTERNATIONAL GROUP</span>
                      <strong style="color:#FFFFFF; font-size:12px;">boCHE Apparels</strong> — Complete Apparel Manufacturing Solutions<br>
                      Boby Chemmanur Enterprises Pvt Ltd • GSTIN: 33AAJCB3348N1ZF<br>
                      Factory: Tirupur Garment Hub, Tamil Nadu, India<br>
                      <span style="color:#71717A; font-size:10px; margin-top:8px; display:block;">
                        Automated Inquiry Dispatch System • Rediffmail SMTP Pool Integration
                      </span>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const attachments = [];
    if (hasLogo) {
      attachments.push({
        filename: "bocheapprels.png",
        path: logoPath,
        cid: "bochelogo",
      });
    }
    if (hasGroupLogo) {
      attachments.push({
        filename: "group-logo.webp",
        path: groupLogoPath,
        cid: "grouplogo",
      });
    }

    const mailOptions = {
      from: `"boCHE Apparels Buyer Enquiry" <${user}>`,
      to: recipient,
      replyTo: sanitizedEmail,
      subject: `New Buyer Enquiry [${sanitizedEnquiryType}]: ${sanitizedName}${sanitizedCompany ? ` (${sanitizedCompany})` : ''}`,
      text: `New Buyer Enquiry from ${sanitizedName} (${sanitizedEmail}):\nEnquiry Type: ${sanitizedEnquiryType}\nPhone: ${sanitizedPhone || 'N/A'}\nCompany: ${sanitizedCompany || 'N/A'}\nProduct Category: ${sanitizedProductCategory || 'N/A'}\nProduct Types: ${formattedProductTypes || 'N/A'}\nEstimated Quantity: ${sanitizedEstimatedQuantity || 'N/A'}\nExact Quantity: ${sanitizedExactQuantity ? `${sanitizedExactQuantity} Pcs` : 'N/A'}\n\nMessage:\n${sanitizedMessage}`,
      html: htmlTemplate,
      attachments: attachments,
    };

    // Fast non-blocking background dispatch (or fast promise race)
    sendInquiryEmail(mailOptions).catch((err) => {
      console.error("Background Rediffmail SMTP Error:", err);
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry email received successfully.",
    });
  } catch (error) {
    console.error("Contact API Endpoint Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process inquiry request.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
