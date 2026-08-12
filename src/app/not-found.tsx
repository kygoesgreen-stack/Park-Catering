import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-forest-900 flex items-center justify-center">
      <div className="section-container text-center">
        <p className="eyebrow text-ember-500 mb-5">Lost?</p>
        <h1 className="headline-lg text-cream-50 mb-6">Page Not Found</h1>
        <p className="body-lg text-cream-200/70 max-w-xl mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact/" className="btn-secondary">Contact Us</Link>
        </div>
        <div className="mt-12 flex flex-wrap gap-6 justify-center text-sm font-sans">
          <Link href="/services/wedding-catering/" className="text-cream-200/50 hover:text-cream-50 transition-colors">Wedding Catering</Link>
          <Link href="/services/corporate-event-catering/" className="text-cream-200/50 hover:text-cream-50 transition-colors">Corporate Events</Link>
          <Link href="/services/wildfire-crew-catering/" className="text-cream-200/50 hover:text-cream-50 transition-colors">Fire Crew Catering</Link>
        </div>
      </div>
    </main>
  )
}
