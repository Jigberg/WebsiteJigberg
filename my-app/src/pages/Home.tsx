import React from "react";
import Courage from "../resources/Courage.svg";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <img
        src={Courage}
        className="max-w-full max-h-full animate-[spin_20s_linear_infinite]"
        alt="Courage"
      />
    </div>
  );
}

export default Home;
