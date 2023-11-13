/* Components */
import { Providers } from '@/lib/providers'
import { Navbar } from './components/navbar'

/* Instruments */
import './styles/globals.css'
import styles from './styles/layout.module.scss'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Navbar />

            <main className={styles.main}>
              {props.children}
            </main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
