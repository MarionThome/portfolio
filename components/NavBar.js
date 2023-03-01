import { createContext, useRef, useContext } from 'react';
import { ComponentContext } from '../context/ComponentContext';

export default function NavBar(props){
    const aboutRef = useContext(ComponentContext);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    return(
    <nav style={{display : "flex", width : "100vw", justifyContent : "space-around" }}>
        <p onClick={scrollToAbout}>About</p>
        <p>Skills & projects</p>
        <p>Contact</p>
    </nav>)
}