import * as crypto from "node:crypto";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

export function generateId(prefix = ""): string {
  const rand = randomBytes(16).toString("hex");
  return prefix ? `${prefix}_${rand}` : rand;
}

export function generateToken(bytes = 32): string {
  return randomBytes(bytes).toString("base64url");
}

export function hashString(input: string, algorithm = "sha256"): string {
  return createHash(algorithm).update(input).digest("hex");
}

export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("base64");
}

export function safeCompare(a: string, b: string): boolean {
  try {
    const aBuff = Buffer.from(a);
    const bBuff = Buffer.from(b);
    if (aBuff.length !== bBuff.length) return false;
    return timingSafeEqual(aBuff, bBuff);
  } catch {
    return false;
  }
}

export function generateOTPCode(length = 6): string {
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  const hex = bytes.toString("hex").slice(0, length);
  let numeric = "";
  for (let i = 0; i < length; i++) {
    numeric += parseInt(hex[i] || "0", 16) % 10;
  }
  return numeric.padStart(length, "0");
}

export function hmacSign(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

export function hmacVerify(signature: string, payload: string, secret: string): boolean {
  const expected = hmacSign(payload, secret);
  return safeCompare(signature, expected);
}

export function aes256GcmEncrypt(plaintext: string, keyHex: string): {
  ciphertext: string;
  iv: string;
  tag: string;
} {
  const key = Buffer.from(keyHex, "hex");
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    ciphertext: encrypted.toString("base64"),
    iv: iv.toString("base64"),
    tag: tag.toString("base64"),
  };
}

export function aes256GcmDecrypt(
  ciphertextB64: string,
  keyHex: string,
  ivB64: string,
  tagB64: string,
): string {
  const key = Buffer.from(keyHex, "hex");
  const iv = Buffer.from(ivB64, "base64");
  const tag = Buffer.from(tagB64, "base64");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(ciphertextB64, "base64")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

export function uuidV4(): string {
  return crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (crypto.randomBytes(1)[0] & 0xf) >>> 0;
    const v = c === "x" ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}
