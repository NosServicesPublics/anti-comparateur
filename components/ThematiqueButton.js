import Link from "next/link";
import Img from "next/image";

import {
  getThematiqueKey,
  getThematiqueName,
  getThematiquePageLink,
} from "@/lib/data-mappings";

import {
  getPicto,
} from "@/lib/icons";

export default function ThematiqueButton({ thematique }) {
  const thematiqueKey = getThematiqueKey(thematique);
  const picto = getPicto(thematiqueKey, "sm");
  return (
    <div className="thematique-button">
      <Link
        className="thematique-button__link"
        key={thematiqueKey}
        href={getThematiquePageLink(thematique)}
      >
        <p
          className="thematique-button__label thematique-underlined"
          data-thematique-key={thematiqueKey}
        >
          {getThematiqueName(thematique)}
        </p>
        {picto ? (
          <Img
            className="thematique-button__picto"
            src={picto}
            alt=""
          />
        ) : null}
      </Link>
    </div>
  );
}
