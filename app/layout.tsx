export const metadata = {
  title: 'Kimi Sushi',
  description: 'Website chính thức của nhà hàng Kimi Sushi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
