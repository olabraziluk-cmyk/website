import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";
import { businessInfo, openingHours } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Visit Us — Ola Brazil Bournemouth",
  description:
    "Find us at 339 Wimborne Rd, Bournemouth BH9 2AD. Call 01202 023216 or WhatsApp us. Open 7 days a week.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
          Visit Us
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          We&apos;d love to see you
        </p>
      </section>

      {/* Contact Details + Map */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[var(--color-text)]">Address</h3>
                <p className="text-[var(--color-muted)]">
                  {businessInfo.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[var(--color-text)]">Phone</h3>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-[var(--color-accent)] hover:underline cursor-pointer"
                >
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-[var(--color-whatsapp)] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[var(--color-text)]">WhatsApp</h3>
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline cursor-pointer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  Instagram
                </h3>
                <a
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline cursor-pointer"
                >
                  @{businessInfo.instagram}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <div>
                <h3 className="font-bold text-[var(--color-text)]">Facebook</h3>
                <a
                  href={businessInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline cursor-pointer"
                >
                  Ola Brazil
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.0!2d-1.857!3d50.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1c5a3b5c9af%3A0x9a4f7a5d0a5b9c8e!2s339%20Wimborne%20Rd%2C%20Bournemouth%20BH9%202AD!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ola Brazil location on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              Opening Hours
            </h2>
          </div>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 shadow-sm">
            {openingHours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <span className="font-medium text-[var(--color-text)]">
                  {item.day}
                </span>
                <span className="text-[var(--color-muted)]">{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-muted)] mt-4">
            Hours may vary on public holidays. Please call ahead to confirm.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] text-center mb-8">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
