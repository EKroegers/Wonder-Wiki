import * as React from 'react';
import Feat from '../Feat.jsx';

export default function ScalingFeat({
  featName,
  featFlavor,
  featPrerequisites,
  featBenefits,
  featSpecial,
  scaleBenefits,
  setInnerHtml,
  className,
}) {
  return (
    <Feat
      className={`Scalable-Feat-Container ${className ?? ''}`}
      featName={featName}
      featFlavor={featFlavor}
      featPrerequisites={featPrerequisites}
      featBenefits={featBenefits}
      featSpecial={featSpecial}
      additonalBodyContent={
        scaleBenefits
          ? scaleBenefits.map((scaleBundle, index) => {
              if (setInnerHtml) {
                return (
                  <p
                    key={index}
                    className="Feat-Scalable-Benefit-Segment"
                    dangerouslySetInnerHTML={{
                      __html: `<b>${scaleBundle.step}: </b> ${scaleBundle.benefit}`,
                    }}
                  />
                );
              } else {
                return (
                  <p className="Feat-Scalable-Benefit-Segment" key={index}>
                    <b>{scaleBundle.step}: </b>
                    {scaleBundle.benefit}
                  </p>
                );
              }
            })
          : null
      }
    />
  );
}
