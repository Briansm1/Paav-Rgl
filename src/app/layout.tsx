import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pilotos - Ases al Volante | Academia de Conducción en Río Gallegos',
  description: 'Tu academia de confianza para aprender a conducir con seguridad y profesionalismo en Río Gallegos. Cursos personalizados, instructores expertos y vehículos modernos para tu licencia.',
  keywords: ['conducción', 'clases de manejo', 'Río Gallegos', 'licencia de conducir', 'seguridad vial', 'academia de manejo', 'aprender a manejar'],
  authors: [{ name: 'Pilotos - Ases al Volante' }],
  icons: {
    icon: 'https://i.imgur.com/bLVVpLH.jpeg',
    shortcut: 'https://i.imgur.com/bLVVpLH.jpeg',
    apple: 'https://i.imgur.com/bLVVpLH.jpeg',
  },
  openGraph: {
    title: 'Pilotos - Ases al Volante | Academia de Conducción',
    description: 'Aprende a conducir con seguridad y confianza. Tu libertad empieza con nosotros.',
    url: 'https://pilotosasesalvolante.com',
    siteName: 'Pilotos - Ases al Volante',
    images: [
      {
        url: 'https://i.imgur.com/v6PauaL.png',
        width: 1200,
        height: 630,
        alt: 'Pilotos Academia de Conducción',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilotos - Ases al Volante | Academia de Conducción',
    description: 'Aprende a conducir con seguridad y profesionalismo.',
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
