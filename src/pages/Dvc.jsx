import React from "react";
import Box from "../components/Box";
import Verticalline from "../components/Verticalline";
import Dot from "../components/Dot";
import Textcommit from "../components/Textcommit";

function Dvc() {
  return (
    <>
      <div className="relative h-screen  grid  content-end pb-5 items-center justify-center">
      
        <div className="container  relative  mx-[155px]">
        <div className="absolute -left-[27%]  -top-[520%]">
      <Dot color="bg-blue-500" />
      </div>
          <Textcommit text="34j3we5 commit" />
          <div className="container  absolute left-12  -bottom-2">
            <Verticalline
              height="h-[115px]"
              width="w-[5px]"
              rotate="rotate-45"
            />
          </div>
          <div className="container  absolute right-10  -bottom-2">
            <Verticalline
              height="h-[115px]"
              width="w-[5px]"
              rotate="-rotate-45"
            />
          </div>
          <Dot color="bg-green-500" />
          <span className="absolute left-14 -bottom-3  ">
            <Box text="Your Data Now" color="bg-yellow-500" />
          </span>
        </div>
        <div className="container  relative  mx-40">
          <Verticalline height="h-[70px]" width="w-[5px]" rotate="rotate-0" />
        </div>
        <div className="container  relative  mx-[155px]">
          <Textcommit text="15bwe45 commit" />

          <Dot color="bg-green-500" />
          <span className="absolute left-14 -bottom-3  ">
            <Box text="Your Data Now" color="bg-yellow-500" />
          </span>
        </div>
        <div className="container  relative  mx-40">
          <Verticalline height="h-[70px]" width="w-[5px]" rotate="rotate-0" />
        </div>

        <div className="container  relative   mx-20">
          <Box text="Your Data" color="bg-blue-700" />
        </div>
      </div>
    </>
  );
}

export default Dvc;
