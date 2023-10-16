import ListContextProvider from '@/context/ListContext'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'To Do List',
  description: 'Create To Do List',
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"]
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ListContextProvider>
        {children}
        </ListContextProvider>
      </body>
    </html>
  )
}
