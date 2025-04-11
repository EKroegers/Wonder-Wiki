import * as React from 'react';
import { Link } from 'react-router-dom';

export function CoreRuleChanges() {
  return (
    <section>
      <h1>Core Rule Changes</h1>
      <h2>Action Economy</h2>
      <h3>Attack Actions</h3>
      <p>
        Whenever taking an attack action, you may make all attacks allowed by
        your base attack bonus as if taking a full attack. In other words, a
        full attack action only requires a standard action to perform.
      </p>
      <h2>Base Attack Bonus</h2>
      <h3>Iterative Attacks</h3>
      <p>
        Iterative attacks from a sufficiently high base attack bonus will no
        longer be any lower than the character's highest base attack bonus minus
        five. For instance, instead of a level 16 paladin having a base attack
        bonus of +16/+11/+6/+1 that paladin would instead have a base attack
        bonus of +16/+11/+11/+11.
      </p>
      <h2>Combat Maneuvers</h2>
      <h3>Sunder</h3>
      <p>
        When making a sunder combat maneuver, if the CMB roll overcomes the
        opponents CMD, then the item is automatically hit and the damage dealt.
        Hardness functions as DR, and hitpoints function the same for objects. A
        sundered item gains the Broken condition.
      </p>
      <h2>Optional Rule Additions</h2>
      <h3>Knockback</h3>
      <p>
        When taking damage in excess of 25 points in a single hit (or from a
        full attack using Pummeling Style or Cluster Shots or a similar feature)
        the recipient of the damage is sent backwards a number of feet (rounded
        down in 5ft increments) equal to the amount of damage taken minus 25.
      </p>
      <h2>Optional Rule Modifications</h2>
      <h3>Unbound Racial Bonuses</h3>
      <p>
        When selecting a race you may consult your DM and instead select the
        features allotted by one race, and the appearance of any other, treating
        racial features as simple ability boons, similar to class selection and
        not tied to the physical characteristics of the character.
      </p>
      <h4>Addendum: Races as Boons</h4>
      <p>
        In certain settings it may be pertinent to treat racial bonuses as boons
        granted by a higher power, wherein there is a single actual “race”
        in-setting and the additional bonuses granted from a particular racial
        bonus optionally apply superficial visual changes in addition to
        mechanical bonuses.
      </p>
      <Link to={'/reworks'}>Back</Link>
    </section>
  );
}
