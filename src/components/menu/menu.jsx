import './menu.css'
import { useState } from 'react'
import classNames from 'classnames'

const Menu = ({ setMenuItem}) => {

    const [isActiveIndex, setIsActiveIndex] = useState(0);
    const menuItems = ['About', 'Resume', 'Contact'];

    const handleClick = (index) => {
        setIsActiveIndex(index);
        setMenuItem(menuItems[index]);
    }

    return (
        <div className="menu">  
            {menuItems.map((item, index) => (
                <div key={index} className={classNames(
                    'menu_line',
                    {'is_active_menu': isActiveIndex === index}
                )} onClick={() => handleClick(index)}>{item}</div>
            ))}
        </div>
    )
}

export default Menu