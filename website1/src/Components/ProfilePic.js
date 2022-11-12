import { useState } from "react"

import Image from "react-bootstrap/Image"

export default () => {

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <a href="/profile">
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        shape="rounded"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          border: isHover ? "2px solid #198754" : "none"
        }}
      />
    </a>

  )
}