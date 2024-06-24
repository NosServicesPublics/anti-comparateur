'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import DisclosurePanelContent from '@/components/DisclosurePanelContent'

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

export default function QuestionBlock({
  thematique,
  question,
  responses,
  expandedId,
  setExpandedId
}) {
  const thematiqueKey = getThematiqueKey(thematique);
  const id = getQuestionKey(question);

  return (
    <div
      className="question-block"
      id={getQuestionKey(question)}
    >
      <Disclosure
        as="div"
        open={expandedId === id}
      >
        <DisclosureButton
          className="question-block__toggler"
          onClick={() => setExpandedId(id)}
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
              <span
                className="toggler__icon"
              >
                <RiArrowDownSFill />
              </span>
            </h2>
          </div>
        </DisclosureButton>
        <DisclosurePanel>
          <DisclosurePanelContent
            expandedId={expandedId}
            id={id}
          >
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
          </DisclosurePanelContent>
        </DisclosurePanel>
      </Disclosure>

    </div>
  );
}
