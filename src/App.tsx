import Navbar from '@/components/Navbar'
import HomePage from '@/pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
