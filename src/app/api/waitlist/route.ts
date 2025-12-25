import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingEmail, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Insert email into database
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (insertError) {
      console.error("Database insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to save email" },
        { status: 500 }
      );
    }

    // Send acknowledgement email
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "FireKiwi <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to the FireKiwi Waitlist! 🎉",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
              <div style="background-color: #0B0B0D; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: #E6FF08; margin: 0; font-size: 32px;">FireKiwi</h1>
              </div>
              <div style="background-color: white; padding: 40px; border-radius: 0 0 8px 8px;">
                <h2 style="color: #0B0B0D; margin-top: 0;">You're on the list! 🎉</h2>
                <p style="color: #666; font-size: 16px;">
                  Thanks for joining the FireKiwi waitlist! We're excited to have you on board.
                </p>
                <p style="color: #666; font-size: 16px;">
                  We'll notify you as soon as we launch. In the meantime, get ready to transform your photos into eBay listings with AI.
                </p>
                <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
                  <p style="margin: 0; color: #666; font-size: 14px;">
                    <strong>What's next?</strong><br>
                    We'll send you an email when FireKiwi is ready. No spam, just launch updates.
                  </p>
                </div>
                <p style="color: #999; font-size: 14px; margin-top: 30px;">
                  Best regards,<br>
                  The FireKiwi Team
                </p>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}

