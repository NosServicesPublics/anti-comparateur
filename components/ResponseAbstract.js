import Link from "next/link";

import {
  getResponseId,
  getResponseDetailsLink,
  getResponseAuthor,
  getResponseAbstract,
  getResponseContent,
} from "@/lib/map";

export default function ResponseAbstract({ thematique, question, reponse }) {
  const reponseId = getResponseId(reponse);
  const reponseAuthor = getResponseAuthor(reponse);
  const reponseAbstract = getResponseAbstract(reponse);
  const reponseContent = getResponseContent(reponse);
  return (
    <div
      className="response-short-block"
      key={reponseId}
    >
      <h3
        className="response__author"
      >
        SELON <span className="response__author-name">{reponseAuthor.toUpperCase()}</span>
      </h3>
      <div
        className="response__abstract"
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