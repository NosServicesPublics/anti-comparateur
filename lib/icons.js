const QuoteChevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
  </svg>
);
import autonomieMd from "@/public/img/pictos/autonomie-md.svg";
import autonomieSm from "@/public/img/pictos/autonomie-sm.svg";
import ecoleMd from "@/public/img/pictos/ecole-md.svg";
import ecoleSm from "@/public/img/pictos/ecole-sm.svg";
import energieMd from "@/public/img/pictos/energie-md.svg";
import energieSm from "@/public/img/pictos/energie-sm.svg";
import impotsMd from "@/public/img/pictos/impots-md.svg";
import impotsSm from "@/public/img/pictos/impots-sm.svg";
import santeMd from "@/public/img/pictos/sante-md.svg";
import santeSm from "@/public/img/pictos/sante-sm.svg";
import transportMd from "@/public/img/pictos/transport-md.svg";
import transportSm from "@/public/img/pictos/transport-sm.svg";
import logementMd from "@/public/img/pictos/logement-md.svg";
import logementSm from "@/public/img/pictos/logement-sm.svg";
import justiceMd from "@/public/img/pictos/justice-md.svg";
import justiceSm from "@/public/img/pictos/justice-sm.svg";
import securityMd from "@/public/img/pictos/securite-md.svg";
import securitySm from "@/public/img/pictos/securite-sm.svg";

export function getPicto(key, size) {
  switch (key) {
    case "autonomie":
      return size === "md" ? autonomieMd : autonomieSm;
    case "education":
      return size === "md" ? ecoleMd : ecoleSm;
    case "energie":
      return size === "md" ? energieMd : energieSm;
    case "fiscalite":
      return size === "md" ? impotsMd : impotsSm;
    case "sante":
      return size === "md" ? santeMd : santeSm;
    case "transports":
      return size === "md" ? transportMd : transportSm;
    case "logement":
      return size === "md" ? logementMd : logementSm;
    case "justice":
      return size === "md" ? justiceMd : justiceSm;
    case "securite":
      return size === "md" ? securityMd : securitySm;
    default:
      return null;
  }
}

export const Icons = {
  QuoteChevron,
}