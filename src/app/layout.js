import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../app/styles/globals.css';


export const metadata = {
  title: 'My App',
  description: 'Next.js + PrimeReact + Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

      </head>
      <body className='overflow-hidden' >{children}</body>
    </html>

  )
}
