import ThematiqueButton from "@/components/ThematiqueButton";

import {
  getThematiqueId,
} from "@/lib/data-mappings";

export default function ThematiquesList({ thematiques }) {
  return (
    <ul className="thematiques-buttons-grid">
      {thematiques?.map((thematique) => {
        return (
          <li className="thematiques-buttons-grid__item"
            key={getThematiqueId(thematique)}
          >
            <ThematiqueButton thematique={thematique} />
          </li>
        );
      })}
    </ul>
  );
}