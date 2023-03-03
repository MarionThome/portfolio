import Image from "next/image";
import { useState } from "react";

export default function SocialMedia(props) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div style={{ position: "fixed", bottom: props.bottom, left: props.left }}>
      <Image
        src={props.src}
        alt={props.name}
        width={50}
        height={50}
        style={{ cursor: "pointer", opacity: isHover ? 1 : 0.6 }}
        onClick={() => openInNewTab(props.url)}
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}
