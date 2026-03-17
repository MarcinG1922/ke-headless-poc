import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Rozświetlamy Polskę</h1>
            <p className="hero-subtitle">
              Kaczmarek Electric to ogólnopolska sieć ponad 100 hurtowni elektrotechnicznych i elektromarketów. 
              Dostarczamy kompleksowe rozwiązania dla każdego sektora.
            </p>
            <div className="hero-buttons">
              <a href="#oferta" className="btn btn-primary">Zobacz naszą ofertę</a>
              <a href="https://sklep.ke.pl/" className="btn btn-secondary" target="_blank" rel="noreferrer">Przejdź do sklepu</a>
            </div>
          </div>
        </section>

        {/* Specjalna oferta dla firm */}
        <section id="oferta" className="section container">
          <h2 className="section-title">Specjalna oferta dla firm</h2>
          <div className="offers-grid">
            
            <div className="offer-card glass-panel">
              <div className="offer-icon">⚡</div>
              <h3 className="offer-title">Elektroinstalatorzy</h3>
              <p className="offer-desc">Pełen asortyment produktów, specjalne warunki handlowe i dedykowane wsparcie dla profesjonalistów.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

            <div className="offer-card glass-panel">
              <div className="offer-icon">🏭</div>
              <h3 className="offer-title">Przemysł</h3>
              <p className="offer-desc">Kompleksowa oferta produktów i usług dostosowana do najwyższych wymogów zakładów przemysłowych.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

            <div className="offer-card glass-panel">
              <div className="offer-icon">☀️</div>
              <h3 className="offer-title">Energetyka i OZE</h3>
              <p className="offer-desc">Projekty, serwis i profesjonalne doradztwo techniczne w zakresie inwestycji fotowoltaicznych.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

            <div className="offer-card glass-panel">
              <div className="offer-icon">💡</div>
              <h3 className="offer-title">Oświetlenie</h3>
              <p className="offer-desc">Pełna obsługa na każdym etapie – od projektowania po dostarczanie optymalnych, opłacalnych rozwiązań.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

          </div>
        </section>

        {/* Dostawcy strategiczni */}
        <section id="dostawcy" className="suppliers">
          <div className="container">
            <h2 className="section-title">Nasi partnerzy strategiczni</h2>
            <div className="supplier-track">
              {/* Zastępcze loga dla POC */}
              <div className="supplier-logo">Schneider Electric</div>
              <div className="supplier-logo">Philips</div>
              <div className="supplier-logo">Legrand</div>
              <div className="supplier-logo">F&amp;F</div>
              <div className="supplier-logo">Eaton</div>
              <div className="supplier-logo">Kanlux</div>
            </div>
          </div>
        </section>

        {/* Firma z pasją - Headless Posts Mockup */}
        <section id="blog" className="section blog-section">
          <div className="container">
            <h2 className="section-title">Firma z pasją (Nowości)</h2>
            <div className="blog-grid">
              
              <article className="blog-card">
                <div className="blog-image"></div>
                <div className="blog-content">
                  <span className="blog-date">03/10/2023</span>
                  <h3 className="blog-title">Grand Prix Kaczmarek Electric MTB na mecie w Wolsztynie</h3>
                  <a href="#" className="offer-link">Czytaj dalej &rarr;</a>
                </div>
              </article>

              <article className="blog-card">
                <div className="blog-image"></div>
                <div className="blog-content">
                  <span className="blog-date">07/06/2023</span>
                  <h3 className="blog-title">SMART HOME – nowoczesny dom, w którym czujemy się komfortowo i bezpiecznie</h3>
                  <a href="#" className="offer-link">Czytaj dalej &rarr;</a>
                </div>
              </article>
              
              <article className="blog-card">
                <div className="blog-image"></div>
                <div className="blog-content">
                  <span className="blog-date">15/05/2023</span>
                  <h3 className="blog-title">Elektroklub – Jesień pełna energii i dodatkowy rok gwarancji na Altivar</h3>
                  <a href="#" className="offer-link">Czytaj dalej &rarr;</a>
                </div>
              </article>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
