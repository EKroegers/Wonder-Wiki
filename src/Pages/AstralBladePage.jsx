import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const astralBladeData = require('../Data/Classes/Astral_Blade.json');

export function AstralBladePage() {
  return (
    <CustomClassPage
      name={astralBladeData.name}
      role={astralBladeData.role}
      alignment={astralBladeData.alignment}
      hitDie={astralBladeData.hitDie}
      startingWealth={astralBladeData.startingWealth}
      classSkills={astralBladeData.classSkills}
      skillRanks={astralBladeData.skillRanks}
      maxLevel={astralBladeData.maxLevel}
      baseAttackBonusType={astralBladeData.baseAttackBonusType}
      saveTypes={astralBladeData.saveTypes}
      classFeatures={astralBladeData.classFeatures}
      epicLevelClassFeatures={astralBladeData.epicLevelClassFeatures}
    />
  );
}
