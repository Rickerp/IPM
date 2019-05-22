import React, { useState } from "react";
import { Spring, animated as a, config } from "react-spring/renderprops";

const AnimatedImage = (props) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Spring
      native
      from={{ scale: 1 }}
      to={{ scale: pressed ? 0.8 : 1 }}
      config={config.wobbly}
    >
      {({ scale }) => (
        <a.img
          style={{
            transform: scale.interpolate(scale => `scale(${scale})`)
          }}
          onMouseDown={() => setPressed(true)}
          onClick={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          src={props.image} alt={props.name}
        >
        </a.img>
      )}
    </Spring>
  );
};

export default AnimatedImage
