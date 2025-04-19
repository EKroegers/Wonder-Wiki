import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const mutantMercData = require('../Data/Classes/Mutant_Mercenary.json');

export function MutantMercenaryPage() {
  return (
    <CustomClassPage
      name={mutantMercData.name}
      role={mutantMercData.role}
      alignment={mutantMercData.alignment}
      hitDie={mutantMercData.hitDie}
      startingWealth={mutantMercData.startingWealth}
      classSkills={mutantMercData.classSkills}
      skillRanks={mutantMercData.skillRanks}
      maxLevel={mutantMercData.maxLevel}
      baseAttackBonusType={mutantMercData.baseAttackBonusType}
      saveTypes={mutantMercData.saveTypes}
      classFeatures={mutantMercData.classFeatures}
      setRoleInnerHtml
      extraContent={
        <section>
          <br />
          <p>
            <b>
              A lot of this doesn't need to be an ability, we're just giving
              free license to fall back into all of the bad habits that they try
              to talk you out of. Best of luck getting this greenlit for use at
              the table, you're gonna need it.
            </b>
          </p>
          <p>
            <i>And I just gotta say, NO MULTICLASSING!</i>
          </p>
          <p>
            <i>
              Seriously, why don't you just pick a concept and stick to it? Life
              so empty that you have to try to “win” a game where we're all
              supposed to cooperate and beat up imaginary monsters?
            </i>
          </p>
          <p>
            <b>
              It could be said that a person could have a concept specific
              enough that can't be covered by one class in particular.
            </b>
          </p>
          <p>
            <i>
              Yeah but we all know that's not why this is a problem, right? We
              don't need to tell those people not to be assholes.
            </i>
            <i></i>
          </p>
          <p>
            <b>Yeah, you know who you are.</b>
          </p>
        </section>
      }
    />
  );
}
