import * as React from 'react';

export default function Feat({
  featName,
  featFlavor,
  featPrerequisites,
  featBenefits,
  featSpecial,
  additonalBodyContent,
  setInnerHtml,
  className,
}) {
  if (setInnerHtml) {
    return (
      <div className={`Feat-Container ${className ?? ''}`.trim()}>
        <h4
          className="Feat-Name"
          dangerouslySetInnerHTML={{ __html: `${featName}` }}
        />
        <i
          className="Feat-Flavor"
          dangerouslySetInnerHTML={{ __html: `${featFlavor}` }}
        />
        {featPrerequisites.length ? (
          <p
            className="Feat-Prerequisites"
            dangerouslySetInnerHTML={{
              __html: `<b>Prerequisite(s): </b> ${featPrerequisites}`,
            }}
          />
        ) : null}
        <p
          className="Feat-Benefits"
          dangerouslySetInnerHTML={{
            __html: `<b>Benefit(s): </b> ${featBenefits}`,
          }}
        />
        {additonalBodyContent}
        {featSpecial.length ? (
          <p
            className="Feat-Special"
            dangerouslySetInnerHTML={{
              __html: `<b>Special: </b> ${featSpecial}`,
            }}
          />
        ) : null}
      </div>
    );
  } else {
    return (
      <div className={`Feat-Container ${className ?? ''}`.trim()}>
        <h4 className="Feat-Name">{featName}</h4>
        <i className="Feat-Flavor">{featFlavor}</i>
        {featPrerequisites.length ? (
          <p className="Feat-Prerequisites">
            <b>Prerequisite(s): </b>
            {featPrerequisites}
          </p>
        ) : null}
        <p className="Feat-Benefits">
          <b>Benefit(s): </b>
          {featBenefits}
        </p>
        {additonalBodyContent}
        {featSpecial.length ? (
          <p className="Feat-Special">
            <b>Special: </b>
            {featSpecial}
          </p>
        ) : null}
      </div>
    );
  }
}
