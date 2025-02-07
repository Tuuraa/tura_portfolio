import { useState } from 'react'
import Menu from '../menu/menu'
import './content.css'
import About from '../pages/about/about';
import Resume from '../pages/resume/resume';
import Contact from '../pages/contact/contact';


const Content = () => {
    const [activeMenuItem, setMenuItem] = useState('About');

    const selectionPage = {
        "About": <About/>,
        "Resume": <Resume/>,
        "Contact": <Contact/>
    }

    return (
        <div className='content'>
            <div className='content_header'>
                <h2>{activeMenuItem}</h2>
                <Menu className='content_menu' setMenuItem={setMenuItem}/>
            </div>
            <hr className='content_spliter'/>
            <div className='content_main'>
                {selectionPage[activeMenuItem]}
            </div>
        </div>
    )
}

export default Content