import { RotatingLines } from "react-loader-spinner";

export default function RotatingLine() {
  return (
    <div className="absolute w-full inset-0 flex flex-col items-center justify-center gap-3 bg-[#23242e]/90 backdrop-blur-sm rounded-md shadow-md transition-all duration-300">
      <RotatingLines
        visible={true}
        height="70"
        width="70"
        color="#3ba3d9"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      <span className="text-gray-300 text-sm font-medium animate-pulse">
        Loading...
      </span>
    </div>
  );
}
