"use client"
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { PhoneCallIcon, TimerIcon } from 'lucide-react'
import Link from 'next/link'

/* ── Contact info items ── */
const contactInfo = [
    {
        icon: (
            <MdLocationOn />
        ),
        label: "Studio Address",
        value: "Shimla, Himachal Pradesh, India",
        href: "https://maps.google.com/?q=Shimla,Himachal+Pradesh",
    },
    {
        icon: (
            <PhoneCallIcon />
        ),
        label: "Phone",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
    },
    {
        icon: (
            <MdEmail />
        ),
        label: "Email",
        value: "mahadevproductionsshimla@gmail.com",
        href: "mailto:mahadevproductionsshimla@gmail.com",
    },
    {
        icon: (
            <TimerIcon />
        ),
        label: "Working Hours",
        value: "Mon – Sat, 10 AM – 6 PM",
        href: null,
    },
]

const services = [
    "Documentary", "Short Film", "Ad Film", "Web Series",
    "Music Video", "Advertisement", "Corporate Film", "Other",
]
const socials = [
    {
        icon: <FaFacebook className="w-4 h-4" />,
        label: "Facebook",
        href: "https://www.facebook.com/wowhimachal",
        color: "hover:bg-blue-500/10 hover:border-blue-400/40 hover:text-blue-400",
    },
    {
        icon: <FaInstagram className="w-4 h-4" />,
        label: "Instagram",
        href: "https://www.instagram.com/wowhimachal",
        color: "hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400",
    },
    {
        icon: <FaInstagram className="w-4 h-4" />,
        label: "Instagram",
        href: "https://www.instagram.com/rhythmsmystic8",
        color: "hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400",
    },
    {
        icon: <FaYoutube className="w-4 h-4" />,
        label: "YouTube",
        href: "https://www.youtube.com/@MahadevStudios",
        color: "hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400",
    },
]
/* ── Input field ── */
function Field({ label, error, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">{label}</label>
            {children}
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    )
}

const inputClass = `w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm
  placeholder:text-gray-600 focus:outline-none focus:border-orange-400/60 focus:bg-white/[0.07]
  transition-all duration-200`

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    useEffect(() => {
        AOS.init({ once: true, easing: 'ease-out-cubic', offset: 40 })
    }, [])

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email.trim()) e.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: value }))
        if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setStatus('sending')
        /* Replace with your API call / EmailJS / Formspree etc. */
        await new Promise(r => setTimeout(r, 1800))
        setStatus('sent')
    }

    return (
        <div className="min-h-screen w-full bg-slate-950 overflow-x-hidden">

            {/* ══ HERO ═════════════════════════════════════════════════ */}
            <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.18),transparent)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />

                {/* Decorative grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />

                <div data-aos="fade-up" data-aos-duration="900" className="relative z-10 text-center px-6">
                    <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                        Get In Touch
                    </p>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                        Let's <span className="text-orange-400">Create</span>
                    </h1>
                    <p className="mt-5 text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Have a project in mind? We'd love to bring your vision to life. Reach out and let's start the conversation.
                    </p>
                </div>
            </section>

            {/* ══ MAIN CONTENT ════════════════════════════════════════ */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* ── LEFT: Contact info ── */}
                    <div className="lg:col-span-2 flex flex-col gap-8">

                        <div data-aos="fade-right" data-aos-duration="700">
                            <h2 className="text-2xl font-extrabold text-white mb-1">Contact Information</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our team is based in Shimla and available Monday through Saturday.
                                We typically respond within 24 hours.
                            </p>
                        </div>

                        {/* Info cards */}
                        <div className="flex flex-col gap-4">
                            {contactInfo.map((item, i) => (
                                <div
                                    key={i}
                                    data-aos="fade-right"
                                    data-aos-duration="600"
                                    data-aos-delay={i * 80}
                                >
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10
                        hover:border-orange-400/30 hover:bg-white/[0.06] transition-all duration-200 group"
                                        >
                                            <InfoIcon>{item.icon}</InfoIcon>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">{item.label}</p>
                                                <p className="text-white font-semibold text-sm group-hover:text-orange-300 transition-colors">{item.value}</p>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                            <InfoIcon>{item.icon}</InfoIcon>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">{item.label}</p>
                                                <p className="text-white font-semibold text-sm">{item.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

                        {/* Social links */}
                        <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="350">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Follow Us</p>
                            <div className="flex gap-3 mt-1">
                                {socials.map((s, i) => (
                                    <Link
                                        key={s.label + i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className={`w-9 h-9 rounded-xl flex items-center justify-center
                    bg-white/5 border border-white/10 text-gray-400
                    transition-all duration-200 ${s.color}`}
                                    >
                                        {s.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Form ── */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="lg:col-span-3"
                    >
                        {status === 'sent' ? (
                            /* Success state */
                            <div className="flex flex-col items-center justify-center text-center py-20 px-8
                bg-white/[0.03] border border-white/10 rounded-2xl gap-5">
                                <div className="w-16 h-16 rounded-full bg-orange-500/15 border border-orange-400/30
                  flex items-center justify-center text-orange-400 text-2xl">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-extrabold text-white">Message Sent!</h3>
                                <p className="text-gray-400 max-w-sm leading-relaxed">
                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                                    className="mt-2 px-6 py-2.5 rounded-full border border-white/10 text-sm font-semibold
                    text-gray-300 hover:border-orange-400/40 hover:text-orange-400 transition-all duration-200"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6"
                            >
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Send a Message</h2>
                                    <p className="text-gray-500 text-sm mt-1">Fill out the form below and we'll be in touch shortly.</p>
                                </div>

                                {/* Name + Email */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <Field label="Your Name *" error={errors.name}>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Rahul Sharma"
                                            className={`${inputClass} ${errors.name ? 'border-red-500/50' : ''}`}
                                        />
                                    </Field>
                                    <Field label="Email Address *" error={errors.email}>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="rahul@example.com"
                                            className={`${inputClass} ${errors.email ? 'border-red-500/50' : ''}`}
                                        />
                                    </Field>
                                </div>

                                {/* Phone + Service */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <Field label="Phone Number">
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className={inputClass}
                                        />
                                    </Field>
                                    <Field label="Service Interested In">
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            className={`${inputClass} cursor-pointer`}
                                        >
                                            <option value="" disabled className="bg-slate-900">Select a service…</option>
                                            {services.map(s => (
                                                <option key={s} value={s} className="bg-slate-900">{s}</option>
                                            ))}
                                        </select>
                                    </Field>
                                </div>

                                {/* Message */}
                                <Field label="Your Message *" error={errors.message}>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your project — what you're envisioning, your timeline, and any details that would help us understand your needs…"
                                        className={`${inputClass} resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                                    />
                                </Field>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full sm:w-auto sm:self-end inline-flex items-center justify-center gap-2
                    px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-sm
                    hover:bg-orange-400 active:scale-95 transition-all duration-200
                    shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                            </svg>
                                            Sending…
                                        </>
                                    ) : (
                                        <>Send Message <span>→</span></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

/* Small helper */
function InfoIcon({ children }) {
    return (
        <div className="w-9 h-9 shrink-0 rounded-lg bg-orange-500/10 border border-orange-400/20
      flex items-center justify-center text-orange-400">
            {children}
        </div>
    )
}