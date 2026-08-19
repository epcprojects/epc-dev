"use client";

import { PulsingBorder } from "@paper-design/shaders-react";

type PulsingLabelProps = {
  text: string;
};

const PulsingLabel = ({ text }: PulsingLabelProps) => {
  return (
    <div className="relative isolate w-fit overflow-hidden rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px">
      <div className="pointer-events-none absolute inset-0 z-10">
        <PulsingBorder
          width="100%"
          height="100%"
          colors={["#8742ff", "#1a1a1a"]}
          colorBack="#00000090"
          roundness={0.38}
          thickness={0.04}
          softness={0.75}
          intensity={0.2}
          bloom={0.25}
          spots={1}
          spotSize={0.5}
          pulse={0.25}
          smoke={0.3}
          smokeSize={0.6}
          speed={1}
          scale={1}
        />
      </div>

      <div className="relative z-20 rounded-[7px] bg-mirage px-3.5 py-1.5">
        <p className="w-fit text-xl font-medium text-light-blue-gray">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PulsingLabel;