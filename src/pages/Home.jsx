import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="home">
      <div className="teddy-wrap">
        <span className="teddy">🧸</span>

        <nav className="teddy-links">
          <Link to="/toy">Toys</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </section>
  )
}
