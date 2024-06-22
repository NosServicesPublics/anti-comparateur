import Link from 'next/link'
import { RiArrowLeftLine } from "react-icons/ri";

export default function BackBreadcrumb({ href = '/', label = 'Retour à l\'accueil' }) {
  return (
    <div className='back-breadcrumb'>
      <RiArrowLeftLine />
      <Link
        href={href}
      >
        {label}
      </Link>
    </div>
  )
}