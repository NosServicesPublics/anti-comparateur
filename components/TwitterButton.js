"use client";

import Img from "next/image";

import styles from "./TwitterButton.module.scss";

import { useEffect, useState } from "react";
import { Icons } from "@/lib/icons"

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
          J’ai comparé les programmes, les discours et les actes des différentes
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
        <p>N’hésitez pas à faire de même pour être informé avant de voter :</p>
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
      <h3 className={styles.title}>
        <span>Je partage ce comparateur</span>
      </h3>
      <div className={styles.mockupTweet}>
        <Img
          aria-hidden
          alt="Avatar twitter"
          src={props.selectedPicto}
          width={48}
          height={48}
        />
        <div className={styles.mockupTweetContent}>
          <p className={styles.header}>
            <span className={styles.profileName}>{props.selectedName}</span>
            <span className={styles.profileHandle}>
              @{props.selectedName} · 1min
            </span>
          </p>
          <FormattedTwitterMessage />
          <div className={`${styles.QuoteChevron} ${styles.topLeft}`}>
            <Icons.QuoteChevron />
          </div>
          <div className={`${styles.QuoteChevron} ${styles.bottomRight}`}>
            <Icons.QuoteChevron />
          </div>
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
