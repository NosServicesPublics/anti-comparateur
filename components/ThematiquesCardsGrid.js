import ThematiqueCard from "@/components/ThematiqueCard";

import { getThematiqueId } from "@/lib/data-mappings";

export default function ThematiquesGrid({ thematiques, questions }) {
  return (
    <ul className="thematiques-cards-grid">
      {thematiques?.map((thematique) => {
        return (
          <li className="thematiques-cards-grid__item"
            key={getThematiqueId(thematique)}
          >
            <ThematiqueCard
              thematique={thematique}
              questions={questions}
            />
          </li>
        );
      })}
    </ul>
  );
}