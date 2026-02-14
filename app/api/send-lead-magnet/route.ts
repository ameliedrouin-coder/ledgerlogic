import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // 1. Send Notification to Admin
        const recipientEmail = process.env.RESEND_NOTIFICATION_EMAIL || 'sebprost@gmail.com';
        console.log(`Sending Lead Magnet notification to: ${recipientEmail} for lead: ${email}`);

        await resend.emails.send({
            from: 'LedgerLogic Leads <onboarding@resend.dev>',
            to: [recipientEmail],
            replyTo: email,
            subject: `New Lead Magnet Download - ${email}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0d9488;">New Lead Magnet Download</h2>
                    <p>A user has requested the "Ultimate Canadian Xero Setup Checklist".</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p style="color: #64748b; font-size: 14px;">
                        Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
                    </p>
                </div>
            `,
        });

        // 2. Send Checklist to User (Placeholder until file exists)
        // Ideally we attach the PDF here. For now, we'll send a welcome email with a link (or just a welcome if no link).
        // Since we don't have the PDF yet, we will just acknowledge the request.
        await resend.emails.send({
            from: 'LedgerLogic Team <onboarding@resend.dev>',
            to: [email],
            subject: 'Your Xero Setup Checklist',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
                    <h2 style="color: #0d9488;">Here is your Xero Checklist</h2>
                    <p>Hi there,</p>
                    <p>Thanks for requesting our <strong>Ultimate Canadian Xero Setup Checklist</strong>.</p>
                    <p>Since we are currently updating the file to the 2026 version, we will email you the PDF as soon as it is live (within 24 hours).</p>
                    <p>In the meantime, feel free to browsing our <a href="https://ledgerlogic.ca/blog">latest guides</a>.</p>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>The LedgerLogic Team</strong></p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead Magnet API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
