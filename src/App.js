import SidePanel from "./components/SidePanel";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex min-h-screen bg-[#0b0f1a] text-white">
      <SidePanel />
      <main className="flex-1 p-10">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
