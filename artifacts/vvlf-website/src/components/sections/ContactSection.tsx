import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Linkedin, Instagram, MapPin, Phone, Mail, CheckCircle2, Loader2, AlertCircle, ArrowRight, Clock, ExternalLink, Send, CalendarCheck, FileText, Handshake, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";

const applicationSteps = [
  {
    icon: Send,
    title: "Submit Your Application",
    desc: "Fill out the form below — tell us about your idea, your team, and why now.",
    time: "Today",
    color: "bg-[#2563EB]",
    light: "bg-[#2563EB]/10 border-[#2563EB]/20 text-[#2563EB]",
  },
  {
    icon: FileText,
    title: "Application Review",
    desc: "Our team reads every application carefully. No automated rejections.",
    time: "Within 48 hours",
    color: "bg-amber-500",
    light: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    icon: CalendarCheck,
    title: "30-Minute Discovery Call",
    desc: "We schedule a quick call — tell us more about your vision, no pitch needed.",
    time: "Within 1 week",
    color: "bg-purple-500",
    light: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    icon: Handshake,
    title: "Decision & Offer Letter",
    desc: "Selected teams receive a formal offer with full program details and next steps.",
    time: "Within 2 weeks",
    color: "bg-emerald-500",
    light: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    icon: PartyPopper,
    title: "Welcome to VVLF",
    desc: "Day 1 — workspace access, mentor introductions, and your cohort kickoff.",
    time: "Week 3",
    color: "bg-[#22C55E]",
    light: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
];

function WhatHappensNext() {
  return (
    <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 md:p-10">
      <div className="mb-8">
        <p className="text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-2">The Process</p>
        <h3 className="text-2xl font-display font-bold text-[#0B0F19]">What happens after you apply?</h3>
        <p className="text-slate-500 text-sm mt-1">No black box. Here's exactly what to expect.</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-5 bottom-5 w-px bg-slate-200" aria-hidden="true" />

        <div className="space-y-6">
          {applicationSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="flex gap-5 relative"
            >
              {/* Icon dot */}
              <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center shrink-0 relative z-10 shadow-md`}>
                <step.icon className="w-4.5 h-4.5 text-white w-4 h-4" />
              </div>

              <div className="flex-1 pb-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-bold text-[#0B0F19] text-sm">{step.title}</p>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${step.light}`}>
                    {step.time}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

type FormState = "idle" | "loading" | "success" | "error";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const inquiryTypes = [
  { label: "Apply for Incubation", response: "We review within 48 hrs and schedule a call." },
  { label: "Partnership / Collaboration", response: "Our partnerships team responds within 2–3 days." },
  { label: "Program Information", response: "We'll send you a detailed program guide." },
  { label: "Media & Press", response: "Our PR contact responds within 1 business day." },
  { label: "General Inquiry", response: "We reply to every message within 48 hours." },
];

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4121939279376!2d78.25449607450837!3d17.725206983220712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc0b004c3862eb%3A0x4897c6f2b7632512!2sVishnu%20Venture%20Labs%20(VVLF)!5e0!3m2!1sen!2sin!4v1775529375745!5m2!1sen!2sin";
const MAPS_LINK = "https://maps.app.goo.gl/ytbUqKu2xX9ecpjU7";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({ firstName: "", lastName: "", email: "", subject: inquiryTypes[0].label, message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const activeInquiry = inquiryTypes.find((t) => t.label === form.subject) ?? inquiryTypes[0];

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 20) e.message = "At least 20 characters";
    return e;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ve = validate();
    if (Object.keys(ve).length > 0) { setErrors(ve); return; }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 800));
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform", "_blank");
    setFormState("success");
  };

  const handleReset = () => {
    setForm({ firstName: "", lastName: "", email: "", subject: inquiryTypes[0].label, message: "" });
    setErrors({});
    setFormState("idle");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Apply CTA Strip */}
        <FadeIn>
          <div className="bg-[#0B0F19] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative border border-white/10">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{ background: "radial-gradient(ellipse 80% 80% at 100% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
                </span>
                <p className="text-[#22C55E] font-bold text-xs uppercase tracking-widest">Applications Open</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Ready to Build Your Startup?</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Join the next cohort and start building today. Open to all BVRIT students and early-stage founders with an idea worth pursuing.
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <div className="flex items-center gap-2 text-white/50 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" aria-hidden="true" />
                  Review within 48 hours
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" aria-hidden="true" />
                  200+ founders already applied
                </div>
              </div>
            </div>
            <button
              onClick={() => handleChange("subject", "Apply for Incubation")}
              className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Apply for Incubation — scroll to form"
            >
              Apply for Incubation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </FadeIn>

        {/* What happens next timeline */}
        <FadeIn>
          <WhatHappensNext />
        </FadeIn>

        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Form ── */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-2xl font-display font-bold text-[#0B0F19] mb-2">Send Us a Message</h2>
              <p className="text-slate-500 mb-8 text-sm">
                Whether you're a student with an idea, a mentor, or an industry partner — we read every message and reply within 48 hours.
              </p>

              {formState === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-9 h-9 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0F19] mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Thank you, <strong>{form.firstName}</strong>. We'll reach out at <strong>{form.email}</strong>.
                  </p>
                  <p className="text-slate-400 text-xs mb-6">
                    <Clock className="inline w-3.5 h-3.5 mr-1" aria-hidden="true" />
                    {activeInquiry.response}
                  </p>
                  <Button onClick={handleReset} variant="outline" className="rounded-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm" noValidate aria-label="Contact form">

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <p id="inquiry-label" className="text-sm font-semibold text-[#0B0F19]">How can we help?</p>
                    <div role="group" aria-labelledby="inquiry-label" className="flex flex-wrap gap-2">
                      {inquiryTypes.map(({ label }) => (
                        <button
                          key={label}
                          type="button"
                          aria-pressed={form.subject === label}
                          onClick={() => handleChange("subject", label)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 ${
                            form.subject === label
                              ? "bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-[#2563EB]/20"
                              : "bg-white text-slate-600 border-slate-200 hover:border-[#2563EB]/40 hover:text-[#2563EB]"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    {/* Per-type response time */}
                    <p className="flex items-center gap-1.5 text-xs text-[#2563EB] font-medium pt-0.5" aria-live="polite">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {activeInquiry.response}
                    </p>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="First Name"
                      id="firstName"
                      placeholder="e.g. Arjun"
                      required
                      value={form.firstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange("firstName", e.target.value)}
                      error={errors.firstName}
                      className="bg-white"
                    />
                    <FormField
                      label="Last Name"
                      id="lastName"
                      placeholder="e.g. Reddy"
                      required
                      value={form.lastName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange("lastName", e.target.value)}
                      error={errors.lastName}
                      className="bg-white"
                    />
                  </div>

                  {/* Email */}
                  <FormField
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange("email", e.target.value)}
                    error={errors.email}
                    hint="We'll reply to this address only."
                    className="bg-white"
                  />

                  {/* Message */}
                  <FormField
                    label="Message"
                    id="message"
                    isTextarea
                    rows={5}
                    placeholder="Tell us about your startup idea, collaboration proposal, or question..."
                    required
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange("message", e.target.value)}
                    error={errors.message}
                    hint={`${form.message.length} / 20 min`}
                    className="bg-white resize-none"
                  />

                  {formState === "error" && (
                    <div role="alert" className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" /> Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === "loading"}
                    className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-xl shadow-lg shadow-[#2563EB]/25 font-semibold focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                  >
                    {formState === "loading"
                      ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />Sending…</>
                      : "Send Message"
                    }
                  </Button>

                  <p className="text-center text-xs text-slate-400">
                    We reply to every message — usually within 24 hours on working days.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

          {/* ── Info + Map ── */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-6">

              {/* Social cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/vishnu_venture_labs_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow VVLF on Instagram — @vishnuventurelabs"
                  className="block group focus:outline-none focus:ring-2 focus:ring-pink-400/40 rounded-2xl"
                >
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-px rounded-2xl">
                    <div className="bg-white rounded-[15px] p-5 flex items-center gap-4">
                      <Instagram className="w-7 h-7 text-pink-500 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-[#0B0F19] text-sm">Instagram</p>
                        <p className="text-xs text-slate-500">@vishnuventurelabs</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow VVLF on LinkedIn — official company page"
                  className="block group focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/40 rounded-2xl"
                >
                  <div className="bg-[#0A66C2] p-px rounded-2xl">
                    <div className="bg-white rounded-[15px] p-5 flex items-center gap-4">
                      <Linkedin className="w-7 h-7 text-[#0A66C2] shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-[#0B0F19] text-sm">LinkedIn</p>
                        <p className="text-xs text-slate-500">VVLF Official</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact info card */}
              <div className="bg-[#0B0F19] text-white p-7 rounded-3xl shadow-xl">
                <h3 className="font-display font-bold text-lg mb-5">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <MapPin className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Visit Us</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Vishnu Venture Labs Foundation<br />
                        Vishnupur, Narsapur, Medak — 502313
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Phone className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Call Us</p>
                      <a href="tel:+919876543210" className="text-slate-300 text-sm hover:text-white transition-colors focus:outline-none focus:underline">
                        +91 98765 43210
                      </a>
                      <p className="text-slate-500 text-xs">Mon – Sat, 9 am – 6 pm IST</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Mail className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Email Us</p>
                      <a href="mailto:vvlf@bvrit.ac.in" className="text-slate-300 text-sm hover:text-white transition-colors focus:outline-none focus:underline">
                        vvlf@bvrit.ac.in
                      </a>
                      <a href="mailto:rohith.s@bvrit.ac.in" className="block text-slate-300 text-sm hover:text-white transition-colors focus:outline-none focus:underline mt-0.5">
                        rohith.s@bvrit.ac.in
                      </a>
                      <p className="text-slate-500 text-xs mt-1">We reply within 24–48 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Real Google Maps embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="relative w-full h-72">
                  <iframe
                    title="Vishnu Venture Labs Foundation location on Google Maps"
                    src={MAPS_EMBED}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Interactive map showing Vishnu Venture Labs Foundation at BVRIT campus, Narsapur"
                  />
                </div>
                {/* Fallback link */}
                <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center justify-between">
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
                    Vishnupur, Narsapur, Telangana 502313
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Vishnu Venture Labs in Google Maps"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#0B0F19] transition-colors focus:outline-none focus:underline"
                  >
                    Open in Maps
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
