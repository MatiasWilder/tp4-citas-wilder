import { useState } from 'react'
import Formulario from './form'
import Listado from './listado'

function App() {
  const [citas] = useState([
    { id: 1, texto: '' },
    { id: 2, texto: '' },
    { id: 3, texto: '' }
  ])

  return (
    <div className="app-container">
      <Formulario />
      <Listado citas={citas} />
    </div>
  )
}

export default App
