import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}