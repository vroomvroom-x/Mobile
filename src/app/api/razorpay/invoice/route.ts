import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, amount, currency, product, invoiceId, paymentMethod } = await req.json();
  if (!email || !amount || !currency) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }
  try {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) throw new Error("Brevo API key not set");

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Vroom Visions", email: "vroomvisionsx@gmail.com" },
        to: [{ email }],
        subject: "Your Invoice from Vroom Visions",
        htmlContent: (() => {
          const today = new Date();
          const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          return `<div style="background:#18181b;padding:32px 0;font-family:sans-serif;color:#fff;text-align:center;">
            <div style="font-weight:bold;font-size:2rem;display:block;margin-bottom:12px;">
              <span style='color:#fff;display:inline-block;'>Vroom</span>
              <span style='color:#b993f7;display:inline-block;'>Visions</span>
              <span style='color:#a855f7;display:inline-block;'>X</span>
            </div>
            <h1 style="font-size:1.3rem;font-weight:700;margin-bottom:8px;">Thank You for Your Purchase!</h1>
            <div style="background:#232136;margin:24px auto 16px auto;padding:24px 16px;border-radius:12px;max-width:400px;text-align:left;box-shadow:0 0 12px #a855f7;">
              <div style="margin-bottom:10px;"><b>Product:</b> ${product || 'Vroom Visions Product'}</div>
              <div style="margin-bottom:10px;"><b>Amount:</b> ${(amount/100).toFixed(2)} ${currency}</div>
              <div style="margin-bottom:10px;"><b>Invoice ID:</b> ${invoiceId || 'Auto-generated'}</div>
              <div style="margin-bottom:10px;"><b>Date:</b> ${formattedDate}</div>
              <div style="margin-bottom:10px;"><b>Payment Method:</b> ${paymentMethod || 'Online'}</div>
            </div>
            <div style="margin-top:24px;font-size:0.95rem;color:#bdbdbd;">
              Need help? Contact <a href="mailto:support@vroomvisions.com" style="color:#a855f7;">support@vroomvisions.com</a><br>
              &copy; ${today.getFullYear()} Vroom Visions X. All rights reserved.
            </div>
          </div>`;
        })(),
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to send email");
    }

    return NextResponse.json({ message: "Invoice email sent" }, { status: 200 });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ message: error.message || "Failed to send invoice email" }, { status: 500 });
  }
}
