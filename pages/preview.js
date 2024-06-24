import { NextSeo } from 'next-seo';

import { useState, useEffect } from "react";
import ResponsePageContent from "@/components/ResponsePageContent";

import {
  getThematiqueKey,
} from "@/lib/data-mappings";

export default function PreviewPage() {
  const [thematique, setThematique] = useState();
  const [question, setQuestion] = useState();
  const [reponse, setReponse] = useState();
  const [logs, setLogs] = useState([])

  useEffect(() => {
    window.grist.ready()
    window.grist.onRecord((record) => {
      if (!record) {
        return
      }
      setReponse({ id: record.id, fields: record })
      setThematique({
        fields: {
          Slug: record.Thematique_Slug,
          Nom: record.Thematique
        }
      })
      setQuestion({
        fields: {
          Intitule: record.Question
        }
      })
    })


  }, [])

  const thematiqueKey = getThematiqueKey(thematique);
  return (thematique && question && reponse) && (
    <>
      <NextSeo
        title={'Réponse'}
      />
      <ResponsePageContent
        thematique={thematique}
        question={question}
        reponse={reponse}
      />
    </>
  );
}