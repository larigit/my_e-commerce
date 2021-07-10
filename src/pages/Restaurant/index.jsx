import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card'

import {useParams} from 'react-router-dom'
const Restaurant = ({dado}) => {
    let { restaurant } = useParams();
    console.log((dado[0]&&dado[0].name.replaceAll(' ','').toLowerCase())===restaurant)
    return(
        <div>
            <Header />
           <p>{dado.map((item)=>(
               ((item&&item.name.replaceAll(' ','').toLowerCase()) === restaurant) 
               ?

               item.pratos.map(item=>(
                   <Card imagem={item.image} nome={item.name} categoria={`R$ ${item.price}`}/>

               ))
               
               :
               
               false

               
           ))}  
            </p>
            <Footer />
            
        </div>
    )
}

export default Restaurant;
