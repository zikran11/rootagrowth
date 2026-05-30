import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const {
            name,
            email,
            company,
            service,
            message
        } = body

        const data = await resend.emails.send({
from: 'Roota Contact <noreply@roota.nl>',

            to: ['zikmazaya@gmail.com'],

            replyTo: email,

            subject: `New message from ${name}`,

            html: `
        <h2>New Contact Form</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
        })

        return NextResponse.json(data)

    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}