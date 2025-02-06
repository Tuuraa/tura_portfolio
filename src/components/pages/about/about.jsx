import './about.css'
import Skill from '../../skill/skill';

function About() {
    const skillsData = [
        {
            "img_source": "https://aakashrajbanshi.com.np/assets/images/icon-app.svg",
            "title": "Flutter",
            "desc": "I develop flutter applications at an intermediate level, from scratch."
        },
        {
            "img_source": "https://aakashrajbanshi.com.np/assets/images/icon-dev.svg",
            "title": "Web development",
            "desc": "I have experience developing websites on the React framework."
        },
        {
            "img_source": "https://aakashrajbanshi.com.np/assets/images/icon-design.svg",
            "title": "UI/UX Design",
            "desc": "I like to develop beautiful web interfaces for websites in Figma."
        }
    ]


    return (
        <div className='about'>
            <div className='about_info'>
                <p>
                A passionate Flutter developer with strong expertise in cross-platform apps,
                 REST APIs, UI/UX, widgets, and state management solutions. 
                 Proven track record in delivering cutting-edge solutions, 
                 including API integration, third-party libraries, and performance 
                 optimization. Adept at debugging to ensure high-quality, responsive 
                 apps and An agile collaborator committed to staying current with industry 
                 trends.
                </p>
                <br/>
                <p>
                    If you're seeking a skilled Flutter developer to breathe life into 
                 your project and exceed your expectations, I am here to collaborate and create magic together.
                 Reach out, and let's transform your vision into a reality!
                </p>
            </div>

            <div className='about_skills'>
                <h2>What I'm Doing</h2>
                <div className='about_skills_list'>
                    {skillsData.map((skill, index) => (
                    <Skill key={index} img_source={skill.img_source} title={skill.title} desc={skill.desc}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
