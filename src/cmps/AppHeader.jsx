import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }
  return (
    <header className="app-header main-layout">
      <NavLink to="/toy" className="logo" onClick={closeMenu}>
        🧸 MisterToy
      </NavLink>

      <nav className={`app-nav ${isOpen ? 'open' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/toy">Toys</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <button className="menu-btn" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
