import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'


function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [recargar, setRecargar] = useState(false)
  
 
function cambiarUsuario(evento) {
  setUsuario(evento.target.value)
}
function cambiarClave(evento) {
  setClave(evento.target.value)
}
async function ingresar() {
const peticion = await fetch ('http://localhost:3000/login?usuario='+usuario+'&clave='+clave,{credentials:'include'})
if (peticion.ok) {
  setLogueado(true)
}  else{
    alert('usuario incorrecto')
  }
{
      // if (usuario == 'admin' && clave == 'admin') {
    //  alert("Iniciando Sesion")
    //setLogueado(true)
    // } else {
    // alert('usuario Incorrecto')
  }
}
async function validar() {
  const peticion = await fetch ('http://localhost:3000/validar',{credentials:'include'})
  if (peticion.ok) {
    setLogueado(true)
  } 
    }
    useEffect (()=>{
      validar()
    }, [])
  if (logueado) {
    return (

      <>
        <Conversor />
        <usuario recargar={recargar} />
      </>)

  }
  return (
   <>
  <h1>INICIO DE SESIÓN</h1>
    <input placeholder = 'Usuario 'type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
    <input placeholder = 'Password'type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
    <button onClick={ingresar}>Ingresar</button>
     </>
  )
}
export default App
