import * as React from 'react';
import { Link } from 'react-router-dom';
import Feat from '../Components/Feat/Feat.jsx';
import ScalingFeat from '../Components/Feat/ScalingFeat/ScalingFeat.jsx';

import { FEAT_LIST } from '../Data/Feats/0_FEAT_LIST.jsx';

export function HomebrewFeats() {
  return (
    <section>
      <h1>Homebrew Feats</h1>
      {FEAT_LIST.map((feat, index) => {
        if (feat.isScalable) {
          return (
            <ScalingFeat
              key={index}
              className={feat.className ?? ''}
              featName={feat.name}
              featFlavor={feat.flavor ?? ''}
              featPrerequisites={feat.prerequisites ?? ''}
              featBenefits={feat.benefits}
              featSpecial={feat.special ?? ''}
              scaleBenefits={feat.scaleBenefits}
              setInnerHtml={feat.setInnerHtml}
            />
          );
        } else {
          return (
            <Feat
              key={index}
              className={feat.className ?? ''}
              featName={feat.name}
              featFlavor={feat.flavor ?? ''}
              featPrerequisites={feat.prerequisites ?? ''}
              featBenefits={feat.benefits}
              featSpecial={feat.special ?? ''}
              setInnerHtml={feat.setInnerHtml}
            />
          );
        }
      })}
      <Link to={'/player-homebrew'}>Back</Link>
    </section>
  );
}
