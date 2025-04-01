import Lottie from "lottie-react";
import ErrorAnimation from "../Assets/ErrorAnimation";

export default function Error({ error }) {
  console.log(error.message);
  return (
    <>
      <Lottie animationData={ErrorAnimation} loop={true} />
      <p>{error.message}</p>
    </>
  );
}
