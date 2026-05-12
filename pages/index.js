import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js + Devcontainer</h1>
        <p className={styles.description}>
          Projet d’intégration : application Next.js développée dans un environnement Docker standardisé.
        </p>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>À propos</h2>
            <p>Explication du sujet et de la valeur du devcontainer.</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h2>Contact</h2>
            <p>Envoyez un message à notre API simple avec cette page.</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
