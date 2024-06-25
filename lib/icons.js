import Img from "next/image";

const QuoteChevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
  </svg>
);

export const Icons = {
  QuoteChevron,
}

import autonomie from "@/public/img/pictos/autonomie.svg";
import ecole from "@/public/img/pictos/education.svg";
import energie from "@/public/img/pictos/energie.svg";
import impots from "@/public/img/pictos/finance.svg";
import sante from "@/public/img/pictos/sante.svg";
import transport from "@/public/img/pictos/transport.svg";
import logement from "@/public/img/pictos/logement.svg";
import justice from "@/public/img/pictos/justice.svg";
import security from "@/public/img/pictos/securite.svg";

export function getPicto(key) {
  const pictoImg = getPictoImg(key);
  return (
    <div className="thematique-picto">
      <Img
        src={pictoImg}
        aria-hidden="true"
        alt={key}
      />
    </div>
  )
}

export function getPictoImg(key) {
  switch (key) {
    case "autonomie":
      return autonomie;
    case "education":
      return ecole;
    case "energie":
      return energie;
    case "fiscalite":
      return impots;
    case "sante":
      return sante;
    case "transports":
      return transport;
    case "logement":
      return logement;
    case "justice":
      return justice;
    case "securite":
      return security;
    default:
      return null;
  }
}