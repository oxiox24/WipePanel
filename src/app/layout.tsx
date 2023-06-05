import './globals.css'
import { Bowlby_One_SC } from 'next/font/google'


const BowblyOneSc = Bowlby_One_SC({weight: ['400'], subsets: ['latin'], style: ['normal']})

export const metadata = {
  title: 'WipePanel',
  description: 'WipePanel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={BowblyOneSc.className}>{children}</body>
    </html>
   
 )
}
