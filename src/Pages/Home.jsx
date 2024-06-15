import {useEffect, useState} from "react";

import portfoliopic from "../portfliopic.png";
const Home = () => {

    const [className, setClassName] = useState("light")
    const [isHovered, setIsHovered] = useState(false);
    const [aboutMeActive, setAboutMeActive] = useState([])

    const Info = {
        text: 'I like pie',
        picture: portfoliopic
    }

    const Projects = {
        text: "Here's my projects"
    }

    useEffect(() => {
        const color = localStorage.getItem('color')
        setClassName(color)
        setAboutMeActive(Projects)
    }, []);

    function changeColor() {
        if (className === 'light') {
            setClassName("dark")
            localStorage.setItem('color', 'dark')
        } else {
            setClassName("light")
            localStorage.setItem('color', 'light')
        }
    }

    function setAboutMeToProjects() {
        setAboutMeActive(Projects)
    }

    function setAboutMeToInfo() {
        setAboutMeActive(Info)
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '5%'}}>
                <h1 style={{marginTop: 0, fontSize: '50px', fontFamily: 'Open Sans', fontWeight: 300}}>Andy Nees</h1>
                <h2 style={{fontFamily: 'Open Sans', fontWeight: 300, marginTop: -24}}>Full Stack Engineer</h2>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',  padding: '5%'}}>
                <h2 onClick={setAboutMeToProjects} className={'about'}>Projects</h2>
                <h2 onClick={setAboutMeToInfo} className={'about'}>Info</h2>
            </div>
            <div>
                <h1>{aboutMeActive.text}</h1>
            </div>
        </div>
    )
}

export default Home;