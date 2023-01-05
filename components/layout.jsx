import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen text-slate-100 bg-slate-900">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
