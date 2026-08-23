import Nav from "./components/Nav";
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
    </>
  );
}
