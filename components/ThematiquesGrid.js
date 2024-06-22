import ThematiqueCard from "@/components/ThematiqueCard";

import { getThematiqueId } from "@/lib/map";

export default function ThematiquesGrid({ thematiques, questions }) {
  return (
    <div className="thematiques-grid">
      <ul className="flex-grid">
        {thematiques?.map((thematique) => {
          return (
            <li className="flex-grid__item"
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
    </div>
  );
}