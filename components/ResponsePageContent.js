import Link from "next/link";

import { RiArrowDropRightLine } from "react-icons/ri";

import BackBreadcrumb from "@/components/BackBreadcrumb";
import ResponseDetailsBlock from "@/components/ResponseDetailsBlock";

import {
  getThematiqueName,
  getQuestionName,
  getQuestionPageLink,
  getThematiqueKey,
  getResponseAuthorName,
  getResponseAnalysis,
  responseDetailsFields,
  getThematiquePageLink,
} from "@/lib/data-mappings";

export default function ResponsePageContent({ thematique, question, reponse }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <main
      className='main-content'
      data-thematique-key={thematiqueKey}
    >
      <section className='main-column main-section'>
        <ul className='response-breadcrumb'>
          <li>
            <Link href='/'>
              Accueil
            </Link>
          </li>
          <RiArrowDropRightLine />
          <li>
            <Link href={getThematiquePageLink(thematique)}>
              <span
                className='breadcrumb__thematique-link'
                data-thematique-key={thematiqueKey}
              >
                {getThematiqueName(thematique)}
              </span>
            </Link>
          </li>
          <RiArrowDropRightLine />
          <li
            className='breadcrumb__question-link'
          >
            {getQuestionName(question)}
          </li>
        </ul>
        <section className='response-details'>
          <BackBreadcrumb
            label='Retour à la question'
            href={getQuestionPageLink(thematique, question)}
          />
          <h1
            className='response-details__title'
          >
            Détails pour {getResponseAuthorName(reponse)}
          </h1>
          <div className='response-details__columns'>
            <div className='response-details__column'>
              <h2 className='response-details__column-title'>
                CE QU&apos;ILS ONT DIT
              </h2>
              {responseDetailsFields.map((field) => {
                return (
                  <ResponseDetailsBlock
                    key={field.key}
                    title={field.title}
                    content={reponse?.fields[field.key]}
                  />
                );
              })}
            </div>
            <div className='response-details__column'>
              <h2 className='response-details__column-title'>
                L&apos;ANALYSE DE <i>NOS SERVICES PUBLICS</i>
              </h2>
              <ResponseDetailsBlock
                content={getResponseAnalysis(reponse)}
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}