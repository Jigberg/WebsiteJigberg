import React from "react";
import Courage from "../resources/Courage.svg";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex items-center justify-center w-full ">
        <img
          src={Courage}
          className="w-4/6 animate-[spin_20s_linear_infinite] md:w-96"
          alt="Courage"
        />
      </div>
      <div className="h-screen flex items-center justify-center w-full ">
        <img
          src={Courage}
          className="w-4/6 animate-[spin_20s_linear_infinite] md:w-96"
          alt="Courage"
        />
      </div>
    </div>
  );
}

export default Home;
