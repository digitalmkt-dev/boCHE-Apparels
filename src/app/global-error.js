"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log root layout failures internally
    console.error("Global root layout error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Loading Error - boCHE Apparels</title>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #F9F9F9;
            color: #1A1A1A;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            box-sizing: border-box;
          }
          .card {
            background-color: #FFFFFF;
            border: 1px solid #E5E5E2;
            border-radius: 24px;
            padding: 40px 32px;
            max-width: 440px;
            width: 90%;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }
          .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background-color: #FBE87E;
            color: #1A1A1A;
            font-weight: 900;
            font-size: 24px;
            margin: 0 auto 24px auto;
          }
          h1 {
            font-size: 24px;
            font-weight: 900;
            margin: 0 0 12px 0;
            color: #1A1A1A;
            letter-spacing: -0.5px;
          }
          p {
            font-size: 14px;
            line-height: 1.6;
            color: #555555;
            margin: 0 0 28px 0;
          }
          .btn-group {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .btn-primary {
            background-color: #1A1A1A;
            color: #FFFFFF;
            border: none;
            border-radius: 9999px;
            padding: 14px 28px;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
          }
          .btn-primary:focus {
            outline: 2px solid #1A1A1A;
            outline-offset: 2px;
          }
          .btn-secondary {
            background-color: #F9F9F9;
            color: #1A1A1A;
            border: 1px solid #E5E5E2;
            border-radius: 9999px;
            padding: 14px 28px;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
          }
          .btn-secondary:focus {
            outline: 2px solid #1A1A1A;
            outline-offset: 2px;
          }
        `}</style>
      </head>
      <body>
        <div className="card">
          <div className="badge">!</div>
          <h1>We’re having trouble loading the website.</h1>
          <p>Please try again in a moment.</p>
          <div className="btn-group">
            <button type="button" className="btn-primary" onClick={() => reset()}>
              Try Again
            </button>
            <a href="/" title="Return to Home" className="btn-secondary">
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
