import blurPlaceholders from "@/data/blurPlaceholders.json";

export function getBlurDataURL(src) {
  if (!src) return undefined;

  let cleanPath = "";
  if (typeof src === "string") {
    cleanPath = src;
  } else if (typeof src === "object" && src.src) {
    cleanPath = src.src;
  }

  if (blurPlaceholders[cleanPath]) {
    return blurPlaceholders[cleanPath];
  }

  try {
    const decoded = decodeURIComponent(cleanPath);
    if (blurPlaceholders[decoded]) {
      return blurPlaceholders[decoded];
    }
  } catch (e) {
    // Ignore decode error
  }

  // Fallback subtle gray blur data URI
  return "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoKAAoABUB8JbACdAD0Ot4AAAD+4KYlAffusqoTMnd9t2Ah5H6STFYWeuCZ7J1zMYpLvpsQm7AwAA==";
}
