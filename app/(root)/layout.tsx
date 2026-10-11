import "../globals.css";

// Separate root layout for "/" (language detection). The localized routes live
// under app/[lang] and have their own <html lang>.
export default function RootRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
