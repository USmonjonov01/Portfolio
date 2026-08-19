import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <p className="mono" style={{ color: 'var(--accent-cyan)' }}>
        404
      </p>
      <h1 style={{ fontSize: '1.8rem' }}>Sahifa topilmadi</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 420 }}>
        Siz qidirgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
      </p>
      <Link to="/" className="btn btn-primary">
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}
