import Nav from "./components/Nav";
import ThemePicker from "./components/ThemePicker";
import Hero from "./components/Hero";
import { Contact, Footer, Projects, Services, Stack, Work } from "./components/Sections";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Work />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ThemePicker />
    </>
  );
}
