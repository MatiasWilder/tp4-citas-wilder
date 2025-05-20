import { useState } from 'react'
import Formulario from './form'
import Listado from './listado'
import '/src/index.css'

function App() {
  const [citas, setCitas] = useState([])

  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <Formulario citas={citas} setCitas={setCitas} />
      <Listado citas={citas} setCitas={setCitas} />
    </div>
  )
}

export default App

