import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Script from 'next/script';
import { Inter, Montserrat, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pilotosasesalvolante.com'),
  title: 'Pilotos ases al volante | Autoescuela en Río Gallegos',
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
    title: 'Pilotos ases al volante | Autoescuela en Río Gallegos',
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
    title: 'Pilotos ases al volante | Autoescuela en Río Gallegos',
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
    <html lang="es" className={`dark ${inter.variable} ${montserrat.variable} ${poppins.variable}`}>
      <head>
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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '951834753915866');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=951834753915866&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <FirebaseClientProvider>
          {children}
          <Toaster />
          <WhatsAppButton />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
