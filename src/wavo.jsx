import React from "react";
import Wave from "react-wavify";

function Wavo() {
  return (
    <div id="wave">
      <Wave
        fill="#abccff"
        paused={false}
        style={{ position: "fixed", bottom: -5, left: -0 }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 4,
        }}
      />
    </div>
  );
}
export default Wavo;
