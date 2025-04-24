'use client';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  try {
    // For static export, we'll need to use an external email service API endpoint
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
} 