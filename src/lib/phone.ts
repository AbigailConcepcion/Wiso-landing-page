export function normalizePhone(raw: string) {
  const digits = (raw || '').replace(/\D/g, '').replace(/^0+/, '');
  if (!/^63/.test(digits) && digits.length <= 10) return `63${digits}`;
  return digits;
}

export function appWhatsAppLink(phone: string, text?: string) {
  const p = normalizePhone(phone);
  return `whatsapp://send?phone=${p}${text ? `&text=${encodeURIComponent(text)}` : ''}`;
}

export function webWhatsAppApiLink(phone: string, text?: string) {
  const p = normalizePhone(phone);
  return `/api/wa?text=${text ? encodeURIComponent(text) : ''}`;
}
