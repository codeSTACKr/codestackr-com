import Script from 'next/script'
import '../styles/globals.css'
import "@code-hike/mdx/dist/index.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-142379631-1" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-142379631-1');`}
      </Script>

      <Component {...pageProps} />
    </>
  )
}
