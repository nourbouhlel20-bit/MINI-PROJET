import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState(null)

  const submitForm = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    })

    const data = await res.json()
    setResponse(data)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contactez-nous</h1>
        <form className={styles.form} onSubmit={submitForm}>
          <label className={styles.fieldLabel}>
            Nom
            <input
              className={styles.textField}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label className={styles.fieldLabel}>
            Message
            <textarea
              className={`${styles.textField} ${styles.textArea}`}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>

          <button className={styles.submitButton} type="submit">Envoyer</button>
        </form>

        {response && (
          <div className={styles.response}>
            <strong>{response.reply}</strong>
          </div>
        )}
      </main>
    </div>
  )
}
