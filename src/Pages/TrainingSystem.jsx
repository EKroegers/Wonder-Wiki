import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function TrainingSystem() {
  return (
    <section>
      <h1>Training</h1>
      <p>
        Training is an alternative progression system to better capture and
        accentuate the exploration pillar of tabletop role playing games.
        Training also serves to turn progression into a player-driven experience
        that serves to further engage players within the game world. Training is
        split into four distinct components, which progress systematically and
        end with a reward for the player in the form of progression either with
        Class Levels, Feats, Statistic Bonuses, Equipment, etc.
      </p>
      <h2>Seek</h2>
      <p>
        Seek is the first component of the Training progression system. In this
        stage the player decides on a goal for their training. They must decide
        on what they seek to gain from their training, and then the remainder of
        the components are spent in pursuit of this goal. Goals can be
        determined to be anything the player wishes to gain for their character,
        and the easiest default thing to seek is the next Class Level.
      </p>
      <h2>Catalyst</h2>
      <p>
        Catalyst is the second component of Training. Catalysts are
        DM-controlled, and are the beginning of the acquisition of the rewards
        of Training. Catalysts can be many things, but serve as the resource or
        avenue of pursuit to further the goal determined in the Seek component.
        A catalyst could be a tome containing information about swordsmanship,
        which the party Samurai could study from in order to claim their next
        Class Level. The Samurai would first decide to Seek their next level,
        and their acquisition of the tome would be their Catalyst.
      </p>
      <h2>Experience</h2>
      <p>
        Experience is the third component of Training. Experience could be
        considered the application of the knowledge or resource gained from the
        Catalyst. Most often this involves the player going out on a limb and
        attempting to use an ability they do not yet possess, taking great risks
        and likely enduring one or multiple failures before being able to move
        on. A Samurai that has decided to Seek their next level may have a tome
        of swordsmanship as a Catalyst, meaning that their Experience would be
        to attempt to Challenge a foe in single combat, and likely face heavy
        repercussions for attempting to take on a foe far above their skill
        level.
      </p>
      <h2>Improvement</h2>
      <p>
        Improvement is the final component of Training. Improvement is claimed
        whenever the application of the character's Training has yielded
        fruitful results. The significance of the Improvement gained from the
        Training is usually proportional to the amount of Experience, and
        failure, the character must live through before they gain their
        Improvement. A Samurai that has decided to Seek their next level may
        have a tome of swordsmanship as a Catalyst, meaning that their
        Experience would be to attempt to Challenge a foe in single combat, and
        they have decided to make their foe a legendary Akohn warlord. In their
        duel with the warlord they are beaten within an inch of their life,
        however they are able to prove themselves in combat enough to impress
        the warlord, and long enough to allow their teammates to surround the
        warlord and finish them off. As the Samurai delivers the finishing blow,
        they have claimed success, and seized their Improvement as a result, in
        this case leveling up.
      </p>
      <LinkCard url={'/dm-homebrew'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
