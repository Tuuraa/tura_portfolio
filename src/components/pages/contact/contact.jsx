import ContactForm from '../../contact_form/contact_form';
import './contact.css'
import { YMaps, Map } from "react-yandex-maps";

const Contact = () => {
    return (
        <div className='contact'>
            <p className='contact-text'>Here will be reflected my entire path in the field of information technology: from the first steps and mastering basic skills to achieving significant results, participating in complex projects and constant development in this dynamic and rapidly changing industry</p>
            <YMaps>
                <Map  className='y_map'
                    defaultState={{ center: [45.0448, 38.976], zoom: 9 }} 
                />
            </YMaps>

            <ContactForm/>
        </div>
    )
}


export default Contact