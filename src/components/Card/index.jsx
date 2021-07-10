import { Link, useRouteMatch } from 'react-router-dom'
import './card.css'
import avancar from '../../assets/images/avancar.png'


const Card = (props) => {
    let { url } = useRouteMatch();
return(
    <div className="card">
            <img src={props.imagem} alt={props.alt}/>
        <div className="card__info">
            <p className="card__title">{props.nome}</p>
            <p className="card__descrip">{props.categoria}</p>
            <div className="card__avancar" style={{display:props.display}}>
                <p >Clique para conhecer</p>
                <Link to={`${url}/${props.nome&&props.nome.replaceAll(' ','').toLowerCase()}`}><img src={avancar} alt="avançar"/></Link>
            </div>
        </div>
    </div>
)

}

export default Card;
