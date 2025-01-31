import './about.css'
import Skill from '../../skill/skill';
import { useEffect, useState } from 'react';

function About() {
    const [data, setData] = useState(null);
    const skillsData = [
        {
            "img_source": "https://aakashrajbanshi.com.np/assets/images/icon-app.svg",
            "title": "Flutter",
            "desc": "I'm a Flutter developer"
        },
        {
            "img_source": "https://aakashrajbanshi.com.np/assets/images/icon-dev.svg",
            "title": "Web development",
            "desc": "High-quality development of sites at the professional level"
        },
        {
            "img_source": "https://aakashrajbanshi.com.np/assets/images/icon-design.svg",
            "title": "UI/UX Design",
            "desc": "The most modern and high-quality design made at a professional level."
        }
    ]

    useEffect(() => {
        fetch('/info.json')
        .then(response => response.json())
        .then(data => {
            console.log('Данные успешно получены:', data);
            setData(data);
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
    }, []);

    if (!data) {
        return <p>Загрузка...</p>;
    }

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
