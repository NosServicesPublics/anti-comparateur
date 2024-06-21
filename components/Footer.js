import Link from "next/link";

export default function Header() {
  return (
    <footer className='site-footer'>
      <Link href="/">
        Retour à l’accueil
      </Link>
        <Link href="https://nosservicespublics.fr/" target="_blank">
          Collectif Nos services publics
        </Link>
        <Link href="/mentions-legales">
          Mentions légales
        </Link>
    </footer>
  )
}