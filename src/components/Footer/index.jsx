import facebook from '../../assets/images/facebook.svg' 
import instagram from '../../assets/images/instagram.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import check from '../../assets/images/check.svg'
import './footer.css'

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer__contacts">
                <p>ENCONTRE-NOS EM</p>
                <div className="contact__icons">
                    <a href="#"><img src={facebook} alt="icone do facebook"/></a>
                    <a href="#"><img src={instagram} alt="icone do instagram"/></a>
                    <a href="#"><img src={whatsapp} alt="icone do whatsapp"/></a>
                </div>
            </div>
            <div className="form__user">
                <p>NÃO PERCA NENHUMA NOVIDADE</p>
                <form action="" className="footer__form" id="form">
                    <input placeholder="nome" type="text" className="footer__input" id="input"/>
                    <input placeholder="deixe seu e-mail" type="text" className="footer__input" id="input"/>
                    <button><img src={check} alt="icone do check"/></button>
                </form>
            </div>
        </div>

    )
}

export default Footer;