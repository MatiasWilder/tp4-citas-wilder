import { useState, useEffect } from 'react'
import Formulario from './form'
import Listado from './listado'
import '/src/index.css'

function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas')
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <Formulario citas={citas} setCitas={setCitas} />
      <Listado citas={citas} setCitas={setCitas} />
    </div>
  )
}

export default App
