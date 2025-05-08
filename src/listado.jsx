import Cita from './cita'

function Listado({ citas }) {
  return (
    <div className="listado">
      <h2>Listado</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} texto={cita.texto} />
      ))}
    </div>
  )
}

export default Listado
