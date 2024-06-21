import Link from "next/link";
import QuestionLink from "@/components/QuestionLink";

import {
  getThematiqueKey,
  getThematiqueLabel,
  getThematiqueAppLink,
  isQuestionInThematique,
  getQuestionId,
} from "@/lib/map";

export default function ThematiqueCard({ thematique, questions }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div className="thematique-card">
      <h2
        className="thematique-card__title thematique-label"
        data-thematique-key={thematiqueKey}
      >
        <Link
          key={getThematiqueKey(thematique)}
          href={getThematiqueAppLink(thematique)}
        >
          {getThematiqueLabel(thematique)}
        </Link>
      </h2>
      <div className="thematique-card__questions">
        {questions
          .filter((q) => isQuestionInThematique(q, thematique))
          .map((q) => {
            return (
              <QuestionLink
                key={getQuestionId(q)}
                thematique={thematique}
                question={q}
              />
            )
          })}
      </div>
    </div>
  );
}
