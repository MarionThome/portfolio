import Image from "next/image"
import { useState } from "react"

export default function Techno(props){
    const [isSelected, setSelected] = useState(false)

    const handleSelected = () => {
        setSelected(!isSelected)
        props.handleClick(props.name)
    }

    return (
        <Image
                  src={props.image}
                  alt={`${props.name} logo`}
                  width={60}
                  height={60}
                  style={{ cursor: "pointer", opacity : isSelected ? "1" :  "0.5"}}
                  onClick = {() => handleSelected()}
                ></Image>
    )
}