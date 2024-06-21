import Link from "next/link";

import {
  getResponseId,
  getResponseDetailsLink,
  getResponseAuthor,
  getResponseAbstract,
  getResponseContent,
} from "@/lib/map";

export default function Reponse({ thematique, question, reponse }) {
  const reponseId = getResponseId(reponse);
  const reponseAuthor = getResponseAuthor(reponse);
  const reponseAbstract = getResponseAbstract(reponse);
  const reponseContent = getResponseContent(reponse);
  return (
    <div
      className="reponse"
      key={reponseId}
    >
      <h3
        className="reponse__author"
      >
        SELON <span class="reponse__author-name">{reponseAuthor.toUpperCase()}</span>
      </h3>
      <div
        className="reponse__abstract"
      >
        {reponseAbstract}
      </div>
      <div
        className="reponse__content"
        dangerouslySetInnerHTML={{
          __html: reponseContent,
        }}
      />
      <Link
        href={getResponseDetailsLink(thematique, question, reponse)}
      >
        Plus de détails
      </Link>
    </div>
  );
}