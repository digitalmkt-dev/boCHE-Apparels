"use client";

import { useState, useRef, useEffect } from "react";
import { FlagImage } from "react-international-phone";
import "react-international-phone/style.css";
import { ChevronDown, Search, Check, AlertCircle } from "lucide-react";
import {
  COUNTRY_LIST,
  getCountryMaxPhoneLength,
  getCountryPlaceholder,
  normalizePhoneInput,
} from "@/utils/phoneUtils";

export default function PhoneInputWithCountry({
  value = "",
  countryCode = "+91",
  countryIso = "IN",
  onChange,
  onCountryChange,
  onBlur,
  error,
  touched,
  id,
  name = "phone",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Find currently selected country by ISO or dial code
  const selectedCountry =
    COUNTRY_LIST.find((c) => c.iso2 === (countryIso || "").toUpperCase()) ||
    COUNTRY_LIST.find((c) => c.dialCode === countryCode) ||
    COUNTRY_LIST.find((c) => c.iso2 === "IN") ||
    COUNTRY_LIST[0];

  const maxAllowedDigits = getCountryMaxPhoneLength(selectedCountry.iso2, selectedCountry.dialCode);
  const placeholder = getCountryPlaceholder(selectedCountry.iso2, selectedCountry.dialCode);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Filter countries by name, dial code, or ISO code
  const filteredCountries = COUNTRY_LIST.filter((c) => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    return (
      c.name.toLowerCase().includes(query) ||
      c.dialCode.includes(query) ||
      c.iso2.toLowerCase().includes(query)
    );
  });

  const safeValue = typeof value === "string" ? value : (value && typeof value === "object" && typeof value.value === "string" ? value.value : "");

  const handleSelectCountry = (country) => {
    setIsOpen(false);
    setSearch("");

    if (onCountryChange) {
      onCountryChange(country.iso2);
    }

    const newMaxDigits = getCountryMaxPhoneLength(country.iso2, country.dialCode);
    const currentDigitsOnly = safeValue.replace(/\D/g, "");
    const truncatedValue = currentDigitsOnly.slice(0, newMaxDigits);

    if (onChange && truncatedValue !== safeValue) {
      onChange(truncatedValue);
    }
  };

  const processDigits = (rawVal) => {
    // Accept digits only
    let digitsOnly = (rawVal || "").replace(/\D/g, "");
    // If user entered leading 0 trunk prefix (e.g. 09876543210) and total length exceeds maxAllowedDigits, remove leading 0
    if (digitsOnly.startsWith("0") && digitsOnly.length > maxAllowedDigits) {
      digitsOnly = digitsOnly.replace(/^0+/, "");
    }
    // Stop accepting input after maximum supported length for selected country (10 for India)
    return digitsOnly.slice(0, maxAllowedDigits);
  };

  const handlePhoneChange = (e) => {
    const rawInput = e && e.target ? e.target.value : String(e || "");
    const restrictedDigits = processDigits(rawInput);
    if (onChange) {
      onChange(restrictedDigits);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData ? e.clipboardData.getData("text") : "";

    // Support international pasted numbers starting with '+'
    const normalized = normalizePhoneInput(pastedText, selectedCountry.iso2, selectedCountry.dialCode);

    if (pastedText.trim().startsWith("+") && normalized.iso) {
      if (onCountryChange) {
        onCountryChange(normalized.iso);
      }
      if (onChange) {
        onChange(normalized.phone.slice(0, getCountryMaxPhoneLength(normalized.iso, normalized.dial)));
      }
    } else {
      const digitsOnly = pastedText.replace(/\D/g, "");
      if (onChange) {
        onChange(digitsOnly.slice(0, maxAllowedDigits));
      }
    }
  };

  return (
    <div className="relative font-body" ref={dropdownRef}>
      <div className="flex gap-2">
        {/* Searchable Country Selector Button with SVG Flag Image */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between gap-1.5 px-3 h-[42px] bg-[#F9F9F9] border rounded-xl text-sm font-bold text-[#1A1A1A] hover:bg-[#F0F0ED] transition-colors shrink-0 cursor-pointer min-w-[96px] ${
            error && touched ? "border-red-500 bg-red-50/20" : "border-[#E5E5E2] focus:border-[#FBE87E]"
          }`}
          aria-expanded={isOpen}
          aria-label="Select Country Code"
        >
          <div className="flex items-center gap-1.5">
            <FlagImage iso2={selectedCountry.iso2.toLowerCase()} className="w-5 h-3.5 object-cover rounded-xs shrink-0 shadow-2xs" />
            <span className="font-mono text-xs font-bold text-[#1A1A1A]">{selectedCountry.dialCode}</span>
          </div>
          <ChevronDown className={`w-3.5 h-3.5 text-[#555555] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Digits Only Phone Input Field with Capped Length */}
        <div className="flex-1 min-w-0 relative">
          <input
            type="tel"
            id={id}
            name={name}
            maxLength={maxAllowedDigits}
            placeholder={placeholder}
            value={safeValue}
            onChange={handlePhoneChange}
            onPaste={handlePaste}
            onBlur={onBlur}
            aria-invalid={!!(error && touched)}
            className={`w-full h-[42px] bg-[#F9F9F9] border rounded-xl px-3.5 text-sm text-[#1A1A1A] placeholder-[#999999] transition-all focus:outline-none font-body ${
              error && touched
                ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[#E5E5E2] focus:border-[#FBE87E]"
            }`}
          />
        </div>
      </div>

      {/* Inline Validation Error Message */}
      {error && touched && (
        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-body">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
          <span>{error}</span>
        </p>
      )}

      {/* Searchable Dropdown Popover */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1.5 w-76 bg-white border border-[#E5E5E2] rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Search Box inside Dropdown */}
          <div className="p-2 border-b border-[#E5E5E2] bg-[#F9F9F9] shrink-0">
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-[#888888] absolute left-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code (+91)..."
                className="w-full bg-white border border-[#E5E5E2] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FBE87E]"
              />
            </div>
          </div>

          {/* Country List */}
          <div className="overflow-y-auto overscroll-contain max-h-60 flex-1 divide-y divide-[#F3F3F1] touch-pan-y">
            {filteredCountries.length === 0 ? (
              <div className="p-4 text-center text-xs text-[#777777]">
                No country found matching &quot;{search}&quot;
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = c.iso2 === selectedCountry.iso2;
                return (
                  <button
                    key={`${c.iso2}-${c.dialCode}`}
                    type="button"
                    onClick={() => handleSelectCountry(c)}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs hover:bg-[#F9F9F6] transition-colors cursor-pointer ${
                      isSelected ? "bg-[#FFFDE6] font-bold text-[#1A1A1A]" : "text-[#333333]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <FlagImage iso2={c.iso2.toLowerCase()} className="w-5 h-3.5 object-cover rounded-xs shrink-0 shadow-2xs" />
                      <span className="truncate">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2 font-mono text-[11px]">
                      <span className="text-[#666666] font-medium">{c.dialCode}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#1A1A1A]" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
