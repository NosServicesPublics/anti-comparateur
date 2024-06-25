import Link from "next/link";

import {
  getResponseId,
  getResponseDetailsLink,
  getResponseAuthorName,
  getResponseAbstract,
  getResponseContent,
  getResponseAbstractColor,
} from "@/lib/data-mappings";

export default function ResponseAbstract({ thematique, question, reponse }) {
  const reponseId = getResponseId(reponse);
  const reponseAuthor = getResponseAuthorName(reponse);
  const reponseAbstract = getResponseAbstract(reponse);
  const reponseContent = getResponseContent(reponse);
  const responseAbstractColor = getResponseAbstractColor(reponse);
  return (
    <div
      className="response-short-block"
      key={reponseId}
    >
      <h3
        className="response__author"
      >
        <span>
          SELON <span className="response__author-name">{reponseAuthor.toUpperCase()}</span>
        </span>
      </h3>
      <div
        className="response__abstract"
        data-abstract-key={responseAbstractColor}
      >
        {reponseAbstract}
      </div>
      <div
        className="response__content"
        dangerouslySetInnerHTML={{
          __html: reponseContent,
        }}
      />
      <div
        className="response__details-link"
      >
        <Link
          className=""
          href={getResponseDetailsLink(thematique, question, reponse)}
        >
          Plus de détails
        </Link>
      </div>
    </div>
  );
}