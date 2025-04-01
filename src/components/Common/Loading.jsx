import Lottie from "lottie-react";
import LoadingAnimation from "../Assets/LoadingAnimation.json";

export default function Loading() {
  return (
    <>
      <Lottie animationData={LoadingAnimation} loop={true} />
      <p>...Loading</p>
    </>
  );
}
