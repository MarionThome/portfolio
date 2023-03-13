import Image from "next/image"

export default function Techno(props){

    return (
        <Image
                  src={props.image}
                  alt={`${props.name} logo`}
                  width={60}
                  height={60}
                  style={{ cursor: "pointer"}}
                ></Image>
    )
}