"use client";

import animationData from "../assets/lottie/developers.json";
import animationData1 from "../assets/lottie/Developer.json";
import { useLottie } from "lottie-react";

const MyLottieComponent = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="rounded-2xl shadow-xl w-full aspect-video object-contain">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export default MyLottieComponent;