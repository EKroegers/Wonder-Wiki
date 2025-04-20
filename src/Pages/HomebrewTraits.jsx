import * as React from 'react';
import Feat from '../Components/Feat/Feat.jsx';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

import { TRAIT_LIST } from '../Data/Traits/0_TRAIT_LIST.jsx';

export function HomebrewTraits() {
  return (
    <section>
      <h1>Homebrew Traits</h1>
      {TRAIT_LIST.map((trait) => {
        return (
          <Feat
            key={trait.name}
            className={trait.className ?? ''}
            featName={trait.name}
            featPrerequisites={trait.prerequisites ?? ''}
            featBenefits={trait.benefits}
            featSpecial={trait.special ?? ''}
            setInnerHtml={trait.setInnerHtml}
          />
        );
      })}
      <LinkCard url={'/player-homebrew'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
