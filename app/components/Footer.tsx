import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-title">Kaczmarek Electric</h4>
            <ul className="footer-links">
              <li><Link href="#">O firmie</Link></li>
              <li><Link href="#">Oddziały (Sieć Sprzedaży)</Link></li>
              <li><Link href="#">Kariera</Link></li>
              <li><Link href="#">Kontakt z Centralą</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Oferta Specjalistyczna</h4>
            <ul className="footer-links">
              <li><Link href="#">Elektroinstalatorzy</Link></li>
              <li><Link href="#">Przemysł i Automatyka</Link></li>
              <li><Link href="#">Energetyka i Fotowoltaika</Link></li>
              <li><Link href="#">Oświetlenie profesjonalne</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Strefa Wiedzy</h4>
            <ul className="footer-links">
              <li><Link href="#">Blog Ekspercki</Link></li>
              <li><Link href="#">Webinary i Szkolenia</Link></li>
              <li><Link href="#">Baza Wiedzy</Link></li>
              <li><Link href="#">Case Studies</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kaczmarek Electric S.A. Proof of Concept dla Headless WP.</p>
        </div>
      </div>
    </footer>
  );
}
