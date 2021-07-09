// import { Link } from 'react-router-dom'

import './card.css'
import avancar from '../../assets/images/avancar.png'


const Card = (props) => {
return(
    <div className="card">
            <img src={props.imagem} alt={props.alt}/>
        <div className="card__info">
            <p className="card__title">{props.nome}</p>
            <p className="card__descrip">{props.categoria}</p>
            <div className="card__avancar">
                <p >Clique para conhecer</p>
                <button><img src={avancar} alt="avançar"/></button>
            </div>
        </div>
    </div>
)

}

export default Card;
