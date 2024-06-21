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
    <div key={reponseId}>
      <h3>Selon {reponseAuthor}</h3>
      <div>{reponseAbstract}</div>
      <div dangerouslySetInnerHTML={{
        __html: reponseContent,
      }} />
      <Link
        href={getResponseDetailsLink(thematique, question, reponse)}
      >
        Plus de détails
      </Link>
    </div>
  );
}