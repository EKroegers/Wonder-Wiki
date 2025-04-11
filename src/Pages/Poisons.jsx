import * as React from 'react';
import { Link } from 'react-router-dom';

export function Poisons() {
  return (
    <section>
      <h1>Poisons</h1>
      <p>
        Poison is the oldest weapon of the world. Wielded first by beasts, and
        then by man. The art of poison making has grown more and more refined
        over the course of history, and moving from a sickeningly brutal and
        clumsy method of execution to one of the most swift and precise.
      </p>
      <p>
        Though many adventurers are desperate for immediate gratification and
        therefore gravitate towards methods of killing their enemies
        instantaneously, the smarter ones know that just a bit of patience is
        all that is required for mundane poison to be more deadly than any
        magical armament.
      </p>
      <h2>Making Poisons</h2>
      <p>
        Whenever crafting a poison, the resulting Grade of the poison is equal
        to the Craft (alchemy) check divided by five, so long as the check
        exceeds 15. The crafter may decide how the Grades of the poison are
        allocated.
      </p>
      <p>
        The resulting gold piece price of a poison is equivalent to 100gp per
        Grade.
      </p>
      <h2>Poison Grades</h2>
      <p>
        Grades are a measure of the relative quality of a poison, however they
        are not a direct measure of a poison’s deadliness. Listed below are the
        numerous components that make up a poison, and the relative Grades that
        each effect must be in order to achieve the desired effect. A poison
        maker must allocate the Grades of the poison in order to “purchase” the
        poison effects listed.
      </p>
      <h3>Type</h3>
      <p>
        Grade 0 – Ingested – These poisons are delivered when a creature eats or
        drinks the poison.
      </p>
      <p>
        Grade 1 – Inhaled – These poisons are delivered the moment a creature
        enters an area containing such poisons.
      </p>
      <p>
        Grade 2 – Injury – These poisons are primarily delivered through the
        attacks of certain creatures and through weapons coated in the toxin.
      </p>
      <p>
        Grade 3 – Contact – These poisons are delivered the moment a creature
        touches the poison with its bare skin.
      </p>
      DC
      <p>
        Grade 0+ – Increased DC – The Fortitude Save DC of a poison is equal to
        the craft check which created it. The DC of the poison may be
        additionally increased by +5 for each Grade allocated.
      </p>
      <h3>Onset</h3>
      <p>
        Grade 2+ – 1 hour – Failing the save against the poison shows no ill
        effects until 1 hour later. The Grade of the effect may be increased by
        1 for each additional hour the onset of the poison is delayed.
      </p>
      <p>
        Grade 1 – 10 minutes – Failing the save against the poison shows no ill
        effects until 10 minutes later
      </p>
      <p>
        Grade 0 – 1 minute – Failing the save against the poison shows no ill
        effects until 1 minute later
      </p>
      <p>
        Grade 1 – 1 round – Failing the save against the poison shows no ill
        effects until 1 round later
      </p>
      <p>
        Grade 2 – Instant – Failing the save against the poison immediately
        shows ill effects.
      </p>
      <h3>Frequency</h3>
      <p>Grade 0 – 1x – The poison effect occurs 1 time</p>
      <p>Grade 1 – 2x – The poison effect occurs 2 times</p>
      <p>Grade 2 – 3x – The poison effect occurs 3 times</p>
      <p>Grade 3 – 4x – The poison effect occurs 4 times</p>
      <p>Grade 4 – 5x – The poison effect occurs 5 times</p>
      <p>Grade 5 – 6x – The poison effect occurs 6 times</p>
      <h3>Duration</h3>
      <p>Grade 0 – Instant – There is no lasting effect for the poison.</p>
      <p>
        Grade 1 – Rounds – The duration of the effect is a number of rounds
        equal to the minimum required for the effect to occur in accordance with
        the Frequency.
      </p>
      <p>
        Grade 2 – Minutes – The duration of the effect is a number of minutes
        equal to the minimum required for the effect to occur in accordance with
        the Frequency.
      </p>
      <p>Grade 3 – 1 hour – The duration of the effect is one hour.</p>
      <h3>Effect</h3>
      <p>
        Grade 0+ – Hit point Damage – The amount of hit point damage dealt by a
        poison is equal to the number of hit dice the victim possesses. The
        Grade of the effect may be increased by 1 for each additional hit point
        per hit die of damage the resulting poison would deal. For example; a
        poison that deals 3 points of hit point damage per hit die would be a
        Grade 2 effect.
      </p>
      <p>
        Grade 3+ – Ability Damage – The poison would deal a single point of
        ability damage to the victim. The Grade of the effect may be increased
        by 1 for each die step the ability damage would be increased by. For
        example; a poison that deals 1d2 Wisdom damage would be a Grade 4
        effect.
      </p>
      <p>
        Grade Varies – Status Effect – The poison inflicts a status effect on
        the victim.
      </p>
      <p>The following status effects are considered Grade 1;</p>
      <p>Fatigued, Shaken, Sickened, Dazed, Staggered</p>
      <p>The following status effects are considered Grade 2;</p>
      <p>Exhausted, Frightened, Nauseated</p>
      <p>The following status effects are considered Grade 3;</p>
      <p>Blinded, Deafened, Paralyzed, Stunned</p>
      <p>
        Multiple status effects can be applied to the same poison, their Grades
        being summed together.
      </p>
      <p>Durations for statuses are one round by default.</p>
      <p>
        Grade Varies – Spell Effect – The Grade of the effect is equivalent to
        the level of the spell effect that the victim would be afflicted with.
        The poison maker must know and be able to cast the spell they are
        imbuing into the poison.
      </p>
      <h3>Cure</h3>
      <p>
        Grade 0 – 1 Save – One successful save is required in order to end the
        effects of the poison prematurely.
      </p>
      <p>
        Grade 1 – 2 Saves – Two successful saves over the course of the poison’s
        duration are required to end the effects of the poison prematurely.
      </p>
      <p>
        Grade 3 – 2 Consecutive Saves – Two consecutively successful saves over
        the course of the poison’s duration are required to end the effects of
        the poison prematurely.
      </p>
      <Link to={'/reworks'}>Back</Link>
    </section>
  );
}
