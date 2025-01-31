import './link.css'

const Link = ({name, value, icon}) => {
    return (
        <div className="link">
            <div className='link_info'>
                <p className='link_name'>{name}</p>
                <p className='link_value'>{value}</p>
            </div>
        </div>
    )
}

export default Link