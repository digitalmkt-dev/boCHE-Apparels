import nodemailer from "nodemailer";
import dns from "dns";

// Global cache for Nodemailer transport instance across Next.js dev reloads
let globalTransporter = global.nodemailerTransporter;

async function getResolvedHost(hostname) {
  // If host is already an IP address, return directly
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) {
    return hostname;
  }

  try {
    // Quick DNS resolve to avoid system getaddrinfo timeout on Windows
    const addresses = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => resolve(null), 1500); // 1.5s fast timeout
      dns.resolve4(hostname, (err, addrs) => {
        clearTimeout(timer);
        if (err || !addrs || addrs.length === 0) resolve(null);
        else resolve(addrs[0]);
      });
    });

    if (addresses) {
      return addresses;
    }
  } catch (e) {
    // Fallback if DNS resolve fails
  }

  // Fallback to known Rediffmail Pro SMTP IPv4 if hostname is rediffmailpro.com
  if (hostname.includes("rediffmailpro.com")) {
    return "119.252.155.19";
  }

  return hostname;
}

export async function getTransporter() {
  if (globalTransporter) {
    return globalTransporter;
  }

  const rawHost = process.env.REDIFF_SMTP_HOST || "smtp.rediffmailpro.com";
  const port = parseInt(process.env.REDIFF_SMTP_PORT || "587", 10);
  const user = process.env.REDIFF_SMTP_USER || "enquiry@bocheapparels.com";
  const pass = process.env.REDIFF_SMTP_PASS || "Pass@123";
  const smtpName = process.env.REDIFF_SMTP_NAME || "bocheapparels.com";

  const targetHost = await getResolvedHost(rawHost);

  const transporter = nodemailer.createTransport({
    name: smtpName,
    host: targetHost,
    port: port,
    secure: port === 465,
    pool: true, // Enable SMTP Connection Pooling for fast reused sends
    maxConnections: 5,
    maxMessages: 100,
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false,
      servername: rawHost,
    },
  });

  if (process.env.NODE_ENV !== "production") {
    global.nodemailerTransporter = transporter;
  }

  globalTransporter = transporter;
  return transporter;
}

export async function sendInquiryEmail(mailOptions) {
  const transporter = await getTransporter();
  return transporter.sendMail(mailOptions);
}
