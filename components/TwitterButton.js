"use client";

import styles from "./TwitterButton.module.scss";

import { useEffect, useState } from "react";

export default function TwitterButton(props) {
  const [twitterMessage, setTwitterMessage] = useState("");
  useEffect(() => {
    twitterContentGenerator();
  }, [props]);

  function twitterContentGenerator() {
    let string =
      `J'ai comparé les programmes, les discours et les actes des différentes listes aux législatives grâce au comparateur de @nosservicespub !` +
      "\n\n" +
      `N'hésitez pas à faire de même pour être informé avant de voter :` +
      "\n\n" +
      `httpss://comparateur.nosservicespublics.fr`;

    setTwitterMessage(string);
  }

  function FormattedTwitterMessage() {
    return (
      <div className={styles.contentWrapper}>
        <p>
          J'ai comparé les programmes, les discours et les actes des différentes
          listes aux législatives grâce au comparateur de{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/nosservicespub"
            className={styles.link}
          >
            @nosservicespub
          </a>
           !
        </p>
        <p>N'hésitez pas à faire de même pour être informé avant de voter :</p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://comparateur.nosservicespublics.fr"
            className={styles.link}
          >
            https://comparateur.nosservicespublics.fr
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.mockupTweetWrapper}>
      <svg
        className={styles.topLeft}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="#558c85"
      >
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
      </svg>
      <svg
        className={styles.botRight}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="#558c85"
      >
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
      </svg>

      <h3 className={styles.title}>
        <span>Je partage ce comparateur</span>
      </h3>
      <div className={styles.mockupTweet}>
        <img src={props.selectedPicto} width={"48px"} />

        <div className={styles.mockupTweetContent}>
          <p className={styles.header}>
            <span className={styles.profileName}>{props.selectedName}</span>
            <span className={styles.profileHandle}>
              @{props.selectedName} · 1min
            </span>
          </p>
          <FormattedTwitterMessage />
        </div>
      </div>
      <div className={styles.SocialsButtonsRow}>
        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(twitterMessage)}`}
          className={styles.shareButton}
          data-size="large"
          target="_blank"
          rel="noreferrer"
        >
          Partager sur X
        </a>
      </div>
    </div>
  );
}
