import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['de', 'en', 'ja', 'fr'];
const DEFAULT_LOCALE = 'de';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Bỏ qua các file tĩnh và API route
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // .ico, .png, .jpg, .css, .js, ...
  ) {
    return NextResponse.next();
  }

  // Nếu URL đã có prefix hợp lệ (ví dụ /de/, /en/) thì không redirect
  const isLocalePrefixed = SUPPORTED_LOCALES.some((locale) =>
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (isLocalePrefixed) {
    return NextResponse.next();
  }

  // Lấy ngôn ngữ từ header Accept-Language
  const acceptLang = req.headers.get('accept-language') || '';
  const firstLang = acceptLang.split(',')[0] || '';
  const preferredLang = firstLang.split('-')[0] || '';
  const locale = SUPPORTED_LOCALES.includes(preferredLang)
    ? preferredLang
    : DEFAULT_LOCALE;

  // Redirect đến URL có prefix ngôn ngữ tương ứng
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

// Chỉ áp dụng middleware cho các route không phải file tĩnh, API hoặc favicon
export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
