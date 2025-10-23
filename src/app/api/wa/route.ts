import { NextResponse } from 'next/server';
import CONTACT from '../../../config/contact';

function normalizePhone(raw: string) {
  const digits = (raw || '').replace(/\D/g, '').replace(/^0+/, '');
  if (!/^63/.test(digits) && digits.length <= 10) return `63${digits}`;
  return digits;
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') || '';
  const phone = normalizePhone(CONTACT.rawPhone || '09055632372');
  const target = `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
  return NextResponse.redirect(target);
}
