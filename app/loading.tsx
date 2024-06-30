export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="relative w-16 h-16">
    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-esperanza_cyan_blue animate-pulse"></div>
    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-esperanza_cyan_blue animate-spin"></div>
    </div>
    <div className="mt-5 text-2xl text-esperanza_cyan_blue font-sans uppercase text-center">
      Loading...
    </div>
  </div>
  );
}