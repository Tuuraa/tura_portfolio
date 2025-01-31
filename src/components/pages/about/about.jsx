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
                {data.about ? (<p>{data.about}</p>) : (
                <p>Информация о проекте отсутствует.</p>)}
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
