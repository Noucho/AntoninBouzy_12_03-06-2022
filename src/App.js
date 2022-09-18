import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Index from './pages/Index/Index.js'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Index />} /> 
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
