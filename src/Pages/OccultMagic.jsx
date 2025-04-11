import * as React from 'react';
import { Link } from 'react-router-dom';

export function OccultMagic() {
  return (
    <section>
      <h1>Occult Magic</h1>
      <p>
        Occult Magic is the least understood of the classes of magic. Among its
        contemporaries, Divine and Arcane magic are far better understood
        through the course of academic study and religious pursuit.Occult Magic
        is difficult to parse and understand, seemingly by design. Its
        mechanisms have been broken down by its practitioners, however.
      </p>
      <p>
        Occult Magic Practitioners include the likes of Witches, Warlocks,
        Oracles, Psychics, Mesmerists, Summoners, Shamans, and Shifters.
      </p>
      Occult Magic can be quantified by a system of give and take. The more the
      caster gives in relation to casting, the greater the magical effect of the
      resulting spell. Additionally, magic gained from pacts and deals is most
      often Occult, given that they operate off of a similar system of give and
      take.
      <h2>Binding Vows</h2>
      <p>
        Binding Vows are the most common alteration of Occult Magic, directly
        leveraging the system of give and take in order to directly benefit the
        practitioner. Binding Vows operate by layering restrictions and
        prerequisites atop the casting of a spell in order to draw out a greater
        result.
      </p>
      <p>
        In the case of most Binding Vows, whenever they are invoked they remain
        in effect until the invoker takes a long rest and reverses the Vow. In
        the case of Abstract Binding Vows, they are, more often than not,
        permanent.
      </p>
      <p>Binding Vows come in many forms, enumerated below.</p>
      <h3>Spell Components</h3>
      <p>
        Spell Components; Somatic, Verbal, Material, Thought, and Emotion, are a
        cornerstone of all magic. Many spells require them to even successfully
        draw out the magical effect in the first place, however spells which do
        not require such components may have them added in order to further
        increase the power of the resulting magical effect.
      </p>
      <p>
        Additional Somatic Components grant a free metamagic level for each hand
        that needs to be free in order to cast the spell. Using both hands in
        order to cast a spell which has no Somatic requirement would grant +2
        metamagic levels, whereas using both hands in order to cast a spell
        which already has somatic components, and does not explicitly require
        both, would gain +1 metamagic level from the additional hand used.
      </p>
      <p>
        Additional Material Components grant a free metamagic level for each
        digit of the gold piece value of the component for every digit beyond
        the third. These Material Components are consumed in the casting of the
        spell. Additional metamagic levels could be granted if the component has
        particular importance to the manner of spell being cast, and this is
        determined on a case by case basis.
      </p>
      <p>
        Additional Verbal, Thought, and Emotion Components grant a free
        metamagic level to spells which do not already possess them.
      </p>
      <h3>Casting Time</h3>
      <p>
        Increasing the amount of time required to cast a spell is one of the
        more effective ways to increase the amount of power that can be gained
        from a spell.
      </p>
      <p>
        The spell gains one metamagic level per step of action increased,
        adhering to the following pattern; Free Action -&gt; Swift/Immediate
        Action -&gt; Move Action -&gt; Standard Action -&gt; Full-Round Action
        -&gt; 1 Round Casting Time -&gt; Multiple Rounds.
      </p>
      <p>
        Any increase of rounds beyond the first grants +1 metamagic level per
        round spent casting.
      </p>
      <p>
        This Binding Vow cannot be applied to spells with a casting time greater
        than one minute.
      </p>
      <h3>Cooperative Casting</h3>
      <p>
        Additional spellcasters may offer assistance in the casting of spells.
        They must either know the spell being cast cooperatively, possess the
        Cooperative Casting feat, or have the spell explained to them by the
        caster requiring either a Spellcraft check from the caster (DC15 + Spell
        level) or a Sense Motive check from the cooperative caster (DC20 + Spell
        level). The benefit gleaned from cooperative casting is equivalent to
        the extra components offered by the cooperative caster (Somatic, Verbal,
        Material, Thought, or Emotion) plus one. The casting must be
        simultaneous, the cooperative casters holding their actions or delaying
        their turns in order to synchronize their casting with the main caster.
      </p>
      <h3>Sacrifices</h3>
      <p>
        The sacrifice of a creature in order to increase the effectiveness of a
        spell is among the most effective of all Binding Vows. The creature
        being sacrificed must be freshly killed by the caster or a cooperative
        caster, being dead no longer than one minute before the casting of the
        spell.
      </p>
      <p>
        Intelligent Sacrifices grant +1 metamagic level per hit die of the
        sacrificed creature.
      </p>
      <p>
        Unintelligent Sacrifices grant +1 metamagic level per two hit dice of
        the sacrificed creature.
      </p>
      <p>
        The Sacrifice must be killed for the expressed purpose of a Binding Vow,
        and the corpse of the creature or creatures are destroyed upon spell
        completion.
      </p>
      <h3>Abstract Vows</h3>
      <p>
        There are vows that are more difficult to quantify in terms of their
        metamagic equivalent. These must be determined on a case-by-case basis,
        however there are practically infinite possibilities.
      </p>
      <p>
        For Example; Declaring that, should this spell fail to kill its target,
        you will never cast this spell again, such a vow would surely grant a
        great deal of metamagic power for the risk it represents, much more than
        using an additional hand in casting would.
      </p>
      <p>
        Breaking an abstract vow would have similar consequences as to breaking
        a Pact, that is to say, severe and debilitating.
      </p>
      <Link to={'/reworks'}>Back</Link>
    </section>
  );
}
