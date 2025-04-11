import * as React from 'react';
import { Link } from 'react-router-dom';

export function Duels() {
  return (
    <section>
      <h1>Duels</h1>
      <h2>Overview</h2>
      <p>
        A duel is an alternative way of operating one-on-one combat. Rather than
        using standard combat rules where the goal is to reduce the enemy's hit
        points, the goal of a duel is to win a series of contested d20 rolls.
        The successes and failures of either creature are represented using a
        Duel Meter; whenever one end of the Meter is reached, the creature
        representing that end of the Meter is declared the victor of the duel.
      </p>
      <p>
        The progress of a duel is indicated by the Duel Meter; this is
        represented by a series of ticks. The center tick represents the initial
        condition of the duel, and the ticks to either side of the center
        indicate which creature has control in the duel, with the ticks at the
        very end of the Meter indicating the victory condition for each
        creature. A duel begins through an initiative roll; whichever creature
        rolls the highest gains control over the duel. After the initiative
        roll, a marker is placed at the center tick of the Duel Meter. After
        this, the creature in control chooses any attribute with a bonus on
        their character sheet-ability score bonuses, skills, saves, CMB,
        etc.-and challenges the other creature to a contested d20 roll using
        that bonus. Whichever creature wins this roll will move the marker one
        ticker closer to their victory condition. If the creature who won
        initiative succeeds on this contested roll at the center tick, then they
        will continue to have control over the duel, and may decide the bonus to
        use for the next challenge. However, if marker on the Duel Meter crosses
        over the central tick, then the creature who was previously not in
        control now gains control of the duel, and may decide the bonus to use
        for the next challenge. This process continues until the marker reaches
        one end of the Duel Meter, upon which the associated creature is
        declared the victor of the duel
      </p>
      <p>
        Attacks are considered special within a duel. If a creature elects to
        make an attack rather than a contested roll, then the defending creature
        may select any bonus they wish in order to defend. The defending
        creature must then exceed the attack roll of the attacking character in
        order to avoid the attack, or must exceed the save DC of the attack, if
        it has one. If an attack is successful then the defending creature
        suffers any effects that the attack would entail, and also lose that
        round of the duel.
      </p>
      <h2>Rounds</h2>
      <p>
        A duel is fought through a series of contested d20 rolls. In each round
        of the duel, the creature in control chooses an attribute with a bonus
        from their character sheet; this can include bonuses to ability scores,
        skills, saves, CMB, attack, and any other relevant bonus that can be
        added to a d20 roll. After the choice of a bonus is made, both creatures
        in the duel make a d20 roll and add their bonus to the roll. Whichever
        creature rolls highest wins the round and moves the marker on the Duel
        Meter one tick closer to their victory condition. The bonus used in a
        round cannot be used again afterwards (e.g. if the contested roll was in
        Acrobatics, then the Acrobatics skill cannot be used again for another
        contested roll in a future round). However, if all bonuses are exhausted
        from the character sheet of either creature, then the next contested
        roll is an initiative roll, and all bonuses are replenished and may be
        used again for future rounds.
      </p>
      <p>
        If a creature succeeds on a roll of a natural 20, then they may move the
        marker two ticks rather than one.
      </p>
      <h2>Control</h2>
      <p>
        The creature who controls the duel determines which attribute to
        challenge the opposing creature to. The creature who wins the beginning
        initiative roll starts the duel with control. As long as the marker
        stays within their half of the Duel Meter, the associated creature
        continues to have control. If the marker crosses over the central tick
        of the Duel Meter and enters into the other creature's half, then the
        other creature will gain control of the duel.
      </p>
      <p>
        A special case arises when the marker reaches the second to last tick of
        either end of the Duel Meter; the creature who is not in control of duel
        temporarily gains control for this round. After this round is resolved,
        control returns to the creature that originally possessed it.
      </p>
      <h2>Duel Meter</h2>
      <p>
        A Duel Meter indicates the progress of a duel. When a duel is initiated,
        it must be determined whether the fight will be a spar or to the death.
        If it is a spar, the Meter will be made up of 9 ticks. If it is to the
        death, the Meter will be made up of 13 ticks; these are general
        guidelines, and the tick count may be increased or decreased depending
        on the context.
      </p>
      <p>
        All duels begin with a marker placed on the central tick of the Duel
        Meter. The marker moves left and right as the duel progresses, until
        reaching the final tick at either end of the meter; as soon as the
        marker is moved to a tick at the end of the duel, the duel is over and
        the associated victor is declared.
      </p>
      <h2>Momentum Shifts</h2>
      <p>
        There are certain abilities that may be used to entirely shift the
        momentum of a duel, completely turning the tides of battle. When a
        creature activates an ability that can function as a Momentum Shift,
        then the duel marker is moved to the opposite side of the Duel Meter (if
        the creature is losing) and is placed on the position mirroring its
        previous placement. Momentum Shifts may only occur once per duel per
        ability, even if the ability may be used more often.
      </p>
      <p>
        Abilities that function as Momentum Shifts are denoted as such within
        the description for the Ability itself.
      </p>
      <Link to={'/dm-homebrew'}>Back</Link>
    </section>
  );
}
