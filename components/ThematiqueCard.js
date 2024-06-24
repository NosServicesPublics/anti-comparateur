import Link from "next/link";
import QuestionLink from "@/components/QuestionLink";

import {
  getThematiqueKey,
  getThematiqueName,
  getThematiquePageLink,
  getThematiqueQuestions,
  getThematiqueId,
  getQuestionId,
} from "@/lib/data-mappings";

export default function ThematiqueCard({ thematique, questions }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div className="thematique-card">
      <h2
        className="thematique-card__title thematique-underlined"
        data-thematique-key={thematiqueKey}
      >
        <Link
          key={thematiqueKey}
          href={getThematiquePageLink(thematique)}
        >
          {getThematiqueName(thematique)}
        </Link>
      </h2>
      <div className="thematique-card__questions">
        {getThematiqueQuestions(questions, getThematiqueId(thematique))
          .map((question) => {
            return (
              <QuestionLink
                key={getQuestionId(question)}
                thematique={thematique}
                question={question}
              />
            )
          })}
      </div>
    </div>
  );
}
