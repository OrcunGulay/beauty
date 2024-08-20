import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const Index = React.lazy(() => import('./pages/index'))
const About =React.lazy(()=> import('./pages/about'))
const Service =React.lazy(()=> import('./pages/service'))
const Gallery =React.lazy(()=> import('./pages/gallery'))
const Contact =React.lazy(()=> import('./pages/contact'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/service" element={<Service />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
