import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <main className="box-border  font-lato leading-normal tracking-wider text-grey-1">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Tours />
    </main>
  );
}

export default App;
