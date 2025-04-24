'use client'

interface ContactFormData {
  name: string
  email: string
  phone: string
  business: string
  message: string
}

export async function sendEmail(formData: ContactFormData) {
  try {
    const response = await fetch('https://formspree.io/f/xpzvgwnj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _replyto: formData.email,
        _subject: `Nueva solicitud de partner: ${formData.business}`,
        _to: 'sebastianplasencia313@gmail.com'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending message:', error);
    return { success: false, error: 'Failed to send message' };
  }
} 