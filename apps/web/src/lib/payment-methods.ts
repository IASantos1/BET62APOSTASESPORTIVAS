export type PaymentMethod = 'mbway' | 'multibanco' | 'card';

export const DEFAULT_DEPOSIT_METHOD: PaymentMethod = 'card';

export function isPaymentMethodEnabled(method: PaymentMethod): boolean {
  return method !== 'mbway';
}

export function normalizeDepositMethod(method: PaymentMethod): 'card' | 'multibanco' {
  return method === 'mbway' ? 'card' : method;
}
