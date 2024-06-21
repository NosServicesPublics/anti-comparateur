import Link from "next/link";

import {
  getThematiqueKey,
  getThematiqueLabel,
  getThematiqueAppLink,
} from "@/lib/map";

export default function ThematiqueButton({ thematique }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div className="thematique-button">
      <Link
        key={thematiqueKey}
        href={getThematiqueAppLink(thematique)}
      >
        <p
          className="thematique-button__label thematique-label"
          data-thematique-key={thematiqueKey}
        >
          {getThematiqueLabel(thematique)}
        </p>
      </Link>
    </div>
  );
}
