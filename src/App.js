import React from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/style/main.scss'
 
import {AppHeader} from './cmps/app-header'
import { HomePage } from './pages/home-page'
import { AboutPage } from './pages/about-page'

function App() {
  return (
    <Router>
      <section className='main-layout app'>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App;
