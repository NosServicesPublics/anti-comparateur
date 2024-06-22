import Link from "next/link";

export default function Footer() {
  return (
    <footer className='site-footer'>
      <nav aria-label="Menu de navigation secondaire">
        <ul>
          <li>
            <Link href="/">
              Retour à l’accueil
            </Link>
          </li>
          <li>
            <Link href="https://nosservicespublics.fr/" target="_blank">
              Collectif Nos services publics
            </Link>
          </li>
          <li>
            <Link href="/mentions-legales">
              Mentions légales
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}