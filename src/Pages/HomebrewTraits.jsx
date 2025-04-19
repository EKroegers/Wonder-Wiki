import * as React from 'react';
import { Link } from 'react-router-dom';
import Feat from '../Components/Feat/Feat.jsx';

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
      <Link to={'/player-homebrew'}>Back</Link>
    </section>
  );
}
