import ResponseAbstract from "@/components/ResponseAbstract";

import {
  getQuestionName,
  getQuestionKey,
  getResponseId,
  getThematiqueKey,
  getQuestionNumber,
  formatQuestionNumber,
  sortResponsesByAuthor,
} from "@/lib/data-mappings";

export default function QuestionBlock({ thematique, question, responses }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <div
      className="question-block"
      id={getQuestionKey(question)}
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
        {responses
          ?.sort(sortResponsesByAuthor)
          ?.map((response) => {
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
