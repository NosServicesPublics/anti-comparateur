import Link from "next/link";

import {
  getThematiqueKey,
  getThematiqueName,
  getThematiquePageLink,
} from "@/lib/data-mappings";

export default function ThematiqueButton({ thematique }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div className="thematique-button">
      <Link
        key={thematiqueKey}
        href={getThematiquePageLink(thematique)}
      >
        <p
          className="thematique-button__label thematique-underlined"
          data-thematique-key={thematiqueKey}
        >
          {getThematiqueName(thematique)}
        </p>
      </Link>
    </div>
  );
}
