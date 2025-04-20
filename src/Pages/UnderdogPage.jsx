import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const underdogData = require('../Data/Classes/Underdog.json');

export function UnderdogPage() {
  return (
    <CustomClassPage
      name={underdogData.name}
      role={underdogData.role}
      alignment={underdogData.alignment}
      hitDie={underdogData.hitDie}
      startingWealth={underdogData.startingWealth}
      classSkills={underdogData.classSkills}
      skillRanks={underdogData.skillRanks}
      maxLevel={underdogData.maxLevel}
      baseAttackBonusType={underdogData.baseAttackBonusType}
      saveTypes={underdogData.saveTypes}
      classFeatures={underdogData.classFeatures}
      epicLevelClassFeatures={underdogData.epicLevelClassFeatures}
    />
  );
}
