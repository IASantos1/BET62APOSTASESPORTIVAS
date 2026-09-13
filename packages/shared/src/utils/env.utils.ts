export const requireEnv = (value: string | undefined | null, name: string): string => {
  if (!value || !value.trim()) {
    throw new Error(
      `Missing required environment variable "${name}". Refusing to start with an insecure default.`,
    );
  }
  return value;
};
