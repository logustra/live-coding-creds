'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.scss'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/verify' ? styles.active : ''
        }`}
        href="/verify"
      >
        Verify
      </Link>
    </nav>
  )
}
