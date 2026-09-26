"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/data/companyData";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import PhoneInputWithCountry from "@/components/PhoneInputWithCountry";
import { validateCountryPhone, COUNTRY_LIST } from "@/utils/phoneUtils";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  AlertCircle,
  UserCheck,
  Building2,
} from "lucide-react";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryIso: "IN",
    message: "",
  });

  const validateField = (fieldName, value) => {
    let err = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fieldName === "name") {
      if (!value || value.trim().length < 2) {
        err = "Please enter your name (at least 2 characters).";
      }
    } else if (fieldName === "email") {
      if (!value || !emailRegex.test(value.trim())) {
        err = "Please enter a valid email address.";
      }
    } else if (fieldName === "phone") {
      const phoneErr = validateCountryPhone(value, form.countryIso);
      if (phoneErr) {
        err = phoneErr;
      }
    } else if (fieldName === "message") {
      if (!value || value.trim().length < 5) {
        err = "Please enter your message.";
      }
    }

    setErrors((prev) => ({ ...prev, [fieldName]: err }));
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const newTouched = {
      name: true,
      email: true,
      phone: true,
      message: true,
    };
    setTouched(newTouched);

    const nameErr = validateField("name", form.name);
    const emailErr = validateField("email", form.email);
    const phoneErr = validateField("phone", form.phone);
    const messageErr = validateField("message", form.message);

    if (nameErr || emailErr || phoneErr || messageErr) {
      return;
    }

    setLoading(true);

    const countryObj = COUNTRY_LIST.find((c) => c.iso2 === (form.countryIso || "IN").toUpperCase()) || { dialCode: "+91" };
    const dialCode = countryObj.dialCode || "+91";
    const formattedPhone = form.phone.trim().startsWith("+")
      ? form.phone.trim()
      : `${dialCode} ${form.phone.trim()}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: formattedPhone,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        if (data.errors) {
          setErrors((prev) => ({ ...prev, ...data.errors }));
        }
        setErrorMessage("We couldn’t send your enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setErrorMessage("We couldn’t send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const GENTLE_EASE = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen pb-20">
      {/* Title Banner */}
      <PageHeaderBanner
        title="Contact us"
        breadcrumb="Contact us"
        bgImage="/images/contact-titile.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-12">
        {/* Main Grid: Left Column (2 Stacked Cards), Right Column (Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Card 1 (Top) & Card 2 (Bottom) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: General Manager */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: GENTLE_EASE }}
              className="bg-white border border-[#E5E5E2] rounded-3xl p-7 space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 border-b border-[#E5E5E2] pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBE87E] text-[#1A1A1A] flex items-center justify-center shrink-0 shadow-xs">
                  <UserCheck className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <span className="text-xs font-label font-bold text-[#555555] uppercase tracking-wider block">
                    {COMPANY_INFO.contact.designation}
                  </span>
                  <h2 className="text-xl font-headline font-black text-[#1A1A1A]">
                    {COMPANY_INFO.contact.generalManager}
                  </h2>
                </div>
              </div>

              <div className="space-y-3 font-body text-sm pt-1">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#555555] shrink-0" />
                  <div>
                    <span className="text-xs text-[#555555] block font-label font-bold">Email:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      title="Email boCHE Apparels"
                      className="text-[#1A1A1A] font-bold hover:underline"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#555555] shrink-0" />
                  <div>
                    <span className="text-xs text-[#555555] block font-label font-bold">Phone Number:</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      title="Call boCHE Apparels"
                      className="text-[#1A1A1A] font-bold hover:underline"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Facility Address & Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: GENTLE_EASE }}
              className="bg-white border border-[#E5E5E2] rounded-3xl p-7 space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 border-b border-[#E5E5E2] pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBE87E] text-[#1A1A1A] flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <span className="text-xs font-label font-bold text-[#555555] uppercase tracking-wider block">
                    Manufacturing Facility
                  </span>
                  <h2 className="text-xl font-headline font-black text-[#1A1A1A]">
                    Address & working hours
                  </h2>
                </div>
              </div>

              <div className="space-y-3 font-body text-sm pt-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#555555] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-[#555555] block font-label font-bold">Facility Address:</span>
                    <p className="text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed">
                      {COMPANY_INFO.contact.addressLines.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#F0F0EE]">
                  <Clock className="w-4 h-4 text-[#555555] shrink-0" />
                  <div>
                    <span className="text-xs text-[#555555] block font-label font-bold">Working Hours:</span>
                    <p className="text-xs sm:text-sm text-[#1A1A1A] font-bold">
                      {COMPANY_INFO.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: GENTLE_EASE }}
            className="lg:col-span-7 bg-white border border-[#E5E5E2] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6"
          >
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A]">
                Get in touch
              </h2>
              <p className="text-sm font-body text-[#555555]">
                Fill out this form for booking a consultant advising session
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-12 text-center space-y-5 font-body"
              >
                <div className="w-16 h-16 bg-[#FBE87E] text-[#1A1A1A] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A]">
                  Thank you for contacting us!
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Our consultants will get back to you shortly.
                </p>

                <div className="pt-3 font-label">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", countryIso: "IN", message: "" });
                    }}
                    className="btn-circle-hover font-black px-7 py-3 rounded-full text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Submit another request</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-sm font-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Your name */}
                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.name && touched.name)}
                      className={`w-full h-12 bg-[#F9F9F9] border rounded-xl px-4 text-sm text-[#1A1A1A] placeholder-[#999999] transition-all focus:outline-none ${
                        errors.name && touched.name
                          ? "border-red-500 bg-red-50/20"
                          : "border-[#E5E5E2] focus:border-[#FBE87E] focus:bg-white"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Enter your email */}
                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                      Enter your email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.email && touched.email)}
                      className={`w-full h-12 bg-[#F9F9F9] border rounded-xl px-4 text-sm text-[#1A1A1A] placeholder-[#999999] transition-all focus:outline-none ${
                        errors.email && touched.email
                          ? "border-red-500 bg-red-50/20"
                          : "border-[#E5E5E2] focus:border-[#FBE87E] focus:bg-white"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Enter your phone number */}
                <div>
                  <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Enter your phone number <span className="text-red-500">*</span>
                  </label>
                  <PhoneInputWithCountry
                    value={typeof form.phone === "string" ? form.phone : ""}
                    countryIso={form.countryIso}
                    onChange={(val) => {
                      const strVal = typeof val === "string" ? val : (val && val.target ? val.target.value : "");
                      const safeStr = typeof strVal === "string" ? safeStr : "";
                      setForm((prev) => ({ ...prev, phone: safeStr }));
                      if (touched.phone) validateField("phone", safeStr);
                    }}
                    onCountryChange={(iso) => setForm((prev) => ({ ...prev, countryIso: iso }))}
                    error={errors.phone}
                    touched={touched.phone}
                  />
                </div>

                {/* Your message */}
                <div>
                  <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Your message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.message && touched.message)}
                    className={`w-full bg-[#F9F9F9] border rounded-xl p-4 text-sm text-[#1A1A1A] placeholder-[#999999] resize-none transition-all focus:outline-none ${
                      errors.message && touched.message
                        ? "border-red-500 bg-red-50/20"
                        : "border-[#E5E5E2] focus:border-[#FBE87E] focus:bg-white"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="text-xs text-red-700 font-bold bg-red-50 p-3.5 rounded-xl border border-red-200 flex items-center gap-2 font-body"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit message button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-circle-hover font-black px-8 py-4 rounded-full text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Submitting..." : "Submit message"}</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Full Width Map Section below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: GENTLE_EASE }}
          className="bg-white border border-[#E5E5E2] rounded-3xl p-4 space-y-3 shadow-sm"
        >
          <div className="flex items-center justify-between px-3 pt-2 font-label">
            <span className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-[#1A1A1A]" />
              Factory Location Map
            </span>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${COMPANY_INFO.contact.coordinates.lat},${COMPANY_INFO.contact.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Get Directions to boCHE Apparels on Google Maps"
              className="bg-[#FBE87E] hover:bg-[#F5E060] text-[#1A1A1A] font-extrabold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get directions</span>
            </a>
          </div>
          <div className="h-[440px] w-full rounded-2xl overflow-hidden border border-[#E5E5E2] relative bg-[#F3F3F1]">
            <iframe
              title="boCHE Apparels Tirupur Factory Location Map"
              src={COMPANY_INFO.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
