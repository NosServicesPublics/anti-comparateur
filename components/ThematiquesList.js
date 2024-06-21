import Link from "next/link";

import {
  getThematiqueKey,
  getThematiqueId,
  getThematiqueAppLink,
  getThematiqueLabel,
} from "@/lib/map";

export default function ThematiquesList({ thematiques }) {
  return (
    <div>
      <h2>Thématiques</h2>
      <ul>
        {thematiques.map((thematique) => (
          <li key={getThematiqueId(thematique)}>
            <Link
              key={getThematiqueKey(thematique)}
              href={getThematiqueAppLink(thematique)}
            >
              {getThematiqueLabel(thematique)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}