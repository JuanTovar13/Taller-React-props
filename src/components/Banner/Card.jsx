
import './Card.css'



export const Card = ({nombre, precio, descripcion, image}) => {


    return(
        <div className='card'>
            <img className='image' src={image}></img>
            <h1>{nombre}</h1>
            <h2>{precio}</h2>
            <p>{descripcion}</p>
            
        </div>
        
    )
}