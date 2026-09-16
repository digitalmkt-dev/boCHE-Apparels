"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/data/companyData";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import PhoneInputWithCountry from "@/components/PhoneInputWithCountry";
import { validateCountryPhone, normalizePhoneInput } from "@/utils/phoneUtils";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Navigation, AlertCircle, Home } from "lucide-react";

const PRODUCT_CATEGORY_MAP = {
  "Men’s Wear": [
    "T-shirts",
    "Polo Shirts",
    "Sleeveless Tops",
    "Long-sleeve Tops",
    "Hoodies & Sweatshirts",
    "Shorts",
    "Joggers & Track Pants",
    "Co-ord Sets",
    "Sportswear",
    "Jackets",
    "Tracksuits",
    "Other",
  ],
  "Women’s Wear": [
    "T-shirts",
    "Polo Shirts",
    "Sleeveless Tops",
    "Long-sleeve Tops",
    "Hoodies & Sweatshirts",
    "Shorts",
    "Joggers & Track Pants",
    "Co-ord Sets",
    "Tops",
    "Dresses",
    "Skirts",
    "Leggings",
    "Sportswear",
    "Jackets",
    "Tracksuits",
    "Other",
  ],
  "Kids’ Wear": [
    "T-shirts",
    "Polo Shirts",
    "Sleeveless Tops",
    "Long-sleeve Tops",
    "Hoodies & Sweatshirts",
    "Shorts",
    "Joggers & Track Pants",
    "Co-ord Sets",
    "Dresses",
    "Skirts",
    "Leggings",
    "Sportswear",
    "Jackets",
    "Tracksuits",
    "Other",
  ],
  "Baby & Toddler Wear": [
    "T-shirts",
    "Polo Shirts",
    "Sleeveless Tops",
    "Long-sleeve Tops",
    "Hoodies & Sweatshirts",
    "Shorts",
    "Joggers",
    "Co-ord Sets",
    "Rompers",
    "Dresses",
    "Leggings",
    "Other",
  ],
};

const COMBINED_PRODUCT_TYPES = Array.from(
  new Set(Object.values(PRODUCT_CATEGORY_MAP).flat())
);

