import Link from "next/link";
import Img from "next/image";

import QuestionLink from "@/components/QuestionLink";

import {
  getThematiqueKey,
  getThematiqueName,
  getThematiquePageLink,
  getThematiqueQuestions,
  getThematiqueId,
  getQuestionId,
} from "@/lib/data-mappings";

import {
  getPicto,
} from "@/lib/icons";

export default function ThematiqueCard({ thematique, questions }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div className="thematique-card">
      <div className="thematique-card__header">
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
        {getPicto(thematiqueKey)}
      </div>
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
