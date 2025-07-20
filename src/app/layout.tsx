import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { DynamicBackground } from '@/components/layout/DynamicBackground';

export const metadata: Metadata = {
  title: {
    default: 'CircuitFlow',
    template: '%s | CircuitFlow',
  },
  description: "An embedded systems engineer's portfolio and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background')}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1"><DynamicBackground>{children}</DynamicBackground></main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
