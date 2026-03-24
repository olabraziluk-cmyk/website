import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { businessInfo, openingHours } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Visit Us — Ola Brazil Bournemouth",
  description:
    "Find us at 339 Wimborne Rd, Bournemouth BH9 2AD. Call 01202 023216 or WhatsApp us. Open 7 days a week.",
};

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: businessInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`,
    color: "bg-primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: businessInfo.phone,
    href: `tel:${businessInfo.phone}`,
    color: "bg-accent",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: businessInfo.whatsappLink,
    color: "bg-whatsapp",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-block text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Visit <span className="text-secondary">Us</span>
          </h1>
          <p className="text-xl text-white/70">We&apos;d love to see you</p>
        </div>
      </section>

      {/* Contact Cards — Bold color blocks */}
      <section className="section-block bg-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Address" ? "_blank" : undefined}
                rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                className="group rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className={`${item.color} p-8 text-center`}>
                  <item.icon className="w-10 h-10 text-white mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="bg-white p-6 text-center">
                  <p className="text-sm text-muted mb-1">{item.label}</p>
                  <p className="font-bold text-text">{item.value}</p>
                </div>
                <div className="h-1 bg-secondary" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <span className="font-semibold text-sm">@{businessInfo.instagram}</span>
            </a>
            <a
              href={businessInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span className="font-semibold text-sm">Ola Brazil</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.0!2d-1.857!3d50.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1c5a3b5c9af%3A0x9a4f7a5d0a5b9c8e!2s339%20Wimborne%20Rd%2C%20Bournemouth%20BH9%202AD!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ola Brazil location"
            />
          </div>
        </div>
      </section>

      {/* Opening Hours + Contact Form side by side */}
      <section className="section-block bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-text">Opening Hours</h2>
            </div>
            <div className="bg-bg rounded-2xl overflow-hidden">
              {openingHours.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-4 px-6 ${
                    i % 2 === 0 ? "bg-bg" : "bg-white"
                  }`}
                >
                  <span className="font-semibold text-text">{item.day}</span>
                  <span className="text-muted font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted mt-4">
              Hours may vary on public holidays. Please call ahead to confirm.
            </p>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
