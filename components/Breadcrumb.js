import Link from 'next/link'
import { RiArrowLeftLine } from "react-icons/ri";

export default function Breadcrumb() {
  return (
    <div className='breadcrumb'>
      <RiArrowLeftLine />
      <Link
        href='/'
        className=''
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}