import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Autoescuela en Río Gallegos | Pilotos ases al volante',
  description: 'Aprendé a conducir en Río Gallegos de forma segura. Equipo calificado, vehículos modernos y horarios flexibles. ¡Desbloqueá tu mejor versión al volante hoy!',
  icons: {
    icon: [
      { url: 'https://i.imgur.com/kQtT1h5.jpeg', type: 'image/jpeg' },
    ],
    shortcut: 'https://i.imgur.com/kQtT1h5.jpeg',
    apple: 'https://i.imgur.com/kQtT1h5.jpeg',
  },
  openGraph: {
    title: 'Autoescuela en Río Gallegos | Pilotos ases al volante',
    description: 'Aprendé a conducir en Río Gallegos de forma segura. Equipo calificado, vehículos modernos y horarios flexibles. ¡Desbloqueá tu mejor versión al volante hoy!',
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
    title: 'Autoescuela en Río Gallegos | Pilotos ases al volante',
    description: 'Aprendé a conducir en Río Gallegos de forma segura. Equipo calificado, vehículos modernos y horarios flexibles. ¡Desbloqueá tu mejor versión al volante hoy!',
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
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
