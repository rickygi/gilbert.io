import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>gilbert.io</title>
        <meta name="author" content="Ricky Gilbert" />
        <meta
          name="description"
          content="Curiosity, passion and empathy. Design, code and technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
