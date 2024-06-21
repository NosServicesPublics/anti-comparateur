import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className='site-header main-column'>
      <div className="site-branding">
        <div className="site-logo">
          <Image
            src="/nsp-logo.svg"
            alt="Logo du collectif Nos services publics"
            width={100}
            height={100}
          />
        </div>
        <div className="site-title">
          LE COMPARATEUR DE PROGRAMME
        </div>
      </div>
      <nav className="site-nav" role="navigation" aria-label="Menu principal">
        <ul>
          <li>
            <Link href="/a-propos">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}