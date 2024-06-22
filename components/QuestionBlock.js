import ResponseAbstract from "@/components/ResponseAbstract";

import {
  getQuestionName,
  getQuestionSlug,
  getResponseId,
  getThematiqueKey,
  getQuestionNumber,
  formatQuestionNumber,
} from "@/lib/map";

import { partis } from "@/lib/constants";

export default function QuestionBlock({ thematique, question }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div
      className="question-block"
      id={getQuestionSlug(question)}
    >
      <div className="question-block__title">
        <span
          className="question-link__number"
          data-thematique-key={thematiqueKey}
        >
          {formatQuestionNumber(getQuestionNumber(question))}
        </span>
        <h2 >
          <span
            className="thematique-underlined"
            data-thematique-key={thematiqueKey}
          >
            {getQuestionName(question)}
          </span>
        </h2>
      </div>
      <div className="question-block__responses">
        {question.reponses.map((response) => {
          return (
            <ResponseAbstract
              key={getResponseId(response)}
              reponse={response}
              question={question}
              thematique={thematique}
            />
          )
        }
        )}
      </div>
    </div>
  );
}
