'use server'

import nodemailer from 'nodemailer'

interface FormData {
  name: string
  email: string
  phone: string
  business: string
  message: string
}

export async function sendEmail(formData: FormData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sebastianplasencia313@gmail.com',
    subject: `Nueva solicitud de partner: ${formData.business}`,
    text: `
      Nombre: ${formData.name}
      Email: ${formData.email}
      Teléfono: ${formData.phone}
      Negocio: ${formData.business}
      
      Mensaje:
      ${formData.message}
    `,
    html: `
      <h2>Nueva solicitud de partner</h2>
      <p><strong>Negocio:</strong> ${formData.business}</p>
      <p><strong>Nombre:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Teléfono:</strong> ${formData.phone}</p>
      <h3>Mensaje:</h3>
      <p>${formData.message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
} 