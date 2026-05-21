import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const formData = await req.formData()

        const fullName = formData.get('fullName') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const position = formData.get('position') as string
        const experienceLevel = formData.get('experienceLevel') as string
        const personalityRating = formData.get('personalityRating') as string
        const portfolioUrl = formData.get('portfolioUrl') as string

        const cvFile = formData.get('cvFile') as File | null
        const portfolioFile = formData.get('portfolioFile') as File | null
        const coverLetterFile = formData.get('coverLetterFile') as File | null

        const attachments = []

        // CV
        if (cvFile) {
            attachments.push({
                filename: cvFile.name,
                content: Buffer.from(await cvFile.arrayBuffer()),
            })
        }

        // Portfolio
        if (portfolioFile) {
            attachments.push({
                filename: portfolioFile.name,
                content: Buffer.from(await portfolioFile.arrayBuffer()),
            })
        }

        // Cover Letter
        if (coverLetterFile) {
            attachments.push({
                filename: coverLetterFile.name,
                content: Buffer.from(await coverLetterFile.arrayBuffer()),
            })
        }

        await resend.emails.send({
            from: 'Roota Careers <onboarding@resend.dev>',

            to: [' admin@roota.nl'], // ganti email kamu

            replyTo: email,

            subject: `New Application - ${fullName}`,

            attachments,

            html: `
        <h2>New Career Application</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experienceLevel}</p>
        <p><strong>Personality Rating:</strong> ${personalityRating}</p>
        <p><strong>Portfolio URL:</strong> ${portfolioUrl}</p>
      `,
        })

        return NextResponse.json({
            success: true,
        })
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        )
    }
}