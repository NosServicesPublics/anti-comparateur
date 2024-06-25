'use client';

const BREAKPOINTS = {
  sm: 425,
  md: 767,
}

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import DisclosurePanelContent from '@/components/DisclosurePanelContent'
import { useEffect, useState } from 'react';

import { RiArrowDownSFill } from "react-icons/ri";

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

function QuestionBlockTitle({ thematique, question }) {
  return (
    <div className="question-block__title">
      <span
        className="question-link__number"
        data-thematique-key={getThematiqueKey(thematique)}
      >
        {formatQuestionNumber(getQuestionNumber(question))}
      </span>
      <h2 >
        <span
          className="thematique-underlined"
          data-thematique-key={getThematiqueKey(thematique)}
        >
          {getQuestionName(question)}
        </span>
        <span
          className="toggler__icon"
        >
          <RiArrowDownSFill />
        </span>
      </h2>
    </div>
  )
}

function QuestionResponsesAbstracts({ responses, question, thematique }) {
  return (
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
  )
}

export default function QuestionBlock({
  thematique,
  question,
  responses,
  expandedId,
  setExpandedId
}) {
  const id = getQuestionKey(question);

  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth < BREAKPOINTS.md) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div
      className="question-block"
      id={getQuestionKey(question)}
    >
      {!isMobile ?
        <>
          <QuestionBlockTitle
            thematique={thematique}
            question={question}
          />
          <QuestionResponsesAbstracts
            responses={responses}
            question={question}
            thematique={thematique}
          />
        </> : (
          <Disclosure
            defaultOpen={id === expandedId}
          >
            <DisclosureButton
              className="question-block__toggler"
              onClick={() => setExpandedId(id)}
            >
              <QuestionBlockTitle
                thematique={thematique}
                question={question}
              />
            </DisclosureButton>
            <DisclosurePanel>
              <DisclosurePanelContent
                expandedId={expandedId}
                id={id}
              >
                <QuestionResponsesAbstracts
                  responses={responses}
                  question={question}
                  thematique={thematique}
                />
              </DisclosurePanelContent>
            </DisclosurePanel>
          </Disclosure>
        )}
    </div>
  )
}