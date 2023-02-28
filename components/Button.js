import { useState } from "react";

export default function Button(props) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <button
      style={{
        backgroundColor: "#141c1f",
        border: "1px solid",
        borderBlockColor : isHover ? "#f8f0de" : "#2f845E",
        padding: "15px 50px",
        marginTop: "50px",
        cursor: "pointer",
        color : isHover && "#f8f0de"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.name}
    </button>
  );
}
