import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://pilotosasesalvolante.com'),
  title: 'Autoescuela en Río Gallegos | Pilotos ases al volante',
  description: 'Aprendé a manejar con Pilotos ases al volante Autoescuela en Río Gallegos. Clases de manejo para principiantes, preparación para licencia de conducir, prácticas personalizadas y acompañamiento para examen práctico. Obtene más información en nuestra página web.',
  keywords: [
    'autoescuela río gallegos',
    'academia de conducción',
    'aprender a manejar',
    'clases de manejo santa cruz',
    'licencia de conducir río gallegos',
    'escuela de manejo',
    'pilotos ases al volante',
    'seguridad vial',
    'examen de conducir'
  ],
  icons: {
    icon: 'https://i.imgur.com/kQtT1h5.jpeg',
    shortcut: 'https://i.imgur.com/kQtT1h5.jpeg',
    apple: 'https://i.imgur.com/kQtT1h5.jpeg',
  },
  openGraph: {
    title: 'Autoescuela en Río Gallegos | Pilotos ases al volante',
    description: 'Aprendé a manejar con Pilotos ases al volante Autoescuela en Río Gallegos. Clases de manejo para principiantes, preparación para licencia de conducir, prácticas personalizadas y acompañamiento para examen práctico. Obtene más información en nuestra página web.',
    url: 'https://pilotosasesalvolante.com',
    siteName: 'Pilotos - Ases al Volante',
    images: [
      {
        url: 'https://i.imgur.com/v6PauaL.png',
        width: 1200,
        height: 630,
        alt: 'Pilotos Academia de Conducción en Río Gallegos',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoescuela en Río Gallegos | Pilotos ases al volante',
    description: 'Aprendé a manejar con Pilotos ases al volante Autoescuela en Río Gallegos. Clases de manejo para principiantes, preparación para licencia de conducir, prácticas personalizadas y acompañamiento para examen práctico. Obtene más información en nuestra página web.',
    images: ['https://i.imgur.com/v6PauaL.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@900&family=Poppins:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://i.imgur.com/kQtT1h5.jpeg" type="image/jpeg" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TXZ2N74HT0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TXZ2N74HT0');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
          <Toaster />
          <WhatsAppButton />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
