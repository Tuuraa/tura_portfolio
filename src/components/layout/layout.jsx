import Sidebar from '../sidebar/sidebar'
import Content from '../content/content'
import './layout.css'

const Layout = () => {
    return (
        <div className='layout'>
            <Sidebar className='layout_sidebar'/>
            <Content className='layout_content'/>
        </div>
    )
}

export default Layout