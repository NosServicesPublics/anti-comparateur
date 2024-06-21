import ThematiqueCard from "@/components/ThematiqueCard";
import FlexGrid from "@/components/FlexGrid";
import FlexItem from "@/components/FlexItem";

import { getThematiqueId } from "@/lib/map";

export default function ThematiquesGrid({ thematiques, questions }) {
  return (
    <FlexGrid>
        {thematiques?.map((thematique) => {
          return (
            <FlexItem
              key={getThematiqueId(thematique)}
            >
              <ThematiqueCard
                thematique={thematique}
                questions={questions}
              />
            </FlexItem>
          );
        })}
    </FlexGrid>
  );
}