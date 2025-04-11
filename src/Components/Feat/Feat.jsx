import * as React from 'react';

export default function Feat({
  featName,
  featFlavor,
  featPrerequisites,
  featBenefits,
  featSpecial,
  additonalBodyContent,
  className,
}) {
  return (
    <div className={`Feat-Container ${className ?? ''}`}>
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
