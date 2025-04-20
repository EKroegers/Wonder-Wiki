import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function LivingSpells() {
  return (
    <section>
      <h1>Living Spells</h1>
      <p>
        All Arcane spells take a physical form, humanoid or non-humanoid,
        sapient or animalistic. They can be bound into service by a mage, either
        by force, or perhaps through a bargain. These bonds are most easily made
        by arcane spellcasters, however non-casters can bind a single Living
        Spell into their service through the aforementioned means. Other types
        of spellcasters are unable to bind living spells, as they derive their
        magic through other means. These living spells can reproduce like
        typical living beings, but are born fully grown and do not age. They can
        die through other means, however.
      </p>
      <h2>Binding</h2>
      <p>
        Binding is a ritual performed by a prospective caster and a Living
        Spell, wherein the Living Spell swears to provide its power to its
        caster whenever called upon. A Binding Ritual is actually a rather
        simple process, merely requiring a moment of physical contact once the
        terms of the Bind are determined by the two parties, and the utterance
        of the Living Spell's True Name, which is typically kept secret as True
        Names allow a degree of control over their owner. Once Bound the living
        spell can select one of two fates; travel with their caster and use
        their talents whenever asked, or reside wherever they wish, but be
        forced to their casters side whenever their power is called upon. No
        matter the method of Binding the Caster can dismiss any one of their
        bonds as a swift action. If a Caster is to die, all of their currently
        Bound Living Spells are Unbound and left to their own devices.
      </p>
      <h2>Caliber</h2>
      <p>
        The general might of a Living Spell is measured by their Caliber.
        Caliber is a guideline developed by scholars, though it is scarcely
        acknowledged by Living Spells themselves outside of the company of
        non-magical beings. These Calibers span 0 thru 9, though Living Spells
        of Calibers exceeding 4 are strictly theoretical, as far as the
        scholarly community is concerned.
      </p>
      <h2>Growth</h2>
      <p>
        Living Spells have the same capacity to grow and evolve as the average
        creature, and their advancement is marked mainly by their innate magical
        ability. This ability can be enhanced through frequent use, creativity
        in use as well as the stress under which the ability is utilized. Over
        time a Living Spell reaches another echelon of power, and is ready for
        an Ascension of sorts. This Ascension requires a ritual unique to every
        Living Spell, and upon completion will increase their caliber, and alter
        their ability. Upon Ascension the Living Spell's previous ability is
        lost, and replaced by a new ability of greater caliber.
      </p>
      <h2>Wild and Tamed</h2>
      <p>
        A Wild Living Spell, that being one that has not been bound to a caster,
        is far more powerful that its tamed counterpart. When Wild, a Living
        Spell can utilize its ability at will, without limit save for physical
        exhaustion. When bound it is limited by its' Caster's abilities,
        aligning with their Spells per Day and Spell DC's. Non-Casters with a
        Tamed Living Spell can utilize their talents once per day, gaining
        additional uses for every 5HD they possess, and selecting any mental
        ability score as their Casting Modifier to determine Save DC.
      </p>
      <h2>Metamagic</h2>
      <p>
        Metamagic exists within the setting, though it is expensive and
        impractical for the average adventurer. Metamagic enhancements can be
        bound in two forms; Equipment and Consumable. Metamagic Equipment may be
        applied to a Living Spell in the same manner that magical equipment is
        applied to the average creature, though expensive, its effects are
        permanent so long as it is worn. Consumable Metamagic applies to the
        next ability utilized by the Living Spell, and the effects of most
        consumables persist for one minute or until discharged, whichever comes
        first.
      </p>
      <h2>Character Sheets</h2>
      <p>
        Living Spells mechanics differ depending on whether they are wild or
        tamed. If a Living Spell is wild then they may have a number of hit
        dice, abilities of their own, or even class levels. When tamed a Living
        Spell's power is significantly reduced, instead using the mechanics for
        a familiar treating their casters level as the effective Wizard level
        for them. The statistical basis they use as a familiar differs between
        Living Spells, but typically they will be a humanoid with an appropriate
        subtype, whose base stats are assigned by the DM using the Standard
        Array.
      </p>
      <h3>On Living Spell Hybrids</h3>
      <p>
        Unions of Living Spells and Non-Magical creatures produce offspring that
        are innately magical, such as elementals, constructs, oozes, undead, and
        outsiders. Though Living Spells and creatures of these categories are
        not mutually exclusive.
      </p>
      <LinkCard url={'/setting'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
