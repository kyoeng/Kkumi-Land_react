import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./components/pages/Index"
import Play from "./components/pages/Play"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
            <Route index element={ <Index /> } />
            <Route path="play" element={ <Play /> } />
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
