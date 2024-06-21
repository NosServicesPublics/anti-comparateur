import ThematiqueButton from "@/components/ThematiqueButton";
import FlexGrid from "@/components/FlexGrid";
import FlexItem from "@/components/FlexItem";

import {
  getThematiqueId,
} from "@/lib/map";

export default function ThematiquesList({ thematiques }) {
  return (
    <>
      <FlexGrid isInline={true}>
        {thematiques?.map((thematique) => {
          return (
            <FlexItem
              key={getThematiqueId(thematique)}
            >
              <ThematiqueButton thematique={thematique} />
            </FlexItem>
          );
        })}
    </FlexGrid>
    </>
  );
}