import * as React from 'react';

import CustomClassPage from '../Components/CustomClassPage/CustomClassPage.jsx';

const saiyanWarriorPage = require('../Data/Classes/Saiyan_Warrior.json');

export function SaiyanWarriorPage() {
  return (
    <CustomClassPage
      name={saiyanWarriorPage.name}
      role={saiyanWarriorPage.role}
      alignment={saiyanWarriorPage.alignment}
      hitDie={saiyanWarriorPage.hitDie}
      startingWealth={saiyanWarriorPage.startingWealth}
      classSkills={saiyanWarriorPage.classSkills}
      skillRanks={saiyanWarriorPage.skillRanks}
      maxLevel={saiyanWarriorPage.maxLevel}
      baseAttackBonusType={saiyanWarriorPage.baseAttackBonusType}
      saveTypes={saiyanWarriorPage.saveTypes}
      additionalColumn={saiyanWarriorPage.additionalColumn}
      classFeatures={saiyanWarriorPage.classFeatures}
      epicLevelClassFeatures={saiyanWarriorPage.epicLevelClassFeatures}
      extraContent={
        <section>
          <h2>Primal Warrior</h2>
          <h2>Class Features: Primal Warrior</h2>
          <p>All of the following are class features of the Primal Warrior</p>
          <h3>Great Ape (Ex)</h3>
          <p>
            The Great Ape, the embodiment of the primal might of the Saiyan
            Warrior, the ability to take this form has long been considered a
            trump card of sorts. The only downside to the form is the complete
            mindless nature of the beast the warrior must become to harness its
            might.
          </p>
          <p>
            At 1st level, the Primal Warrior may create a Power Ball as a
            Full-Round Action. This power ball mimics the light given off by a
            Full Moon, which triggers the transformation into a Great Ape. The
            Power Ball requires an amount of Ki equal to the Primal Warrior's
            character level. The Power Ball can be positioned in any square the
            Primal Warrior can see within 60ft. The Power Ball lasts 1d10
            rounds. The Primal Warrior remains transformed into a Great Ape so
            long as they can see the light of the Power Ball.
          </p>
          <p>
            The transformation into a Great Ape grants a number of benefits;
          </p>
          <p>
            The Great Ape is a Huge creature. While transformed the Primal
            Warrior gains the following benefits due to their size. The Primal
            Warrior gains a +8 size bonus to Strength, a +4 to Constitution, and
            a +5 to their natural armor. They also take a -4 size penalty to
            Dexterity.&nbsp;
          </p>
          <p>
            This size change also gives the Primal warrior a -2 size penalty to
            AC and on attack rolls, a +2 bonus on combat maneuver checks and to
            CMD, a 10-foot reach, a -4 penalty on Fly checks, and a -8 penalty
            on Stealth checks.&nbsp;
          </p>
          <p>
            The Primal Warrior gains a number of additional hit points equal to
            their charisma modifier multiplied by their number of hit dice while
            transformed.
          </p>
          <p>
            The Primal Warrior may add their charisma modifier in addition to
            their constitution modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            All attacks made by the Primal Warrior while transformed deal damage
            in a 10ft radius around the intended target of the attack. The area
            of effect may not be manipulated in any way, it is out of the
            control of the Primal Warrior.
          </p>
          <p>
            After the transformation into a Great Ape ends, the Primal Warrior
            is fatigued.
          </p>
          <h3>Golden Great Ape (Ex)</h3>
          <p>
            The Primal Warrior grows ever closer to exploiting the true depths
            of the power that lurks within their blood. As their power and
            ferocity grow, as does their control over it.
          </p>
          <p>
            At 7th level, the Primal Warrior gains the ability to transform into
            a Golden Great Ape whenever they would normally transform into a
            Great Ape. This form is substantially more powerful, and easier to
            control in comparison to its standard counterpart. In turn, the
            Primal Warrior must expend double the amount of Ki to transform into
            a Golden Great Ape using a Power Ball.
          </p>
          <p>
            The transformation into a Golden Great Ape grants a number of
            benefits;
          </p>
          <p>
            The Great Ape is a Gargantuan creature. While transformed the Primal
            Warrior gains the following benefits due to their size. The Primal
            Warrior gains a +12 size bonus to Strength, a +6 to Constitution,
            and a +10 to their natural armor. They also take a -4 size penalty
            to Dexterity.&nbsp;
          </p>
          <p>
            This size change also gives the Primal warrior a -4 size penalty to
            AC and on attack rolls, a +4 bonus on combat maneuver checks and to
            CMD, a 15-foot reach, a -6 penalty on Fly checks, and a -12 penalty
            on Stealth checks.&nbsp;
          </p>
          <p>The Primal Warrior gains DR/- equal to their charisma modifier.</p>
          <p>
            The Primal Warrior gains a number of additional hit points equal to
            their charisma modifier multiplied by their number of hit dice while
            transformed.
          </p>
          <p>
            The Primal Warrior may add their charisma modifier in addition to
            their constitution modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            All attacks made by the Primal Warrior while transformed deal damage
            in a 10ft cube, and at least one square of the cube must overlap
            with the intended target of the attack. The remaining area of effect
            is in the control of the Primal Warrior.
          </p>
          <h3>Ancestral Form (Ex)</h3>
          <p>
            The Primal Warrior achieves their ultimate form, the form that
            embodies the strength of their ancestors and allows them to wield it
            with deadly efficacy.
          </p>
          <p>
            At 13th level, the Primal Warrior gains the ability to undergo a
            final bloodline transformation. By expending a number of Ki points
            equal to four times their character level as a Full-Round Action,
            they may transform into their Ancestral Form, gaining a variety of
            benefits;
          </p>
          <p>
            The Primal Warrior gains a +16 size bonus to Strength, a +8 to
            Constitution, and a +16 to their natural armor.
          </p>
          <p>
            The Primal Warrior gains fast healing equal to their charisma
            modifier.
          </p>
          <p>
            The Primal Warrior gains a number of additional hit points equal to
            their charisma modifier multiplied by their number of hit dice while
            transformed.
          </p>
          <p>
            The Primal Warrior may add their charisma modifier in addition to
            their constitution modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            While transformed a single source of hit point damage cannot deal
            more damage to the Primal Warrior than double their number of hit
            dice.&nbsp;
          </p>
          <p>
            Multiple attacks or spells from the same creature count as different
            sources of hitpoint damage, each individual hit may only deal up to
            the maximum outlined.
          </p>
          <p>
            This reduction is applied to the damage taken before Damage
            Reduction, Resistance, or Vulnerability is applied.
          </p>
          <p>
            The Ancestral Form requires a number of Ki points every round to
            maintain, spent at the beginning of the Primal Warrior's turn. This
            number of Ki points required is equal to the Primal Warrior's class
            level.
          </p>
          <h3>Primal Paragon (Ex)</h3>
          <p>
            The Primal Warrior has become one with their ancestry, allowing the
            primal energies of their bloodline to ascend them to levels of power
            lost to history.
          </p>
          <p>
            At 20th level, the Saiyan Warrior no longer needs to pay the Ki
            upkeep costs for their Primal transformations. They must still pay
            the costs for the initial transformation, but the Ki cost of
            maintaining the transformation is treated as zero.
          </p>
          <h2>Divine Warrior</h2>
          <h2>Class Features: Divine Warrior</h2>
          <p>All of the following are class features of the Divine Warrior</p>
          <h3>Divine Form (Ex)</h3>
          <p>
            The Divine Warrior knows of the massive potential of Ki, but they
            are aware of something even greater. Ki is made for mortal bodies,
            and has mortal limitations. God Ki is something else altogether.
          </p>
          <p>
            At 1st level, the Divine Warrior gains access to their Divine Form,
            however they may undergo the transformation until they reach the
            time that they are destined to do so. The transformation requires
            that the Divine Warrior expends an amount of Ki equal to their class
            level as a Swift Action.
          </p>
          <p>
            Transforming into their Divine Form grants a variety of benefits;
          </p>
          <p>All movement speeds of the Divine Warrior are doubled.</p>
          <p>
            All attacks made by the Divine Warrior cause an equivalent amount of
            knockback to the amount of damage they deal with the attack, rounded
            down to the nearest 5ft increment.
          </p>
          <p>
            The Divine Warrior gains an additional number of Attacks of
            Opportunity equal to their wisdom modifier.
          </p>
          <p>
            The Divine Warrior gains a deflection bonus to their AC equal to
            their wisdom modifier.
          </p>
          <p>The Divine Warrior may withdraw as a Swift Action.</p>
          <p>
            The Divine Warrior may add their wisdom modifier in addition to
            their dexterity modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            The Divine Form requires a number of Ki points every round to
            maintain, spent at the beginning of the Divine Warrior's turn. This
            number of Ki points required is equal to half of the Divine
            Warrior's class level.
          </p>
          <h3>Ascendant Divine Form (Ex)</h3>
          <p>
            The Divine Warrior has honed their God Ki to a fine edge, most
            evident in that the magenta of the raw God Ki has been refined to a
            brilliant bright blue, and in their newfound mastery they have found
            an even greater echelon of power
          </p>
          <p>
            At 10th level, the Divine Warrior gains access to their Ascendant
            Divine Form,and may transform at any time as a Swift Action. The
            transformation requires that the Divine Warrior expends an amount of
            Ki equal to twice their class level.
          </p>
          <p>
            Transforming into their Ascendant Divine Form grants a variety of
            benefits;
          </p>
          <p>
            All successful attacks made by the Divine Warrior Stagger their
            target for one round. On a successful critical hit, the target is
            instead Stunned
          </p>
          <p>
            The Divine Warrior's melee reach is increased by a number of 5ft
            increments equal to their wisdom modifier.
          </p>
          <p>
            The Divine Warrior gains a bonus equal to twice their wisdom
            modifier on all combat maneuver checks, as well as their CMD.
          </p>
          <p>
            The Divine Warrior may add their wisdom modifier in addition to
            their dexterity modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            The Ascendant Divine Form requires a number of Ki points every round
            to maintain, spent at the beginning of the Divine Warrior's turn.
            This number of Ki points required is equal to the Divine Warrior's
            class level.
          </p>
          <h3>Divine Paragon (Ex)</h3>
          <p>
            The Saiyan Warrior has become one with divinity, allowing the divine
            energies bound to them by fate to ascend them to the realm of the
            gods themselves.
          </p>
          <p>
            At 20th level, the Saiyan Warrior no longer needs to pay the Ki
            upkeep costs for their Divine transformations. They must still pay
            the costs for the initial transformation, but the Ki cost of
            maintaining the transformation is treated as zero.
          </p>
          <h2>Golden Warrior</h2>
          <h2>Class Features: Golden Warrior</h2>
          <p>All of the following are class features of the Golden Warrior</p>
          <h3>Super Saiyan (Ex)</h3>
          <p>
            The Saiyan Warrior is a master of disrupting their opponent's
            rhythm, and claiming the advantage for themselves.
          </p>
          <p>
            At 1st level, the Golden Warrior gains access to their Super Saiyan
            Form. The Golden Warrior must undergo a moment of emotional
            catharsis in order to unlock the ability to transform for the first
            time, and afterwards they may transform at any time as a Move
            Action. The transformation requires that the Golden Warrior expends
            an amount of Ki equal to their class level.
          </p>
          <p>
            Transforming into their Super Saiyan Form grants a variety of
            benefits;
          </p>
          <p>
            When dealing damage with a Ki attack, the Golden Warrior deals
            additional damage for every die rolled equal to their intelligence
            modifier.
          </p>
          <p>
            The Golden Warrior may add their intelligence modifier in addition
            to their strength modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            The Super Saiyan Form requires a number of Ki points every round to
            maintain, spent at the beginning of the Golden Warrior's turn. This
            number of Ki points required is equal to half of the Golden
            Warrior's class level.&nbsp;
          </p>
          <h3>Ascendant Super Saiyan (Ex)</h3>
          <p>
            The Golden Warrior is a master of disrupting their opponent's
            rhythm, and claiming the advantage for themselves.
          </p>
          <p>
            At 10th level, the Golden Warrior gains access to their Ascendant
            Super Saiyan Form. The Golden Warrior must undergo a moment of
            emotional catharsis in order to unlock the ability to transform for
            the first time, and afterwards they may transform at any time as a
            Standard Action. The transformation requires that the Golden Warrior
            expends an amount of Ki equal to twice their class level.
          </p>
          <p>
            Transforming into their Ascendant Super Saiyan Form grants a variety
            of benefits;
          </p>
          <p>
            When dealing damage with a Ki attack, the Golden Warrior deals
            additional damage for every die rolled equal to their intelligence
            modifier.
          </p>
          <p>
            All damage dice for Ki attacks made while transformed are maximized.
          </p>
          <p>
            Whenever making a d20 roll, the Golden Warrior may roll two d20's
            and choose either roll as the result.
          </p>
          <p>
            The Golden Warrior may add their intelligence modifier in addition
            to their strength modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            The Ascendant Super Saiyan Form requires a number of Ki points every
            round to maintain, spent at the beginning of the Golden Warrior's
            turn. This number of Ki points required is equal to the Golden
            Warrior's class level.&nbsp;
          </p>
          <h3>Ultimate Super Saiyan (Ex)</h3>
          <p>
            The Golden Warrior is a master of disrupting their opponent's
            rhythm, and claiming the advantage for themselves.
          </p>
          <p>
            At 17th level, the Golden Warrior gains access to their Ultimate
            Super Saiyan Form, and may transform at any time as a Full-Round
            Action. The transformation requires that the Golden Warrior expends
            an amount of Ki equal to twice their class level.
          </p>
          <p>
            Transforming into their Ultimate Super Saiyan Form grants a variety
            of benefits;
          </p>
          <p>
            When dealing damage with a Ki attack, the Golden Warrior deals
            additional damage for every die rolled equal to their intelligence
            modifier.
          </p>
          <p>
            All damage dice for Ki attacks made while transformed are maximized.
          </p>
          <p>
            All successful attacks made while transformed are considered
            critical hits.
          </p>
          <p>
            Whenever making a d20 roll, the Golden Warrior may roll three d20's
            and choose any of the resulting rolls as the result.
          </p>
          <p>
            The Golden Warrior may add their intelligence modifier in addition
            to their strength modifier on any rolls that include it while
            transformed.
          </p>
          <p>
            The Ultimate Super Saiyan Form requires a number of Ki points every
            round to maintain, spent at the beginning of the Golden Warrior's
            turn. This number of Ki points required is equal to the Golden
            Warrior's class level. Additionally, the Golden Warrior must expend
            a number of hit points equal to their class level.
          </p>
          <h3>Golden Paragon (Ex)</h3>
          <p>
            The Saiyan Warrior has become one with power itself, allowing the
            golden energy to suffuse them, surround them, and empower them to
            achieve levels of power impossible to comprehend.
          </p>
          <p>
            At 20th level, the Saiyan Warrior no longer needs to pay the Ki
            upkeep costs for their Golden transformations. They must still pay
            the costs for the initial transformation, but the Ki cost of
            maintaining the transformation is treated as zero.
          </p>
        </section>
      }
    />
  );
}
