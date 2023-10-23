import type { AppProps } from 'next/app'
import { AppProvider } from '@/shared/api/app-provider'
import { Roboto } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={roboto.className}>
        <ToastContainer />
        <Component {...pageProps} />
      </main>
    </AppProvider>
  )
}
