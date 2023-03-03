import { useContext } from 'react';
import { ComponentContext } from '../context/ComponentContext';

export default function NavBar(props){
    const componentRefs = useContext(ComponentContext);

    const scrollToComponent = (index) => {
        componentRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    };
    
    return(
    <nav style={{display : "flex", width : "100vw", justifyContent : "space-around" }}>
        <p onClick={() => scrollToComponent(0)}>About</p>
        <p onClick={() => scrollToComponent(1)}>Skills & projects</p>
        <p onClick={() => scrollToComponent(2)}>Contact</p>
    </nav>)
}