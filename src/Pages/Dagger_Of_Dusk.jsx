import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const daggerData = require('../Data/Classes/Dagger_Of_Dusk.json');

export function DaggerOfDusk() {
  return (
    <CustomClassPage
      name={daggerData.name}
      role={daggerData.role}
      alignment={daggerData.alignment}
      hitDie={daggerData.hitDie}
      startingWealth={daggerData.startingWealth}
      classSkills={daggerData.classSkills}
      skillRanks={daggerData.skillRanks}
      maxLevel={daggerData.maxLevel}
      baseAttackBonusType={daggerData.baseAttackBonusType}
      saveTypes={daggerData.saveTypes}
      classFeatures={daggerData.classFeatures}
      epicLevelClassFeatures={daggerData.epicLevelClassFeatures}
    />
  );
}
