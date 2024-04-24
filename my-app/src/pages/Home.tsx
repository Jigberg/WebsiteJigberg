import React from "react";
import rotateSVG from "../resources/Courage.svg";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <img
        src={rotateSVG}
        className="max-w-full max-h-full animate-[spin_20s_linear_infinite]"
        alt="Courage"
      />
    </div>
  );
}

export default Home;
