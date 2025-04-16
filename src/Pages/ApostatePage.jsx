import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const apostateData = require('../Data/Classes/Apostate.json');

export function ApostatePage() {
  return (
    <CustomClassPage
      name={apostateData.name}
      role={apostateData.role}
      alignment={apostateData.alignment}
      hitDie={apostateData.hitDie}
      startingWealth={apostateData.startingWealth}
      classSkills={apostateData.classSkills}
      maxLevel={apostateData.maxLevel}
      baseAttackBonusType={apostateData.baseAttackBonusType}
      saveTypes={apostateData.saveTypes}
      classFeatures={apostateData.classFeatures}
      extraContent={
        <section>
          <h2>Alternative Class Abilities</h2>
          <h3>Fractured Mask</h3>
          <p>
            Certain Apostates splinter their beliefs to suit themselves, knowing
            that if they tried to justify the things that they did, they would
            have to stop and think about them first. If they are capable of
            doing so, they gain one of the features listed below;
          </p>

          <p>
            <i>Guilt and Heroism: </i>The Apostate gains a bonus to hit and
            damage equal to the number of hit points they are currently missing
            from their maximum, divided by five.
          </p>

          <p>
            <i>Hatred and Righteousness: </i>Each the Apostate is hit by an
            attack, they gain an additional attack at their highest base attack
            bonus that may be made on their next turn. Additionally, each time
            the Apostate is hit with an attack, they take a penalty to their AC
            equal to their Charisma Modifier. Furthermore, each time the
            Apostate is hit by seven attacks in battle, all successful attacks
            in their next turn will be considered critical hits.
          </p>

          <p>
            <i>Apathy and Truth: </i>As a Full-Round action, the Apostate may
            flood a 30ft radius area with fog. The fog grants total concealment
            to the Apostate, and any other creature is considered flat-footed
            when within the fog. The Apostate may force a creature within the
            fog to take an action that the Apostate knows they are capable of as
            a standard action. Additionally, the Apostate becomes immune to any
            abilities that would grant the user knowledge about the Apostate.
          </p>
          <i>
            This is a replacement for the Apostate's <b>Epiphany</b> ability
          </i>
          <h3>Terminus</h3>
          <p>
            Certain Apostates are able to achieve the impossible; a twisted
            balance of their Ideal and Flaw. If they are capable of doing so,
            they gain one of the features listed below;
          </p>
          <p>
            <i>Guilt and Heroism: </i>The Apostate may, as an immediate action,
            pay the price for their sins. They may sacrifice any number of hit
            points, then gaining a bonus to hit and damage equal to the number
            of hit points sacrificed for one minute. When sacrificing their hit
            points, the Apostate may immediately take another turn, and on every
            turn thereafter during the minute the Apostate gains their benefits,
            they may take two full turns worth of actions.
          </p>
          <p>
            <i>Hatred and Righteousness : </i>The Apostate may, as a swift
            action, throw aside all things for the sake of their crusade. In
            doing this, all attacks made against them automatically hit, all
            attacks the Apostate makes provoke attacks of opportunity, all
            attacks made by the Apostate are considered critical hits, and the
            Apostate cannot be killed. This lasts for one minute.
          </p>
          <p>
            <i>Apathy and Truth: </i>The Apostate may, as a swift action, begin
            to shroud the world in obfuscation. Fog begins to pour from the
            Apostate, beginning with a 15ft radius sphere centered on the
            Apostate and each square occupied by fog spreading to adjacent
            squares at the beginning of each of the Apostate's turns. If a
            creature enters the fog, the Apostate may take those creatures turns
            for them, taking full control of them, so long as that creature
            cannot see the Apostate. While within the fog, the Apostate can only
            be detected by mundane perception checks, enemy creatures receiving
            no bonuses from any external factors, and the Apostate receiving a
            bonus to stealth equal to their hit dice. Additionally, creatures of
            the Apostate's choice within the fog take a cumulative -2 penalty to
            each of their ability scores at the start of each of the Apostate's
            turns. The fog lasts for as long as the Apostate concentrates on it.
            Additionally, when targeted by an ability that would grant knowledge
            about the Apostate to the user, the Apostate may decide what
            information is shared, and may falsify information if they wish.
          </p>
          <p>
            Additionally, the Apostate gains an additional Fate Die, to a total
            of seven.
          </p>
          <i>
            This is a replacement for the Apostate's <b>Apotheosis</b> ability
          </i>
        </section>
      }
    />
  );
}
