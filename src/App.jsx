import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/style/main.css'

// import { AppHeader } from './cmps/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter.jsx'

import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { About } from './pages/About.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <main className="main-layout">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ToyIndex />} path="/toy" />
            <Route element={<ToyEdit />} path="/toy/edit" />
            <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
            <Route element={<ToyDetails />} path="/toy/:toyId" />
            <Route element={<About />} path="/about" />
          </Routes>
        </main>
        {/* <AppFooter /> */}
      </section>
    </Router>
  )
}
