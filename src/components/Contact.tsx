'use client'

import { useState } from 'react'
import { contact as contactConfig, site } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-forest-900" aria-label="Contact and inquiry">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <FadeIn>
              <p className="eyebrow text-ember-500 mb-5">{contactConfig.eyebrow}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="headline-md text-cream-50 mb-6">{contactConfig.headline}</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-lg text-cream-200/70 mb-12">{contactConfig.intro}</p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <div>
                  <p className="eyebrow text-cream-200/50 mb-3">Call us</p>
                  <a
                    href={`tel:${site.phone}`}
                    className="text-cream-50 font-sans text-lg hover:text-ember-500 transition-colors duration-200"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-cream-200/50 mb-3">Email us</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-cream-50 font-sans text-lg hover:text-ember-500 transition-colors duration-200"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-cream-200/50 mb-3">Service area</p>
                  <p className="text-cream-200/70 font-sans">{site.serviceArea}</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-cream-200/50 font-sans leading-relaxed max-w-sm">
                    {contactConfig.note}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-charcoal-800 p-10 md:p-12">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center min-h-[320px] text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-700 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ember-500" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-cream-50 font-serif text-xl">{contactConfig.formFields.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field - visually hidden */}
                  <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="honeypot">Leave this empty</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                        {contactConfig.formFields.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 placeholder-cream-200/30 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                        {contactConfig.formFields.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 placeholder-cream-200/30 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                        {contactConfig.formFields.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 placeholder-cream-200/30 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                        {contactConfig.formFields.service.label}
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200 [&>option]:bg-charcoal-800"
                      >
                        <option value="">Select...</option>
                        {contactConfig.formFields.service.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                        {contactConfig.formFields.city.label}
                      </label>
                      <select
                        id="city"
                        name="city"
                        className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200 [&>option]:bg-charcoal-800"
                      >
                        <option value="">Select...</option>
                        {contactConfig.formFields.city.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                        {contactConfig.formFields.date}
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="headcount" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                      {contactConfig.formFields.headcount}
                    </label>
                    <input
                      type="number"
                      id="headcount"
                      name="headcount"
                      min="1"
                      className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 placeholder-cream-200/30 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-medium text-cream-200/70 mb-2">
                      {contactConfig.formFields.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder={contactConfig.formFields.messagePlaceholder}
                      className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600/40 text-cream-50 placeholder-cream-200/30 font-sans text-sm focus:outline-none focus:border-ember-500 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400 font-sans">{contactConfig.formFields.error}</p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    {contactConfig.formFields.submit}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
