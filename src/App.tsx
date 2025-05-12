import HomePage from '@/pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
