import { ThreeCircles } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 border border-white/10 rounded-3xl shadow-2xl p-6">
      <div className="flex flex-col items-center gap-4">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#38bdf8" // آبی روشن
          ariaLabel="three-circles-loading"
        />
        <p className="text-white/90 text-lg font-semibold drop-shadow-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
