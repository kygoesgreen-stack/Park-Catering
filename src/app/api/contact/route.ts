import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const required = ['name', 'email', 'eventType']
    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    console.log('[Park Catering] Inquiry received:', {
      name: body.name,
      email: body.email,
      phone: body.phone || '—',
      eventType: body.eventType,
      date: body.date || '—',
      headcount: body.headcount || '—',
      message: body.message?.slice(0, 200) || '—',
      timestamp: new Date().toISOString(),
    })

    // Wire to Resend when ready:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'inquiries@parkcateringmt.com',
    //   to: 'hello@parkcateringmt.com',
    //   subject: `New inquiry: ${body.eventType} — ${body.name}`,
    //   html: `<p>...formatted inquiry...</p>`,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Park Catering] Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}