import metadata from "libphonenumber-js/metadata.min.json";
import { parsePhoneNumberFromString, getExampleNumber } from "libphonenumber-js/max";
import examples from "libphonenumber-js/examples.mobile.json";
import { defaultCountries, parseCountry } from "react-international-phone";

// Enriched country list from react-international-phone + libphonenumber-js metadata
export const COUNTRY_LIST = defaultCountries.map((c) => {
  const parsed = parseCountry(c);
  const uppercaseIso = parsed.iso2.toUpperCase();
  const exampleObj = getExampleNumber(uppercaseIso, examples);

  return {
    name: parsed.name,
    iso2: uppercaseIso,
    dialCode: `+${parsed.dialCode}`,
    exampleNational: exampleObj ? exampleObj.formatNational() : "",
    exampleE164: exampleObj ? exampleObj.number : "",
  };
});

/**
 * Calculates standard mobile digit length for each country.
 * India (+91) -> 10 digits.
 * Antigua (+1268) -> 7 national digits (after +1268 prefix).
 * USA (+1) -> 10 digits.
 * UAE (+971) -> 9 digits.
 */
export function getCountryMaxPhoneLength(iso2, dialCode = "") {
  if (!iso2) return 10;
  const uppercaseIso = iso2.toUpperCase();
  const cleanDial = dialCode ? dialCode.replace(/\D/g, "") : "";

  // Handle NANP territories with area code in calling code (like '1268' for Antigua)
  if (cleanDial.length > 2 && cleanDial.startsWith("1")) {
    const areaCodeLen = cleanDial.length - 1; // '268' is 3 digits
    return Math.max(7, 10 - areaCodeLen);
  }

  const exampleObj = getExampleNumber(uppercaseIso, examples);
  if (exampleObj && exampleObj.nationalNumber) {
    return exampleObj.nationalNumber.length;
  }

  return 10;
}

/**
 * Dynamically computes a country-appropriate placeholder for national phone input.
 */
export function getCountryPlaceholder(iso2, dialCode = "") {
  const uppercaseIso = iso2 ? iso2.toUpperCase() : "IN";
  const cleanDial = dialCode ? dialCode.replace(/\D/g, "") : "";
  const exampleObj = getExampleNumber(uppercaseIso, examples);

  if (!exampleObj) return "98765 43210";

  const e164Digits = exampleObj.number.replace(/\D/g, "");
  if (cleanDial && e164Digits.startsWith(cleanDial)) {
    const remaining = e164Digits.slice(cleanDial.length);
    if (remaining.length === 7) return `${remaining.slice(0, 3)}-${remaining.slice(3)}`;
    if (remaining.length === 10) return `${remaining.slice(0, 5)} ${remaining.slice(5)}`;
    return remaining;
  }

  return exampleObj.formatNational() || "98765 43210";
}

/**
 * Normalizes any typed or pasted input (international or local) and returns matched ISO, dialCode, phone, and E.164 string.
 */
export function normalizePhoneInput(input, currentIso = "IN", currentDial = "+91") {
  const rawText = (input || "").trim();

  // If user pasted a full international number starting with '+'
  if (rawText.startsWith("+")) {
    const parsed = parsePhoneNumberFromString(rawText);
    if (parsed && parsed.isValid()) {
      const iso = parsed.country || currentIso;
      const matchedCountry = COUNTRY_LIST.find((c) => c.iso2 === iso);
      const dial = matchedCountry ? matchedCountry.dialCode : `+${parsed.countryCallingCode}`;

      const cleanDialDigits = dial.replace(/\D/g, "");
      const e164Digits = parsed.number.replace(/\D/g, "");

      let natPhone = e164Digits.startsWith(cleanDialDigits)
        ? e164Digits.slice(cleanDialDigits.length)
        : parsed.nationalNumber;

      return {
        iso,
        dial,
        phone: natPhone,
        e164: parsed.number,
        isValid: true,
      };
    }
  }

  // Local digits processing
  let cleanDigits = rawText.replace(/\D/g, "");
  const cleanDialDigits = currentDial.replace(/\D/g, "");

  // Strip leading zero trunk prefix if present (e.g. 09876543210 -> 9876543210 for +91 / +44)
  if (cleanDigits.startsWith("0")) {
    const stripped = cleanDigits.replace(/^0+/, "");
    if (stripped.length > 0) {
      const testE164 = `+${cleanDialDigits}${stripped}`;
      const testParsed = parsePhoneNumberFromString(testE164, currentIso ? currentIso.toUpperCase() : undefined);
      if (testParsed && testParsed.isValid()) {
        cleanDigits = stripped;
      }
    }
  }

  let phoneDigits = cleanDigits;

  // Handle NANP area code duplication (e.g. Antigua +1268 when user enters '2684641234')
  if (
    cleanDialDigits.length > 2 &&
    cleanDialDigits.startsWith("1") &&
    phoneDigits.startsWith(cleanDialDigits.slice(1))
  ) {
    phoneDigits = phoneDigits.slice(cleanDialDigits.length - 1);
  }

  const fullE164 = `+${cleanDialDigits}${phoneDigits}`;
  const parsed = parsePhoneNumberFromString(fullE164, currentIso ? currentIso.toUpperCase() : undefined);

  return {
    iso: currentIso,
    dial: currentDial,
    phone: phoneDigits,
    e164: parsed ? parsed.number : fullE164,
    isValid: parsed ? parsed.isValid() : false,
  };
}

/**
 * Validates full phone number against libphonenumber-js rules for current country.
 */
export function validateCountryPhone(phoneDigits, countryCode, iso2) {
  if (!phoneDigits) return "";

  const normalized = normalizePhoneInput(phoneDigits, iso2, countryCode);
  if (!normalized.isValid) {
    return `Please enter a valid phone number for country code ${countryCode}.`;
  }

  return "";
}
