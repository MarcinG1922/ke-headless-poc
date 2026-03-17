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
            <h1 className="hero-title">Wiodąca hurtownia <span>elektrotechniczna</span></h1>
            <p className="hero-subtitle">
              Szeroki asortyment, wsparcie inżynieryjne dla przemysłu i baza wiedzy dla instalatorów. 
              Dołącz do profesjonalistów w ponad 100 punktach w Polsce.
            </p>
            <div className="hero-buttons">
              <a href="https://sklep.ke.pl/" className="btn btn-primary" target="_blank" rel="noreferrer">Panel Zamówień B2B</a>
              <a href="#oferta" className="btn btn-outline" style={{color: "white", borderColor: "white"}}>Zobacz ofertę</a>
            </div>
          </div>
        </section>

        {/* Specjalna oferta dla firm */}
        <section id="oferta" className="section container">
          <h2 className="section-title">Kompleksowa Oferta dla Biznesu</h2>
          <div className="offers-grid">
            
            <div className="offer-card solid-panel">
              <div className="offer-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="offer-title">Elektroinstalatorzy</h3>
              <p className="offer-desc">Zapewniamy pełną dostępność sprzętu rozdzielczego, osprzętu elektroinstalacyjnego oraz kabli.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

            <div className="offer-card solid-panel">
              <div className="offer-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="offer-title">Przemysł</h3>
              <p className="offer-desc">Automatyka przemysłowa, napędy i czujniki od wiodących producentów, wraz ze wsparciem doradczym inżynierów.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

            <div className="offer-card solid-panel">
              <div className="offer-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="offer-title">Energetyka i OZE</h3>
              <p className="offer-desc">Urządzenia do stacji transformatorowych, rozdzielnice SN/nN oraz kompletne wsparcie w branży fotowoltaiki.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

            <div className="offer-card solid-panel">
              <div className="offer-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="offer-title">Oświetlenie</h3>
              <p className="offer-desc">Oprawy inwestycyjne i przemysłowe, przeprowadzanie audytów oświetleniowych oraz zaawansowane projekty dla hal.</p>
              <a href="#" className="offer-link">Poznaj szczegóły &rarr;</a>
            </div>

          </div>
        </section>

        {/* Strefa Wiedzy */}
        <section id="strefa-wiedzy" className="section section-gray">
          <div className="container">
            <h2 className="section-title">Strefa Wiedzy &middot; Baza Ekspertów</h2>
            <div className="knowledge-grid">
              
              <article className="knowledge-card">
                <div style={{height: '220px', backgroundColor: '#e0e0e0', position: 'relative'}}>
                   <span className="k-category webinar" style={{position: 'absolute', top: '16px', left: '16px'}}>Webinar</span>
                </div>
                <div className="knowledge-content">
                  <h3 className="knowledge-title">Efektywność energetyczna: Nowoczesne stacje transformatorowe w zakładach produkcyjnych</h3>
                  <p className="knowledge-excerpt">Praktyczne szkolenie on-line dla inżynierów utrzymania ruchu i projektantów sieci. Poznaj wymagania Dyrektywy Ecodesign i sposoby ograniczania strat.</p>
                  <a href="#" className="offer-link">Zapisz się &rarr;</a>
                </div>
              </article>

              <article className="knowledge-card">
                <div style={{height: '220px', backgroundColor: '#e0e0e0', position: 'relative'}}>
                   <span className="k-category" style={{position: 'absolute', top: '16px', left: '16px'}}>Artykuł Specjalistyczny</span>
                </div>
                <div className="knowledge-content">
                  <h3 className="knowledge-title">Dobór aparatury zabezpieczającej dla instalacji PV i magazynów energii (OZE)</h3>
                  <p className="knowledge-excerpt">Jak poprawnie zaprojektować zabezpieczenia nadprądowe DC/AC by zapewnić bezpieczeństwo długoterminowej zyskowności instalacji odnawialnych.</p>
                  <a href="#" className="offer-link">Czytaj wpis &rarr;</a>
                </div>
              </article>
              
              <article className="knowledge-card">
                <div style={{height: '220px', backgroundColor: '#e0e0e0', position: 'relative'}}>
                   <span className="k-category" style={{position: 'absolute', top: '16px', left: '16px'}}>Studium przypadku (Case Study)</span>
                </div>
                <div className="knowledge-content">
                  <h3 className="knowledge-title">Modernizacja oświetlenia hali przemysłowej o powierzchni 10 tys. m2</h3>
                  <p className="knowledge-excerpt">Dzięki współpracy naszych inżynierów oraz producenta Philips, zużycie energii w zakładzie X spadło o 64%, przy zwrocie inwestycji w 23 miesiące.</p>
                  <a href="#" className="offer-link">Zobacz realizację &rarr;</a>
                </div>
              </article>

            </div>
            
            <div style={{textAlign: 'center', marginTop: '48px'}}>
              <a href="#" className="btn btn-primary">Przejdź do pełnej bazy wiedzy</a>
            </div>
          </div>
        </section>

        {/* Dostawcy strategiczni */}
        <section id="dostawcy" className="section container" style={{paddingBottom: '80px'}}>
          <h2 className="section-title">Współpracujemy z najlepszymi branży</h2>
          <div className="suppliers">
            <div className="supplier-track">
              {/* Zastępcze loga jako czysty tekst - imitacja wektorów */}
              <div className="supplier-logo">Schneider Electric</div>
              <div className="supplier-logo">Signify/Philips</div>
              <div className="supplier-logo">Legrand</div>
              <div className="supplier-logo">F&amp;F</div>
              <div className="supplier-logo">Eaton</div>
              <div className="supplier-logo">Wago</div>
              <div className="supplier-logo">Siemens</div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
