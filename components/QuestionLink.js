import Link from "next/link";

import {
  getQuestionName,
  getQuestionPageLink,
  getQuestionNumber,
  getThematiqueKey,
  formatQuestionNumber,
} from "@/lib/data-mappings";

export default function QuestionLink({ thematique, question }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div
      className="question-link"
    >
      <span
        className="question-link__number"
        data-thematique-key={thematiqueKey}
      >
        {formatQuestionNumber(getQuestionNumber(question))}
      </span>
      <Link
        href={getQuestionPageLink(thematique, question)}
      >
        {getQuestionName(question)}
      </Link>
    </div>
  );
}