import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import News from "./components/news/News";

import "./index.scss";

function App() {
  return (
    <div className="home page__flexblock">
      <Header />
      <section className="home__section home__section--hero">
        <Hero />
      </section>
      <News />
      <Footer />
    </div>
  );
}
export default App;
