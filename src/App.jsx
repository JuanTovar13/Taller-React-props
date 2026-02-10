import { Card } from './components/Banner/Card'
import './App.css'

export const App = () => {
  
  

  return (
    <div className='products'>
      <Card  nombre={'Libro'} precio={`$${20000}`} descripcion={'libro guia sobre supervivencia'} image={'https://images.cdn1.buscalibre.com/fit-in/360x360/5b/b6/5bb6d44f4f631530cb4e280ceba0241e.jpg'}></Card>
      <Card  nombre={'Televisor'} precio={`$${8000000}`} descripcion={'televisor pantalla plana'}image={'https://miempresa.oficinapro.co/images/abcd4321/large/603_0.jpg'}></Card>
      <Card  nombre={'Cuaderno'} precio={`$${5000}`} descripcion={'cuaderno cuadriculado 50 hojas'} image={'https://exitocol.vtexassets.com/arquivos/ids/26110436/Cuaderno-Cuadriculado-50-hojas-Cosido-PRIMAVERA-3569434_a.jpg?v=638711944045230000'}></Card>
      
    </div>
  )
}


