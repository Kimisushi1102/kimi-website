// app/layout.tsx
export const metadata = {
  title: 'Kimi Sushi',
  description: 'Sorgfalt in jedem Schnitt – Genuss in jedem Biss',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head />
      <body>{children}</body>
    </html>
  );
}
