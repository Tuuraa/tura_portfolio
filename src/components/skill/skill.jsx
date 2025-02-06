import './skill.css';

const Skill = ({img_source, title, desc}) => {
    return (
        <div className="skill">
            <div className='skill_img'>
                <img src={img_source} alt={title} />
            </div>
            
            <div className='skill_info'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Skill