import React from "react";
import AnimatedCursor from "react-animated-cursor";

type Props = {};

const AnimCursor = (props: Props) => {
  return (
    <AnimatedCursor
      color="185, 118, 17"
      innerSize={10}
      outerSize={40}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      outerStyle="mix-blend-mode: difference;"
      innerStyle="mix-blend-mode: difference;"
    />
  );
};

export default AnimCursor;
