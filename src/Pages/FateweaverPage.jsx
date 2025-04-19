import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const fateweaverData = require('../Data/Classes/Fateweaver.json');

export function FateweaverPage() {
  return (
    <CustomClassPage
      name={fateweaverData.name}
      role={fateweaverData.role}
      alignment={fateweaverData.alignment}
      hitDie={fateweaverData.hitDie}
      startingWealth={fateweaverData.startingWealth}
      classSkills={fateweaverData.classSkills}
      skillRanks={fateweaverData.skillRanks}
      maxLevel={fateweaverData.maxLevel}
      baseAttackBonusType={fateweaverData.baseAttackBonusType}
      saveTypes={fateweaverData.saveTypes}
      classFeatures={fateweaverData.classFeatures}
      epicLevelClassFeatures={fateweaverData.epicLevelClassFeatures}
    />
  );
}
