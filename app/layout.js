

import './globals.css'
import Head from 'next/head'; // Import the Head component to set the HTML head properties.
import Navigation  from './components/navbar';


export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
 <>
     
      <Navigation/>
      <body>{children}</body>
 
    </>
  )
}