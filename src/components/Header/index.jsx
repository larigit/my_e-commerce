import { useState } from 'react';
import { Link } from 'react-router-dom';

import foodIcon from '../../assets/images/foodIcon.png';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import './header.css';


const Header = () => {
    const [like, setLike] = useState(false);

    return(
        <div className="navbar">
            <div className="header">
                <div className="header__logo">
                    <img src={foodIcon} alt="icone de comida da logo do food commerce"/>
                    <h1>food commerce</h1>
                </div>
                <div className="search">
                    <form action="" className="form" id="form">
                        <button type="submit" className="button"><SearchIcon/></button>
                        <input placeholder="o que você procura?" type="text" className="input" id="input"/>
                    </form>
                </div>
                <div className="header__reactions">
                    <div className="header__like">
                        <button onClick={() => setLike(!like)}>{like ? <FavoriteIcon style={{ fontSize: 28, color: "white" }}/> : <FavoriteBorderIcon style={{ fontSize: 28 }}/>}</button>
                    </div>
                    <div className="header__cart">
                        <button><ShoppingCartOutlinedIcon style={{ fontSize: 28 }}/></button>
                        <div><p>0</p></div>
                    </div>
                    <div className="header__contact">
                        <button><PhoneInTalkOutlinedIcon style={{ fontSize: 28 }} /></button>
                    </div>
                </div>
            </div>
            <div className="nav">
                <Link to="/" className="nav__link">Home</Link>
                <Link to="/restaurants" className="nav__link">Restaurantes</Link>
                <Link to="/acknowledgment" className="nav__link">Agradecimentos</Link>
            </div>
        </div>
    )
}

export default Header;