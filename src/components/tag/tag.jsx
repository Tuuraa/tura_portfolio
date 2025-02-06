import './tag.css'

const Tag = ({ title }) => {

    return (
        <div className="tag">
            <p className='tag-text'>{title}</p>
        </div>
    );
}

export default Tag