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
              <li><Link href="#">Oddziały</Link></li>
              <li><Link href="#">Kariera</Link></li>
              <li><Link href="#">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Oferta</h4>
            <ul className="footer-links">
              <li><Link href="#">Elektroinstalatorzy</Link></li>
              <li><Link href="#">Przemysł</Link></li>
              <li><Link href="#">Energetyka i fotowoltaika</Link></li>
              <li><Link href="#">Oświetlenie</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Sklep B2B</h4>
            <ul className="footer-links">
              <li><Link href="#">Platforma handlowa</Link></li>
              <li><Link href="#">Promocje</Link></li>
              <li><Link href="#">Regulamin</Link></li>
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
