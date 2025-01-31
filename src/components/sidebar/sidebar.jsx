import Link from '../link/link'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar_info'>
                <div className="sidebar_icon">
                    <img src={process.env.PUBLIC_URL + '/images/icon.jpg'} 
                    alt="Tura" className='sidebar_icon_img' />
                </div>
                <div className='sidebar_name_info'>
                    <h2 className='sidebar_name'>Artur Kardanov</h2>
                    <div className='sidebar_programmer_info'>
                        <p>Full-Stack programmer</p>
                    </div>
                </div>
            </div>
            

            <hr className='sidebar_spliter'/>

            <ul className='sidebar_links'>
                <Link name='EMAIL' value='turapro3443@mail.ru' icon='E'/>
                <Link name='PHONE' value='+7 996 948 43 79' icon='P'/>
                <Link name='ADDRESS' value='Russia, Krasnodar' icon='A'/>

            </ul>
        </div>
    )
}

export default Sidebar