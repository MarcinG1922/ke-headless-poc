import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Kaczmarek<span>Electric</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="#oferta">Nasza oferta</Link></li>
            <li><Link href="#dostawcy">Dostawcy</Link></li>
            <li><Link href="#blog">Firma z pasją</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link href="https://sklep.ke.pl/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Sklep B2B
          </Link>
        </div>
      </div>
    </header>
  );
}
