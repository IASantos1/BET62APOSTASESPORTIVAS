import {
  isEmail as classIsEmail,
  isMobilePhone,
  isStrongPassword as classIsStrongPassword,
  matches,
  minLength,
  maxLength,
  isUUID,
  isDateString,
  isNumber,
  isPositive,
} from "class-validator";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export const isValidEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  if (!classIsEmail(email)) errors.push("Invalid email format");
  if (!maxLength(email, 254)) errors.push("Email too long (max 254 chars)");
  return { valid: errors.length === 0, errors };
};

export const isValidPassword = (password: string): ValidationResult => {
  const errors: string[] = [];
  if (!minLength(password, 8)) errors.push("Password too short (min 8 chars)");
  if (!maxLength(password, 128)) errors.push("Password too long (max 128 chars)");
  if (!classIsStrongPassword(password, { minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 0, minUppercase: 1 })) {
    errors.push("Password must include: uppercase, lowercase, number");
  }
  return { valid: errors.length === 0, errors };
};

export const isValidPortuguesePhone = (phone: string): ValidationResult => {
  const errors: string[] = [];
  const cleaned = phone.replace(/\s|-|\./g, "");
  if (!matches(cleaned, /^(\+351)?9[1236]\d{7}$|^(\+351)?2\d{8}$/)) {
    errors.push("Invalid PT phone format (ex: +351 912 345 678)");
  }
  return { valid: errors.length === 0, errors };
};

export const isValidEuropeanVAT = (vat: string): ValidationResult => {
  const errors: string[] = [];
  if (!matches(vat.toUpperCase(), /^(AT|BE|BG|HR|CY|CZ|DK|EE|FI|FR|DE|EL|HU|IE|IT|LV|LT|LU|MT|NL|PL|PT|RO|SK|SI|ES|SE)[A-Z0-9]{2,12}$/)) {
    errors.push("Invalid European VAT format");
  }
  return { valid: errors.length === 0, errors };
};

export const isValidDateOfBirth18Plus = (dob: string | Date): ValidationResult => {
  const errors: string[] = [];
  const date = typeof dob === "string" ? new Date(dob) : dob;
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    errors.push("Invalid date format");
    return { valid: false, errors };
  }
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  const ageFinal = m < 0 || (m === 0 && today.getDate() < date.getDate()) ? age - 1 : age;
  if (ageFinal < 18) errors.push("Must be 18 or older");
  if (ageFinal > 120) errors.push("Invalid age");
  return { valid: errors.length === 0, errors };
};

export const isValidPostalCodePT = (code: string): ValidationResult => {
  const errors: string[] = [];
  if (!matches(code, /^\d{4}(-\d{3})?$/)) errors.push("Invalid PT postal code (ex: 1000-001)");
  return { valid: errors.length === 0, errors };
};

export const isValidNIFPT = (nif: string): ValidationResult => {
  const errors: string[] = [];
  const cleaned = nif.replace(/\D/g, "");
  if (!matches(cleaned, /^\d{9}$/)) {
    errors.push("NIF must have 9 digits");
    return { valid: false, errors };
  }
  const first = parseInt(cleaned[0]);
  if (![1, 2, 3, 5, 6, 8, 9].includes(first)) errors.push("Invalid NIF first digit");
  const multipliers = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 8; i++) sum += parseInt(cleaned[i]) * multipliers[i];
  const mod11 = sum % 11;
  let expected = mod11 === 0 || mod11 === 1 ? 0 : 11 - mod11;
  if (parseInt(cleaned[8]) !== expected) errors.push("Invalid NIF check digit");
  return { valid: errors.length === 0, errors };
};

export const isValidStake = (stake: number, min = 0.1, max = 10000): ValidationResult => {
  const errors: string[] = [];
  if (!isNumber(stake)) errors.push("Stake must be a number");
  else if (!isPositive(stake)) errors.push("Stake must be positive");
  else if (stake < min) errors.push(`Stake too low (min €${min})`);
  else if (stake > max) errors.push(`Stake too high (max €${max})`);
  else if (Number(stake.toFixed(2)) !== Number(stake)) errors.push("Stake max 2 decimals");
  return { valid: errors.length === 0, errors };
};

export const isValidOddsDecimal = (odds: number): ValidationResult => {
  const errors: string[] = [];
  if (!isNumber(odds) || !isFinite(odds)) errors.push("Odds must be a number");
  else if (odds < 1.01) errors.push("Odds too low (min 1.01)");
  else if (odds > 10000) errors.push("Odds too high (max 10000)");
  else if (Number(odds.toFixed(2)) !== Number(odds)) errors.push("Odds max 2 decimals");
  return { valid: errors.length === 0, errors };
};

export const isValidUUIDv4 = (id: string): ValidationResult => {
  const errors: string[] = [];
  if (!isUUID(id, "4")) errors.push("Invalid UUID v4 format");
  return { valid: errors.length === 0, errors };
};

export const sanitizeHtml = (input: string): string =>
  input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on(error|load|click|submit|mouseover|focus|blur|change)\s*=/gi, "")
    .trim();

export const sanitizeForSQL = (input: string): string =>
  input.replace(/(['";\\]|--|\/\*|\*\/)/g, "").substring(0, 1000);
