import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home.jsx';

import { Reworks } from './Pages/Reworks.jsx';
import { BaseGameClassReworks } from './Pages/BaseGameClassReworks.jsx';
import { CoreRuleChanges } from './Pages/CoreRuleChanges.jsx';
import { RogueRework } from './Pages/RogueRework.jsx';
import { OccultMagic } from './Pages/OccultMagic.jsx';
import { Poisons } from './Pages/Poisons.jsx';

import { DMHomebrew } from './Pages/DMHomebrew.jsx';
import { Duels } from './Pages/Duels.jsx';
import { TrainingSystem } from './Pages/TrainingSystem.jsx';

import { PlayerHomebrew } from './Pages/PlayerHomebrew.jsx';
import { CustomClasses } from './Pages/CustomClasses.jsx';
import { ApostatePage } from './Pages/ApostatePage.jsx';
import { AstralBladePage } from './Pages/AstralBladePage.jsx';
import { DaggerOfDusk } from './Pages/DaggerOfDuskPage.jsx';
import { FateweaverPage } from './Pages/FateweaverPage.jsx';
import { Domains } from './Pages/Domains.jsx';
import { HomebrewFeats } from './Pages/HomebrewFeats.jsx';
import { HomebrewTraits } from './Pages/HomebrewTraits.jsx';
import { Pacts } from './Pages/Pacts.jsx';

import { Setting } from './Pages/Setting.jsx';
import { LivingSpells } from './Pages/LivingSpells.jsx';
import { NewSchoolsOfMagic } from './Pages/NewSchoolsOfMagic.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="reworks">
            <Route index element={<Reworks />} />
            <Route path="core-rule-changes" element={<CoreRuleChanges />} />
            <Route path="occult-magic" element={<OccultMagic />} />
            <Route path="poisons" element={<Poisons />} />
            <Route path="base-game-class-reworks">
              <Route index element={<BaseGameClassReworks />} />
              <Route path="rogue" element={<RogueRework />} />
            </Route>
          </Route>
          <Route path="dm-homebrew">
            <Route index element={<DMHomebrew />} />
            <Route path="duels" element={<Duels />} />
            <Route path="training-system" element={<TrainingSystem />} />
          </Route>
          <Route path="player-homebrew">
            <Route index element={<PlayerHomebrew />} />
            <Route path="custom-classes">
              <Route index element={<CustomClasses />} />
              <Route path="apostate" element={<ApostatePage />} />
              <Route path="astral-blade" element={<AstralBladePage />} />
              <Route path="dagger-of-dusk" element={<DaggerOfDusk />} />
              <Route path="fateweaver" element={<FateweaverPage />} />
              <Route path="mutant-mercenary" element={<div />} />
              <Route path="saiyan-warrior" element={<div />} />
              <Route path="underdog" element={<div />} />
            </Route>
            <Route path="domains" element={<Domains />} />
            <Route path="homebrew-feats" element={<HomebrewFeats />} />
            <Route path="homebrew-traits" element={<HomebrewTraits />} />
            <Route path="pacts" element={<Pacts />} />
          </Route>
          <Route path="setting">
            <Route index element={<Setting />} />
            <Route path="living-spells" element={<LivingSpells />} />
            <Route
              path="new-schools-of-magic"
              element={<NewSchoolsOfMagic />}
            />
            <Route path="races" element={<div />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = createRoot(document.body);
root.render(<App />);
