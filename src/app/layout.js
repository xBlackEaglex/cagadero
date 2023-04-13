import Header from "./components/Header"
import '../styles/globals.css'

export const metadata = {
  title: 'Cagadero',
  description: 'una pagina de pruebas',
}

export default function RootLayout({ children }) {
return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
