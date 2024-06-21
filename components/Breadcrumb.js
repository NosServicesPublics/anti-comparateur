import Link from 'next/link'

export default function Breadcrumb() {
  return (
    <Link
      href='/'
      className='breadcrumb'
    >Retour à l&apos;accueil</Link>
  )
}