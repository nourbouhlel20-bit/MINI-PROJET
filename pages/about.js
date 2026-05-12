import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Pourquoi Next.js + Devcontainer ?</h1>

        <div className={styles.card}>
          <h2>Next.js</h2>
          <p>
            Framework React moderne qui facilite le rendu côté serveur, la génération statique et les API routes.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Devcontainer</h2>
          <p>
            Environnement Docker reproductible pour que tous les développeurs utilisent les mêmes versions de Node et outils.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Avantages</h2>
          <p>
            Force du projet : configuration partagée, installation automatique, et démarrage identique sur chaque machine.
          </p>
        </div>

        <Link href="/" className={styles.card}>
          <h2>Retour à l’accueil</h2>
        </Link>
      </main>
    </div>
  )
}
