import Link from "next/link";

import {
  getThematiqueKey,
  getQuestionName,
  getThematiqueLabel,
  getThematiqueAppLink,
  getQuestionAppLink,
  isQuestionInThematique,
  getQuestionId
} from "@/lib/map";

export default function ThematiqueCard({ thematique, questions }) {
  return (
    <div className="thematique-card">
      <h2 className="thematique-card__title">
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
              <div
                key={getQuestionId(q)}
                className="thematique-card__question"
              >
                <Link
                  href={getQuestionAppLink(thematique, q)}
                >
                  {getQuestionName(q)}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
