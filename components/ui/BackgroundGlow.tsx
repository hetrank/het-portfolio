export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">

      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[160px]" />

      <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[170px]" />

      <div className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[150px]" />

    </div>
  );
}

