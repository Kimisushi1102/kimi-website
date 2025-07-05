import { NextRequest, NextResponse } from 'next/server';

// Danh sách ngôn ngữ được hỗ trợ
const SUPPORTED_LOCALES = ['de', 'en', 'ja', 'fr'];
const DEFAULT_LOCALE = 'de';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Nếu URL đã có ngôn ngữ, bỏ qua
  if (SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Lấy ngôn ngữ từ header trình duyệt
  const acceptLang = req.headers.get('accept-language') || '';
  const preferredLang = acceptLang.split(',')[0]?.split('-')[0]; // ví dụ: "fr-FR" → "fr"

  // Chọn ngôn ngữ phù hợp
  const locale = SUPPORTED_LOCALES.includes(preferredLang) ? preferredLang : DEFAULT_LOCALE;

  // Redirect đến URL có prefix ngôn ngữ
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}
