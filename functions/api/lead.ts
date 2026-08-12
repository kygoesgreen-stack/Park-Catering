// Cloudflare Pages Function: /api/lead
// Accepts POST from the contact form and forwards to n8n webhook.
// This file runs in the Cloudflare Pages runtime, not Next.js.

interface Env {
  N8N_WEBHOOK_URL: string;
}

interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  city?: string;
  date?: string;
  headcount?: string;
  message?: string;
  honeypot?: string;
  pagePath?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { N8N_WEBHOOK_URL } = context.env;

  if (!N8N_WEBHOOK_URL) {
    console.error("N8N_WEBHOOK_URL environment variable is not set");
    return new Response(
      JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: LeadData;
  try {
    body = await context.request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Honeypot check: if filled, silently succeed without forwarding
  if (body.honeypot) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate required fields
  if (!body.name || !body.phone || !body.service) {
    const missing: string[] = [];
    if (!body.name) missing.push("name");
    if (!body.phone) missing.push("phone");
    if (!body.service) missing.push("service");
    return new Response(
      JSON.stringify({ error: `Missing required fields: ${missing.join(", ")}` }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Build clean payload for n8n
  const payload = {
    name: body.name,
    email: body.email || "",
    phone: body.phone,
    service: body.service,
    city: body.city || "",
    date: body.date || "",
    headcount: body.headcount || "",
    message: body.message || "",
    pagePath: body.pagePath || "",
    submittedAt: new Date().toISOString(),
  };

  try {
    const webhookRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      console.error(`n8n webhook returned status ${webhookRes.status}`);
      return new Response(
        JSON.stringify({ error: "Failed to submit. Please try again or call us directly." }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to forward to n8n webhook:", err);
    return new Response(
      JSON.stringify({ error: "Failed to submit. Please try again or call us directly." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
}
