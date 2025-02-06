import Tag from '../../tag/tag'
import './resume.css'

const Resume = () => {
    const tags = [
        "JavaScript", "SQL", "MySQL", "C#", "OOP", ".NET Core", "CSS", "Django Rest Framework", "HTML5",
        "CSS3", "Algorithmization", "Frameworks", "Data Structures", "Software Development", "Databases",
        "Git", "Python", "SOLID", "MVVM", "MVC", "REST API",  "Next.js", "React", "Entity Framework",
        "Linux", "Code Refactoring", "Testing"
    ];

    return (
        <div className='resume'>
            <p className='resume-text'>Here will be reflected my entire path in the field of information technology: from the first steps and mastering basic skills to achieving significant results, participating in complex projects and constant development in this dynamic and rapidly changing industry</p>
            <h2>Tags:</h2>

            <div className='tags'>
                {tags.map((tag, index) => <Tag key={index} title={tag}/>)}
            </div>
            
            <div className='resume-download'>
                <a href="./files/Resume.pdf">Download Resume</a>
            </div>
        </div>
    )
}

export default Resume