// app/layout.tsx
export const metadata = {
  title: 'Kimi Sushi',
  description: 'Genuss in jedem Biss – Sushi Restaurant in Filderstadt',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