const getAvailableProductTypes = (category) => {
  if (!category) return [];
  if (PRODUCT_CATEGORY_MAP[category]) {
    return PRODUCT_CATEGORY_MAP[category];
  }
  return COMBINED_PRODUCT_TYPES;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    countryIso: "IN",
    countryCode: "+91",
    phone: "",
    company: "",
    enquiryType: "",
    productCategory: "",
    productTypes: [],
    productType: "",
    estimatedQuantity: "",
    message: "",
  });

  const handleProductTypeToggle = (type) => {
    setForm((prev) => {
      const current = prev.productTypes || [];
      const updated = current.includes(type)
        ? current.filter((t) => t !== type)
        : [...current, type];
      return {
        ...prev,
        productTypes: updated,
        productType: updated.join(", "),
      };
    });
  };

  const validateField = (fieldName, value, updatedForm = form) => {
    let error = "";
    const val = (value || "").trim();

    if (fieldName === "name") {
      if (!val) {
        error = "Full Name is required.";
      } else if (val.length < 2) {
        error = "Name must be at least 2 characters long.";
      }
    }

    if (fieldName === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) {
        error = "Email address is required.";
      } else if (!emailRegex.test(val)) {
        error = "Please enter a valid email address (e.g. name@company.com).";
      }
    }

    if (fieldName === "phone") {
      if (val) {
        error = validateCountryPhone(val, updatedForm.countryCode, updatedForm.countryIso);
      }
    }

    if (fieldName === "enquiryType") {
      if (!val) {
        error = "Please select an enquiry type.";
      }
    }

    if (fieldName === "message") {
      if (!val) {
        error = "Message details are required.";
      } else if (val.length < 10) {
        error = "Message must be at least 10 characters long.";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "productCategory") {
        const available = getAvailableProductTypes(value);
        const filteredTypes = (prev.productTypes || []).filter((t) =>
          available.includes(t)
        );
        updated.productTypes = filteredTypes;
        updated.productType = filteredTypes.join(", ");
      }

      if ((name === "countryIso" || name === "countryCode") && touched.phone) {
        const phoneError = validateField("phone", updated.phone, updated);
        setErrors((prevErr) => ({ ...prevErr, phone: phoneError }));
      } else if (touched[name]) {
        const error = validateField(name, value, updated);
        setErrors((prevErr) => ({ ...prevErr, [name]: error }));
      }

      return updated;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    const newTouched = {
      name: true,
      email: true,
      phone: true,
      company: true,
      enquiryType: true,
      message: true,
    };

    ["name", "email", "phone", "enquiryType", "message"].forEach((field) => {
      const err = validateField(field, form[field]);
      if (err) {
        newErrors[field] = err;
      }
    });

    setErrors(newErrors);
    setTouched(newTouched);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const normalized = normalizePhoneInput(form.phone, form.countryIso, form.countryCode);
    const e164Phone = form.phone.trim() ? (normalized.e164 || `${form.countryCode}${form.phone.trim()}`) : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(10000),
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: e164Phone,
          company: form.company,
          enquiryType: form.enquiryType,
          productCategory: form.productCategory,
          productType: form.productType || (form.productTypes || []).join(", "),
          productTypes: form.productTypes,
          estimatedQuantity: form.estimatedQuantity,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        if (data.errors) {
          setErrors((prev) => ({ ...prev, ...data.errors }));
        }
        setErrorMessage(data.error || "Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred while sending your inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Facility Address",
      content: (
        <p className="text-xs text-[#555555] mt-0.5 leading-relaxed font-body">
          {COMPANY_INFO.contact.address}
        </p>
      ),
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      content: (
        <p className="text-xs text-[#555555] mt-0.5 font-mono">
          <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-[#1A1A1A] font-bold hover:underline">
            {COMPANY_INFO.contact.phone}
          </a>
        </p>
      ),
    },
    {
      icon: Mail,
      title: "Email Address",
      content: (
        <p className="text-xs text-[#555555] mt-0.5">
          <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#1A1A1A] font-bold hover:underline">
            {COMPANY_INFO.contact.email}
          </a>
        </p>
      ),
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: (
        <p className="text-xs text-[#555555] mt-0.5">
          {COMPANY_INFO.contact.workingHours}
        </p>
      ),
    },
  ];

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen pb-16">
      {/* Title Banner with Dark Secondary Overlay matching inner pages */}
      <PageHeaderBanner
        title="Contact Our Factory"
        subtitle="Have questions about production capacity, MOQ, fabric sourcing, or want to schedule a physical factory audit? Our merchandising team is at your service."
        breadcrumb="Contact Us"
        bgImage="/images/contact-titile.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#E5E5E2] rounded-3xl p-7 space-y-6 shadow-sm"
            >
              <h2 className="text-xl font-headline font-bold text-[#1A1A1A] border-l-4 border-[#FBE87E] pl-3">
                Factory Headquarters & Contact Info
              </h2>

              <div className="space-y-5 text-sm font-body">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FBE87E] text-[#1A1A1A] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A1A1A] font-label">{item.title}</h3>
                        {item.content}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Interactive Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#E5E5E2] rounded-3xl p-4 space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between px-2 pt-1 font-label">
                <span className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#1A1A1A]" />
                  Tirupur Textile Hub Location
                </span>
                <span className="text-[11px] bg-[#FBE87E] text-[#1A1A1A] font-extrabold px-2.5 py-0.5 rounded-lg">
                  GPS Verified
                </span>
              </div>
              <div className="h-60 w-full rounded-2xl overflow-hidden border border-[#E5E5E2] relative bg-[#F3F3F1]">
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

          {/* Right Column: Direct Contact Form (Sticky while scrolling) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white border border-[#E5E5E2] rounded-3xl p-8 shadow-sm h-fit lg:sticky lg:top-28 z-20"
          >
            <h2 className="text-2xl font-headline font-bold text-[#1A1A1A] mb-1">Send an Enquiry</h2>
            <p className="text-xs font-body text-[#555555] mb-6">Share your requirements, and our team will get back to you.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-12 text-center space-y-5 font-body"
              >
                <div className="w-14 h-14 bg-[#FBE87E] text-[#1A1A1A] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-[#1A1A1A]">Enquiry Sent Successfully!</h3>
                <p className="text-xs text-[#555555] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to boCHE Apparels. We will contact you at <span className="text-[#1A1A1A] font-bold">{form.email}</span> shortly.
                </p>

                <div className="pt-2 font-label flex items-center justify-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#FBE87E] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#FBE87E] font-extrabold px-6 py-3 rounded-full text-xs tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <Home className="w-4 h-4" />
                    <span>GO TO HOME PAGE</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-sm font-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.name && touched.name)}
                      className={`w-full h-[42px] bg-[#F9F9F9] border rounded-xl px-3.5 text-sm text-[#1A1A1A] placeholder-[#999999] transition-all focus:outline-none ${
                        errors.name && touched.name
                          ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-[#E5E5E2] focus:border-[#FBE87E]"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-body">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.email && touched.email)}
                      className={`w-full h-[42px] bg-[#F9F9F9] border rounded-xl px-3.5 text-sm text-[#1A1A1A] placeholder-[#999999] transition-all focus:outline-none ${
                        errors.email && touched.email
                          ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-[#E5E5E2] focus:border-[#FBE87E]"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-body">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                      Company / Label Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Brand Name"
                      value={form.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full h-[42px] bg-[#F9F9F9] border border-[#E5E5E2] rounded-xl px-3.5 text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FBE87E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                      Phone Number
                    </label>
                    <PhoneInputWithCountry
                      value={form.phone}
                      countryCode={form.countryCode}
                      countryIso={form.countryIso}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.phone}
                      touched={touched.phone}
                    />
                  </div>
                </div>

                {/* Enquiry Type Field (Positioned First before product fields) */}
                <div>
                  <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.enquiryType && touched.enquiryType)}
                    className={`w-full h-[42px] bg-[#F9F9F9] border rounded-xl px-3.5 text-sm text-[#1A1A1A] transition-all focus:outline-none ${
                      errors.enquiryType && touched.enquiryType
                        ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#E5E5E2] focus:border-[#FBE87E]"
                    }`}
                  >
                    <option value="">Select enquiry type</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Request a Quotation">Request a Quotation</option>
                    <option value="Sample Development">Sample Development</option>
                    <option value="Bulk Manufacturing">Bulk Manufacturing</option>
                    <option value="Factory Visit Request">Factory Visit Request</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.enquiryType && touched.enquiryType && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-body">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                      <span>{errors.enquiryType}</span>
                    </p>
                  )}
                </div>

                {/* Product Category & Target Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                      Product Category
                    </label>
                    <select
                      name="productCategory"
                      value={form.productCategory}
                      onChange={handleChange}
                      className="w-full h-[42px] bg-[#F9F9F9] border border-[#E5E5E2] rounded-xl px-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FBE87E] transition-colors"
                    >
                      <option value="">Select category</option>
                      <option value="Men’s Wear">Men’s Wear</option>
                      <option value="Women’s Wear">Women’s Wear</option>
                      <option value="Kids’ Wear">Kids’ Wear</option>
                      <option value="Baby & Toddler Wear">Baby & Toddler Wear</option>
                      <option value="Multiple Categories">Multiple Categories</option>
                      <option value="Other / Not Sure">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                      Target Volume
                    </label>
                    <select
                      name="estimatedQuantity"
                      value={form.estimatedQuantity}
                      onChange={handleChange}
                      className="w-full h-[42px] bg-[#F9F9F9] border border-[#E5E5E2] rounded-xl px-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FBE87E] transition-colors"
                    >
                      <option value="">Select volume</option>
                      <option value="Sampling Only">Sampling Only</option>
                      <option value="Below 500 Pieces">Below 500 Pieces</option>
                      <option value="500–999">500–999</option>
                      <option value="1,000–4,999">1,000–4,999</option>
                      <option value="5,000–9,999">5,000–9,999</option>
                      <option value="10,000+">10,000+</option>
                      <option value="Not Decided">Not Decided</option>
                    </select>
                  </div>
                </div>

                {/* Multi-Select Product Type Pills (Shown ONLY after Product Category selection) */}
                {form.productCategory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1.5">
                      Product Type <span className="text-[#777777] font-normal">(Select all that apply)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {getAvailableProductTypes(form.productCategory).map((type) => {
                        const isSelected = (form.productTypes || []).includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleProductTypeToggle(type)}
                            className={`px-3 py-1.5 rounded-full text-xs font-label font-bold border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#FBE87E] text-[#1A1A1A] border-[#1A1A1A] shadow-xs"
                                : "bg-[#F9F9F9] text-[#555555] border-[#E5E5E2] hover:border-[#1A1A1A]"
                            }`}
                          >
                            {isSelected ? `✓ ${type}` : `+ ${type}`}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-xs font-label font-bold text-[#1A1A1A] mb-1">
                    Message Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Describe your garment manufacturing requirements, target timelines, or design specs..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.message && touched.message)}
                    className={`w-full bg-[#F9F9F9] border rounded-xl px-3.5 py-2.5 text-[#1A1A1A] transition-all focus:outline-none ${
                      errors.message && touched.message
                        ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#E5E5E2] focus:border-[#FBE87E]"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-body">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-body">
                    {errorMessage}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  type="submit"
                  disabled={loading}
                  className={`btn-circle-hover w-full font-label font-black py-3.5 rounded-full text-xs tracking-wider flex items-center justify-center gap-2 border-none ${
                    loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {loading ? "SUBMITTING ENQUIRY..." : "SUBMIT ENQUIRY"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
