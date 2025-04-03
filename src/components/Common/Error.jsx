import Lottie from "lottie-react";
import ErrorAnimation from "../Assets/ErrorAnimation";

export default function Error({ error }) {
  console.log(error);
  return (
    <>
      <Lottie animationData={ErrorAnimation} loop={true} />
    </>
  );
}
