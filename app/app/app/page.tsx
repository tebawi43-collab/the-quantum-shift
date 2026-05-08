export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#0a0a0a]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-900 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-900 lg:p-4">
          Status: <code className="font-bold text-green-500 ml-2">System Online</code>
        </p>
      </div>

      <div className="text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
          THE QUANTUM SHIFT
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Elite AI Diagnostic for US Market Social Media Growth & High-Ticket Sales.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 rounded-2xl border border-gray-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition">
          <h2 className="text-xl font-bold mb-2">Growth Diagnostic</h2>
          <p className="text-gray-500">Analyze viral patterns and US audience behavior.</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition">
          <h2 className="text-xl font-bold mb-2">Sales Psychology</h2>
          <p className="text-gray-500">Close deals with aggressive high-ticket closing logic.</p>
        </div>
      </div>
    </main>
  );
}
