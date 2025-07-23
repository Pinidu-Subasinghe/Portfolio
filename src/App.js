import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Header />
      <main className="p-10">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
