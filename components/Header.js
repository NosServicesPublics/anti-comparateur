import Image from "next/image";
import Link from "next/link";

const logoSrc = "/img/nsp-logo.svg";

export default function Header() {
  return (
    <header className='site-header main-column'>
      <Link className="site-branding" href="/">
        <div className="site-logo" >
          <Image
            priority
            src={logoSrc}
            alt="Logo du collectif Nos services publics"
            width={72}
            height={72}
          />
        </div >
        <div className="site-title">
          LE&nbsp;COMPARATEUR DE&nbsp;PROGRAMME
        </div>
      </Link>
      <nav className="site-nav" role="navigation" aria-label="Menu principal">
        <ul>
          <li>
            <Link href="/a-propos">
              À&nbsp;propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}